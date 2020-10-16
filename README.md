# iploc

A simple CLI app to perform geoip lookup at the console. Supports either IPv4 or IPv6. This application has been written against the MaxMind GeoCity Lite 2 binary (.mmdb) format. It has not been tested against other MaxMind distributions.

## installation

npm install -g iploc

## usage

iploc --datafile /path/to/my.mmdb --ip {IPv4 or IPv6 address}

There are currently arguments running the app:

### --datafile

This option specifies the location the mmdb file you downloaded from MaxMind. The application will resolve relative paths to absolute.

### --ip

This option specifies IP address to look up.

### Example:

iploc --datafile ../geolite2/geolite_city.mmdb --ip 8.8.8.8