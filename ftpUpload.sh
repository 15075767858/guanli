#!/usr/bin/env bash
cd /Library/WebServer/Documents/guanli/build/production
ftp  -n<<!
open bxu2341910074.my3w.com
user bxu2341910074 abcd123456
binary
cd htdocs
ls
put guanli.zip
close
bye
