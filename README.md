# cruciate

Colour themes bookmarklet for [Atlassian](http://www.atlassian.com/)'s [Crucible](http://www.atlassian.com/software/crucible/).

Tested with Crucible 3.2.4.

## How to install

### Google Chrome

1. Copy the [compiled code](https://raw.github.com/michaelhogg/cruciate/master/build/cruciate.js) to the clipboard.
2. Right-click in Chrome's Bookmarks Bar, and select **Add Page**.
3. In the **Name** field, type "Cruciate".
4. In the **URL** field, paste the compiled code.
5. Click the **Save** button.

### Firefox

1. Copy the [compiled code](https://raw.github.com/michaelhogg/cruciate/master/build/cruciate.js) to the clipboard.
2. Right-click in Firefox's Bookmarks Toolbar, and select **New Bookmark**.
3. In the **Name** field, type "Cruciate".
4. In the **Location** field, paste the compiled code.
5. Click the **Add** button.

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
