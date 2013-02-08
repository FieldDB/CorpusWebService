#!/bin/bash

echo ""
echo "Put the Node server to act as the localhost server"
sed 's/nodeconfig_[^)]*)/nodeconfig_local")/' lib/corsproxy.js  > output
mv output lib/corsproxy.js


echo "Now running in local/offline developer mode using the localhost."

