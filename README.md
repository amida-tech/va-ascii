va-ascii
=================

Blue Button VA-ASCII to FHIR Parser

Generate FHIR JSON data from VA files. 

## About

This parser converts MyHealtheVet *.txt files to FHIR objects.  Sample files were obtained from [VA's Blue Button Resources](http://www.va.gov/BLUEBUTTON/Resources.asp).  At the moment we're only parsing 15 of the 31 sections to an intermediate JSON object.  These include: Self and VA Demographics, VA Appointments (past), VA Allergies, VA Medication History, VA Problem List, VA Admissions and Discharges, VA Immunizations, VA Labs, VA Vitals, VA Notes, Self Immunizations, Self Allergies, Self Medication History, Self Labs, Self Vitals


## Usage

``` javascript
var split = require('split');
var bbva = require("va-ascii");

//open input stream
var istream = fs.createReadStream(__dirname + '/fixtures/va-ascii.txt', 'ascii');

//convert the stream into FHIR model
        istream.pipe(split()) // split into the rows
            .pipe(new bbva.VaAsciiFile2Object()) // convert into intermediate object format
            // convetr to a fhir bundle, remove a parameter if you don't want a transaction bundle
            .pipe(new bbva.IntObjToFhirStream("http://localhost:8080/fhir/base")) 
            .on('data', function (data) {
                console.log(JSON.stringify(data, null, '    '));
            })
            .on('finish', function () {
                done();
            })
            .on('error', function (error) {
                done(error);
            });
```

example output:

``` javascript
{}
```

## Example app

Example app is <a href="https://github.com/amida-tech/va-ascii/blob/master/app.js">here</a>

## License

Licensed under [Apache 2.0](./LICENSE).
