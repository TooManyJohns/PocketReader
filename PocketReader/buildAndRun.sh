#!/bin/sh
mvn clean package && docker build -t com.carleton.pocketreader/PocketReader .
docker rm -f PocketReader || true && docker run -d -p 8080:8080 -p 4848:4848 --name PocketReader com.carleton.pocketreader/PocketReader 
