#!/bin/bash

sencha app build

cd /Library/WebServer/Documents/guanli/build/production

zip -r guanli.zip guanli

cd /Library/WebServer/Documents/guanli/

sh ftpUpload.sh
