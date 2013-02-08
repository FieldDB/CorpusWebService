#!/bin/bash

echo ""
echo "Put the Node server to act as the production server"
sed 's/nodeconfig_[^)]*)/nodeconfig_production")/' lib/corsproxy.js  > output
mv output lib/corsproxy.js


echo "Now running in production mode. "
