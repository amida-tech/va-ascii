//main file for CMS parser.

//var cmsObjConverter = require('./cmsObjConverter');
var streamToIntObj = require('./vaTxtToIntObj').streamToIntObj;

module.exports = {
    "VaAsciiFile2Object": require('./vaTxtToIntObj').VaAsciiFile2Object,
    "IntObjToFhirStream": require('./IntObjToFhir').IntObjToFhirStream
};
