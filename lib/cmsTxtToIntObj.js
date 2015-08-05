'use strict';

var Transform = require("stream").Transform;
var util = require("util");
var split = require('split');
var parseObject = require('./parseObject');
var async = require('async');

var parseIndex = [];

function CmsParserStream() {
    Transform.call(this, {
        "objectMode": true
    }); // invoke Transform's constructor, expected result is object
    this.rowCount = 1;
    this.emptyRows = 0;
    this.error = null;
}

util.inherits(CmsParserStream, Transform); // inherit Transform

/**
 * @Function _transform
 * Define standart Transform Stream's function _transform
 * @param (String) line - input line
 * @param (String) encoding - encoding (not used now)
 * @param cb - callback to notify that we are done with a row
 */
CmsParserStream.prototype._transform = function (line, encoding, cb) {

    if (line) {
        line = line.trim();
    }

    //Ignore the rest of input in case of error
    if (!this.error) {
        //Don't propagate empty rows, just count
        ++this.rowCount;
        if ('' === line) {
            ++this.emptyRows;
            cb();
        } else {
            var wasSetThisLine = false;
            async.series([function(cb1){
                var match;
                async.eachSeries(parseObject,function(parseItem, cb2) {
                    if (!match) {
                        match = parseItem.pattern.exec(line);
                        if (match) {
                            if (parseIndex.length > 0) {
                                for (var i = 0; i < parseIndex.length; i++) {
                                    parseIndex.pop();
                                }
                            }
                            if (parseItem.model.length > 0) {
                                parseIndex = [parseItem];
                            }
                            parseItem.raw.push(line);
                            wasSetThisLine = true;
                            cb2();
                        } else {
                            cb2();
                        }
                    } else {
                        cb2();
                    }
                },function(err) {
                    cb1();
                });
            },function(cb1){
                if (parseIndex.length > 0 && !wasSetThisLine) {
                   var match;
                    async.eachSeries(parseIndex[0].model,function(parseItem2, cb3) {
                        if (!match) {
                            match = parseItem2.pattern.exec(line);
                            if (match) {
                                if (parseIndex.length > 1) {
                                    for (var i = 1; i < parseIndex.length; i++) {
                                        parseIndex.pop();
                                    }
                                }
                                if (parseItem2.model.length > 0) {
                                    parseIndex.push(parseItem2);
                                    wasSetThisLine = true;
                                }
                                var processed = parseItem2.process(parseItem2.processed, match);
                                for (var i = 0; i < Object.keys(processed).length; i++) {
                                    parseItem2.processed[Object.keys(processed)[i]] = processed[Object.keys(processed)[i]];
                                }
                                parseItem2.raw.push(line);
                                cb3();
                            } else {
                                cb3();
                            }
                        } else {
                            cb3();
                        }
                    },function(err) {
                        cb1();
                    });
                } else {
                    cb1();
                }
            },function(cb1){
                if (parseIndex.length > 1 && !wasSetThisLine) {
                    var match;
                    async.eachSeries(parseIndex[1].model,function(parseItem2, cb3) {
                        if (!match) {
                            match = parseItem2.pattern.exec(line);
                            if (match) {
                                if (parseItem2.model.length > 0) {
                                    parseIndex.push(parseItem2);
                                }
                                var processed = parseItem2.process(parseItem2.processed, match);
                                for (var i = 0; i < Object.keys(processed).length; i++) {
                                    parseItem2.processed[Object.keys(processed)[i]] = processed[Object.keys(processed)[i]];
                                }
                                parseItem2.raw.push(line);
                                cb3();
                            } else {
                                cb3();
                            }
                        } else {
                            cb3();
                        }
                    },function(err) {
                        cb1();
                    });
                } else {
                    cb1();
                }
            }], function(err) {
                //console.log(JSON.stringify(parseObject));
                cb();
            });
        }
    } else {
        cb();
    }
};

/**
 * @Function _flush
 * Define standart Transform Stream's function _flush
 * Normally in should push parsed result (or error) to a pipe
 * @param cb - callback to notify that we are done
 */
CmsParserStream.prototype._flush = function (cb) {
    if (this.error) {
        this.push(this.error);
    } else {
        console.log("Done processing");
        console.log(JSON.stringify(parseObject));
    }
    cb(); // Notify done
};

/**
 * @Function push2top
 * Utility function to support parsing
 * @param (String) name - name of property to be attached to an object on top of stack and moved to top of stack
 * @param (Integer) newState - put a new state on a top of state stack
 * @param (Object) extend - optional value(s) for object to be attached
 */
CmsParserStream.prototype.push2top = function (name, newState, extend) {
    var top = _.last(this.stack);
    //var meta;
    var meta = {};
    /*
     if (Array.isArray(top)) {
     meta = (extend) ? _.extend({}, extend) : {};
     top.push(meta);
     } else {
     meta = top[name] = (extend) ? _.extend({}, extend) : {};
     }
     */
    //meta = top[name] = (extend) ? _.extend({}, extend) : {};
    this.stack.push(meta);
    this.stateStack.push(newState);
};

/**
 * @Function move2state
 * Utility function to support parsing
 * @param (Integer) newState - value on top of state stack will be replaced to it
 */
CmsParserStream.prototype.move2state = function (newState) {
    this.stateStack.pop();
    this.stateStack.push(newState);
};

//TODO : remove
function streamToIntObj(istream, done, error) {
    var ps = new CmsParserStream();
    istream/*.pipe(split())*/.pipe(ps).on('finish', function () {
        done(ps.rows);
    }).on('error', function (e) {
        if (error) {
            error(e);
        }
    });
}

module.exports.streamToIntObj = streamToIntObj;
module.exports.CmsFile2Object = CmsParserStream;