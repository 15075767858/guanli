#!/usr/bin/env bash

cd /Library/WebServer/Documents/graph/build/production
ftp  -n<<!
open bxu2341910074.my3w.com
user bxu2341910074 abcd123456
#password abcd123456
#binary
#ls
#cd web_arm/www/
#ls
#put graph.tar.bz2
#close
#bye
