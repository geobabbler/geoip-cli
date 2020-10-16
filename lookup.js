#!/usr/bin/env node

const Reader = require('@maxmind/geoip2-node').Reader;
const fs = require('fs');
const path = require('path');

// Typescript:
// import { Reader } from '@maxmind/geoip2-node';
var dataloc;
var ip;
var { argv } = require('yargs');

if (argv["ip"]) {
    ip = argv["ip"];
}

if (argv["datafile"]) {
    var p = path.resolve(argv["datafile"]);
    if (fs.existsSync(p)) {
        dataloc = p;
    }
}
if (ip) {
    if (dataloc) {
        var cfg = dataloc;
        if (fs.existsSync(cfg)) {
            Reader.open(cfg).then(reader => {
                const response = reader.city(ip);
                var output = [];
                var country = "UNK";
                var latitude = 0;
                var longitude = 0;
                if (response.location) {
                    latitude = response.location.latitude;
                    longitude = response.location.longitude;
                }
                if (response.country) {
                    country = response.country.isoCode;
                }
                var city = "Unknown";
                if (response.city.names) {
                    city = response.city.names.en;
                }
                var state = "UNK";
                if (response.subdivisions[0]) {
                    state = response.subdivisions[0].isoCode;
                }
                output.push(ip, latitude, longitude, country, state, city);
                console.log(output.join(","));
            });
        }
        else { console.log("Application not configured."); }
    }
    else { console.log("Application not configured."); }
}
else { console.log("There's nothing for me to do!"); }