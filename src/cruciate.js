(function() {

    /*-----------------*/
    /*  Themes object  */
    /*-----------------*/

    var themes = {};
    

    /*--------------*/
    /*  Dark theme  */
    /*--------------*/

    themes.dark = {
    
        font: 'Monaco',
        
        pageHeader: {
            reviewTitle:        'hsl( 0,   0%, 100%)',
            reviewTitleHover:   'hsl(60, 100%,  20%)',
            reviewState:        'hsl( 0,   0%,  50%)',
            reviewStateOverdue: 'hsl( 0, 100%,  40%)',
            reviewMembers:      'hsl( 0,   0%,  50%)'
        },

        backgrounds: {
            main:            'hsl(0, 0%, 0%)',
            highlightedLine: 'hsl(0, 0%, 25%)'
        },
        
        fileCommentsSeparator: 'hsl(0, 0%, 66%)',
        
        columnVerticalBorder: '1px solid hsl(0, 0%, 38%)',
        
        revision: {
            background: 'hsl(0, 0%, 20%)',
            text:       'hsl(0, 0%, 63%)'
        },
        
        lineNumbers: {
            normal: {
                text:       'hsl(0, 0%, 40%)'
            },
            old: {
                text:       'hsl(0, 100%, 50%)',
                background: 'hsl(0, 100%, 30%)'
            },
            new: {
                text:       'hsl(120, 100%, 40%)',
                background: 'hsl(120, 100%, 25%)'
            }
        },
        
        codeTextDefault: 'hsl(0, 0%, 100%)',
        
        token: {
            keyword:     'hsl(210, 100%, 80%)',
            startTag:    'hsl(210, 100%, 80%)',
            endTag:      'hsl(210, 100%, 80%)',
        
            string:      'hsl(290, 100%, 80%)',
            charLiteral: 'hsl(290, 100%, 80%)',
            numeric:     'hsl(290, 100%, 80%)',
        
            comment:     'hsl(22, 100%, 60%)',
            todo:        'hsl(22, 100%, 60%)',
        
            identifier:  'hsl(45, 100%, 66%)',
            attrib:      'hsl(45, 100%, 66%)'
        },
        
        diff: {
            completeBlock: {
                oldBackground: 'hsl(  0, 100%, 30%)',
                newBackground: 'hsl(120, 100%, 25%)'
            },
            partialBlock: {
                identical: {
                    oldBackground: 'hsl(  0, 100%, 12%)',
                    newBackground: 'hsl(120, 100%, 10%)'
                },
                changed: {
                    oldBackground: 'hsl(  0, 100%, 30%)',
                    newBackground: 'hsl(120, 100%, 25%)'
                }
            },
            nonExistentBlockBackground: 'hsl(0, 0%, 20%)',
            contextSeparatorBackground: 'hsl(0, 0%, 20%)'
        },
        
        userComment: {
            default:           'hsl(60, 25%, 60%)',
            read:              'hsl(60, 25%, 60%)',
            unread:            'hsl(60, 35%, 80%)',
            leaveUnread:       'hsl(60, 35%, 80%)',
            readDefect:        'hsl( 0, 25%, 60%)',
            unreadDefect:      'hsl( 0, 35%, 80%)',
            leaveUnreadDefect: 'hsl( 0, 35%, 80%)'
        }

    };


    /*----------------*/
    /*  Active theme  */
    /*----------------*/

    var theme = themes.dark;


    /*--------------*/
    /*  CSS string  */
    /*--------------*/

    var css = "" +
    

    /*----- Page header -----*/

    /* Background */
    "#atlas { background-color: " + theme.backgrounds.main + "; } " +
    
    /* Review title: colour */
    "#reviewHead              { color: " + theme.pageHeader.reviewTitle + "; } " +
    "#reviewHead span.title a { color: " + theme.pageHeader.reviewTitle + "; } " +

    /* Review title: background colour */
    "#reviewHead.editable:hover { background-color: " + theme.pageHeader.reviewTitleHover + "; } " +
    
    /* Review state */
    "#review-state      { color: " + theme.pageHeader.reviewState        + "; } " +
    "#review-state span { color: " + theme.pageHeader.reviewState        + " !important; } " +
    "#review-state em   { color: " + theme.pageHeader.reviewStateOverdue + "; } " +
    
    /* Review members */
    ".review-members h5 { color: " + theme.pageHeader.reviewMembers + "; } " +
    
    /* Progress bar */
    "#status { -webkit-filter: invert(100%); } " +


    /*----- Backgrounds -----*/

    /* Main background (can be seen with very short files which don't fill the screen) */
    "#frx-pane { background-color: " + theme.backgrounds.main + "; } " +

    /* Background of file comments container */
    ".revision_comments_frxinner { background-color: " + theme.backgrounds.main + "; } " +

    /* Background of source code container */
    ".source { background-color: " + theme.backgrounds.main + "; } " +
    
    /* Background of a highlighted source code line */
    /* Occurs when: */
    /*   1. Selecting one or more lines to add a user comment */
    /*   2. Hovering over an existing user comment */
    ".lineHighlighted { background-color: " + theme.backgrounds.highlightedLine + "; } " +
    

    /*----- File comments separator -----*/
    
    ".inline-comment-tip { background-color: " + theme.fileCommentsSeparator + "; } " +
    

    /*----- Columns -----*/

    /* Column 1 */
    ".tetrisColumn { background-color: " + theme.backgrounds.main + "; font-size: 1pt; } " +

    /* Column 2 */
    ".diffNav     { background-color: " + theme.backgrounds.main + "; border-right: " + theme.columnVerticalBorder + "; font-size: 1pt; } " +
    ".diffNav img { -webkit-filter: invert(100%); } " +

    /* Column 3 */
    ".inlineSource td.author { background-color: " + theme.backgrounds.main + "; } " +

    /* Column 4 */
    "td.revision { background-color: " + theme.revision.background + "; color: " + theme.revision.text + "; } " +

    /* Column 5 */
    ".diffLineNumbers  { font-family: " + theme.font + "; color: " + theme.lineNumbers.normal.text + "; } " +
    ".diffLineNumbersA { font-family: " + theme.font + "; color: " + theme.lineNumbers.old.text    + "; background-color: " + theme.lineNumbers.old.background + "; } " +
    ".diffLineNumbersB { font-family: " + theme.font + "; color: " + theme.lineNumbers.new.text    + "; background-color: " + theme.lineNumbers.new.background + "; } " +

    /* Column 6 */
    ".lineContent { font-family: " + theme.font                 + "; color: "        + theme.codeTextDefault      + "; } " +
    ".diffContent { border-left: " + theme.columnVerticalBorder + "; border-right: " + theme.columnVerticalBorder + "; } " +


    /*----- Tokens -----*/

    /* Keywords and tags */
    ".hl_keyword  { color: " + theme.token.keyword  + "; font-weight: normal; } " +
    ".hl_starttag { color: " + theme.token.startTag + "; font-weight: normal; } " +
    ".hl_endtag   { color: " + theme.token.endTag   + "; font-weight: normal; } " +

    /* Strings, char literals and numeric */
    ".hl_string       { color: " + theme.token.string      + "; font-weight: normal; } " +
    ".hl_char_literal { color: " + theme.token.charLiteral + "; font-weight: normal; } " +
    ".hl_numeric      { color: " + theme.token.numeric     + "; } " +

    /* Comments and todo tags */
    ".hl_comment { color: " + theme.token.comment + "; font-style:  normal; } " +
    ".hl_todo    { color: " + theme.token.todo    + "; font-weight: normal; } " +

    /* Other */
    ".hl_identifier { color: " + theme.token.identifier + "; } " +
    ".hl_attrib     { color: " + theme.token.attrib     + "; } " +


    /*----- Diff -----*/

    /* Complete block */
    "td.diffContentA { background-color: " + theme.diff.completeBlock.oldBackground + "; border-left: " + theme.columnVerticalBorder + "; border-right: " + theme.columnVerticalBorder + "; } " +
    "td.diffContentB { background-color: " + theme.diff.completeBlock.newBackground + "; border-left: " + theme.columnVerticalBorder + "; border-right: " + theme.columnVerticalBorder + "; } " +

    /* Partial block: identical */
    ".ediffContentA { background-color: " + theme.diff.partialBlock.identical.oldBackground + "; border-left: " + theme.columnVerticalBorder + "; border-right: " + theme.columnVerticalBorder + "; } " +
    ".ediffContentB { background-color: " + theme.diff.partialBlock.identical.newBackground + "; border-left: " + theme.columnVerticalBorder + "; border-right: " + theme.columnVerticalBorder + "; } " +

    /* Partial block: changed */
    ".ediffChangedA { background-color: " + theme.diff.partialBlock.changed.oldBackground + "; padding: 1px 0px; } " +
    ".ediffChangedB { background-color: " + theme.diff.partialBlock.changed.newBackground + "; padding: 1px 0px; } " +

    /* Non-existent block (code doesn't exist in other pane) */
    ".cells-empty             .cell-empty { background-color: " + theme.diff.nonExistentBlockBackground + "; } " +
    ".inlineSource   td.author.cell-empty { background-color: " + theme.diff.nonExistentBlockBackground + "; } " +
    ".inlineSource td.revision.cell-empty { background-color: " + theme.diff.nonExistentBlockBackground + "; } " +

    /* Context separator */
    ".activeFrx .diffSkipped td { background-image: none; background-color: " + theme.diff.contextSeparatorBackground + "; } " +


    /*----- User comments -----*/

    ".comment                    { border: 0; background-color: " + theme.userComment.default           + "; } " +
    ".comment.read               { border: 0; background-color: " + theme.userComment.read              + "; } " +
    ".comment.unread             { border: 0; background-color: " + theme.userComment.unread            + "; } " +
    ".comment.leaveUnread        { border: 0; background-color: " + theme.userComment.leaveUnread       + "; } " +
    ".comment.read.defect        { border: 0; background-color: " + theme.userComment.readDefect        + "; } " +
    ".comment.unread.defect      { border: 0; background-color: " + theme.userComment.unreadDefect      + "; } " +
    ".comment.leaveUnread.defect { border: 0; background-color: " + theme.userComment.leaveUnreadDefect + "; } ";


    /*--------------------------------*/
    /*  Create and append style node  */
    /*--------------------------------*/

	var styleElement = document.createElement('style');
	styleElement.type = 'text/css';
	styleElement.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(styleElement);

})();