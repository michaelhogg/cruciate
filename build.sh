#!/bin/bash

# Use Google's Closure Compiler Application to minify the code -- developers.google.com/closure/compiler/docs/gettingstarted_app
# sed: collapse multiple spaces
# sed: prepend the "javascript:" URI scheme
# tr:  replace all line breaks with spaces
# Write the output to build/cruciate.js

java -jar compiler.jar --js src/cruciate.js \
    | sed 's/  */ /g' \
    | sed '1s/^/javascript: /' \
    | tr '\n' ' ' \
    > build/cruciate.js
