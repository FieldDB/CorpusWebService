#!/bin/bash

echo ""
echo "Put the Node server to act as the development server"
sed 's/nodeconfig_[^)]*)/nodeconfig_devserver")/' service.js  > output
mv output service.js


echo "Now running in developer mode."

