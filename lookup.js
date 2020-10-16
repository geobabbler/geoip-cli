#!/usr/bin/env node

const Reader = require('@maxmind/geoip2-node').Reader;
const fs = require('fs');
const path = require('path');

// Typescript:
// import { Reader } from '@maxmind/geoip2-node';

var ip = process.argv[2];
if (ip){
if (ip.toLowerCase() === "--configure"){
    if (!fs.existsSync('./data')){
        fs.mkdirSync('./data');
    }
    var datafile = process.argv[3];
    var dest = "";
    if (fs.existsSync(datafile)){
        dest = path.resolve(datafile);
        if (fs.existsSync('./data/config.txt')){
            fs.unlinkSync('./data/config.txt');
        }
        fs.appendFileSync('./data/config.txt', dest);
    }
    else{console.log("Data file not found.");}
}
else{
    if (fs.existsSync('./data/config.txt')){
        var cfg = fs.readFileSync('./data/config.txt', 'UTF-8');
        if (fs.existsSync(cfg)){
            Reader.open(cfg).then(reader => {
            const response = reader.city(ip);
            var country = "UNK";
            if (response.country){
                country = response.country.isoCode;
            } 
            var city = "Unknown";
            if (response.city.names){
                city = response.city.names.en;
            }
            var state = "UNK";
            if (response.subdivisions[0]){
                state = response.subdivisions[0].isoCode;
            }
            console.log(ip + "," + country + "," + city + "," + state);
            });
        }
        else{ console.log("Application not configured.");}    }
    else{ console.log("Application not configured.");}
}
}
else{console.log("There's nothing for me to do!");}