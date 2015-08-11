'use strict';

var Transform = require("stream").Transform;
var util = require("util");
var split = require('split');
var parseObject = require('./parseObject');
var async = require('async');
var _ = require('lodash');

var parseIndex = [];

function VaParserStream() {
    Transform.call(this, {
        "objectMode": true
    }); // invoke Transform's constructor, expected result is object
    this.rowCount = 1;
    this.emptyRows = 0;
    this.error = null;
}

util.inherits(VaParserStream, Transform); // inherit Transform

/**
 * @Function _transform
 * Define standart Transform Stream's function _transform
 * @param (String) line - input line
 * @param (String) encoding - encoding (not used now)
 * @param cb - callback to notify that we are done with a row
 */
VaParserStream.prototype._transform = function (line, encoding, cb) {

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
            async.series([function (cb1) { //major sections
                    var match;
                async.eachSeries(parseObject, function (parseItem, cb2) {
                        if (!match) {
                            if (parseItem.multiple || !parseItem.found) {
                                match = parseItem.pattern.exec(line);
                                if (match) {
                                    parseItem.found = true;
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
                        } else {
                            cb2();
                        }
                    }, function (err) {
                        cb1();
                    });
            }, function (cb1) { //nested data 1 (primary fields in section)
                if (parseIndex.length > 0 && !wasSetThisLine) {
                    var match;
                    async.eachSeries(parseIndex[0].model, function (parseItem2, cb3) {
                        if (!match) {
                            if (parseItem2.multiple || !parseItem2.found) {
                                match = parseItem2.pattern.exec(line);
                                if (match) {
                                    parseItem2.found = true;
                                    if (parseIndex.length > 1) {
                                        for (var i = 1; i < parseIndex.length; i++) {
                                            parseIndex.pop();
                                        }
                                        }
                                    if (parseItem2.model.length > 0) {
                                        parseIndex.push(parseItem2);
                                        wasSetThisLine = true;
                                        }
                                    var processed = parseItem2.process(parseIndex[0].processed, match);
                                    for (var j = 0; j < Object.keys(processed).length; j++) {
                                        parseIndex[0].processed[Object.keys(processed)[j]] = processed[Object.keys(processed)[j]];
                                    }
                                    parseItem2.raw.push(line);
                                    cb3();
                                } else {
                                    cb3();
                                    }
                                } else {
                                    cb3();
                                }
                            } else {
                                cb3();
                            }
                    }, function (err) {
                        cb1();
                    });
                } else {
                        cb1();
                }
                }
                /*
                 , function (cb1) { //nested data 2 (multiple primary fields)
                 if (parseIndex.length > 1 && !wasSetThisLine) {
                 var match;
                 async.eachSeries(parseIndex[1].model, function (parseItem2, cb3) {
                 if (!match) {
                 if (parseItem2.multiple || !parseItem2.found) {
                 match = parseItem2.pattern.exec(line);
                 if (match) {
                 parseItem2.found = true;
                 if (parseItem2.model.length > 0) {
                 parseIndex.push(parseItem2);
                 }
                 var processed = parseItem2.process(parseIndex[1].processed, match);
                 for (var i = 0; i < Object.keys(processed).length; i++) {
                 parseIndex[1].processed[Object.keys(processed)[i]] = processed[Object.keys(processed)[i]];
                 }
                 parseItem2.raw.push(line);
                 cb3();
                 } else {
                 cb3();
                 }
                 } else {
                 cb3();
                 }
                 } else {
                 cb3();
                 }
                 }, function (err) {
                 cb1();
                 });
                 } else {
                 cb1();
                 }
                 } */
            ], function (err) {
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
VaParserStream.prototype._flush = function (cb) {
    if (this.error) {
        this.push(this.error);
    } else {
        console.log("Done processing");
        var outputObj = _.reduce(parseObject.map(function (obj) {
            var result = {};
            result[obj.name] = obj.processed;
            return result;
        }), function (memo, current) {
            return _.extend(memo, current);
        }, {});
        /*
         var keys = Object.keys(outputObj);
         keys.forEach(function (key) {
         if (Object.keys(outputObj[key]).length > 0) {
         console.log(key + ': ' + JSON.stringify(Object.keys(outputObj[key])));
         }
         });
         */
        this.push(outputObj);
        /*
         console.log(JSON.stringify(parseObject.map(function (obj) {
         var result = {};
         result[obj.name] = obj.processed;
         return result;
         })));
         */
    }
    cb(); // Notify done
};

//TODO : remove
function streamToIntObj(istream, done, error) {
    var ps = new VaParserStream();
    istream /*.pipe(split())*/ .pipe(ps).on('finish', function () {
        done(ps.rows);
    }).on('error', function (e) {
        if (error) {
            error(e);
        }
    });
}

module.exports.streamToIntObj = streamToIntObj;
module.exports.VaAsciiFile2Object = VaParserStream;
