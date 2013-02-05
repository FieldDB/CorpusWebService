#!/bin/bash

echo ""
echo "Put the Node server to act as the localhost server"
sed 's/nodeconfig_[^)]*)/nodeconfig_local")/' service.js  > output
mv output service.js

sed 's/nodeconfig_[^)]*)/nodeconfig_local")/' lib/userauthentication.js  > output
mv output lib/userauthentication.js
sed 's/couchkeys_[^)]*)/couchkeys_local")/' lib/userauthentication.js  > output
mv output lib/userauthentication.js
sed 's/mailconfig_[^)]*)/mailconfig_local")/' lib/userauthentication.js  > output
mv output lib/userauthentication.js

sed 's/couchkeys_[^)]*)/couchkeys_local")/' lib/corpusmanagement.js  > output
mv output lib/corpusmanagement.js

echo "Now running in local/offline developer mode using the localhost."

