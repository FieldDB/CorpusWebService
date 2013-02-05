#!/bin/bash

echo ""
echo "Put the Node server to act as the production server"
sed 's/nodeconfig_[^)]*)/nodeconfig_production")/' service.js  > output
mv output service.js


echo "Now running in production mode. "
