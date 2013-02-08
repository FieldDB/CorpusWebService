#!/bin/bash

echo ""
echo "Put the Node server to act as the development server"
sed 's/nodeconfig_[^)]*)/nodeconfig_devserver")/' lib/corsproxy.js  > output
mv output lib/corsproxy.js


echo "Now running in developer mode."

