geoip-cli
============

A simple CLI app to perform geoip lookup at the console.

There are currently two options for running the app:

--configure /path/to/mmdb/file  - This option allows you to initially configure the app with the mmdb file you downloaded from MaxMind.

Configure example: iploc --configure ../geolite.mmdb (The configuration will resolve relative paths to absolute.)

IP address - This option looks up the IP address you provide.

IP adress example: iploc 8.8.8.8
