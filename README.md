# iploc

A simple CLI app to perform geoip lookup at the console. Supports either IPv4 or IPv6.

## installation

npm install -g iploc

## usage

There are currently two options for running the app:

### configure

This option allows you to initially configure the app with the mmdb file you downloaded from MaxMind. The configuration will resolve relative paths to absolute.

**Usage:** iploc --configure /path/to/mmdb/file

**Example:** iploc --configure ../geolite.mmdb

### lookup

This option looks up the IP address you provide. Simply provide the IP address, there is not command line argument.

**Example:** iploc 8.8.8.8
