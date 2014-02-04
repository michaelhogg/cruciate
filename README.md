# cruciate

Colour themes bookmarklet for Atlassian's Crucible.

## How to build

1. Use [Google's Closure Compiler Application](https://developers.google.com/closure/compiler/docs/gettingstarted_app) to minify the code.
2. Use `sed` to collapse multiple spaces.
3. Use `sed` to prepend the `javascript:` URI scheme.
4. Use `tr` to replace all line breaks with spaces.
5. Write the output to `build/cruciate.js`.

```
java -jar compiler.jar --js src/cruciate.js \
| sed 's/  */ /g' \
| sed '1s/^/javascript: /' \
| tr '\n' ' ' \
> build/cruciate.js
```