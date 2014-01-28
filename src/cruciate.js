(function() {

    /*-----------------*/
    /*  Themes object  */
    /*-----------------*/
    
    /* Prefixes for properties: */
    /*   t = text colour        */
    /*   b = background colour  */
    /*   o = border             */

    var themes = {};
    

    /*--------------*/
    /*  Dark theme  */
    /*--------------*/

    themes.dark = {
    
        font: 'Monaco',
        
        bMainBackground: 'hsl(0, 0%, 0%)',

        pageHeader: {
            tReviewTitle:        'hsl( 0,   0%, 100%)',
            bReviewTitleHover:   'hsl(60, 100%,  20%)',
            tReviewState:        'hsl( 0,   0%,  50%)',
            tReviewStateOverdue: 'hsl( 0, 100%,  40%)',
            tReviewMembers:      'hsl( 0,   0%,  50%)'
        },

        bHighlightedLine: 'hsl(0, 0%, 25%)',
        
        bFileCommentsSeparator: 'hsl(0, 0%, 66%)',
        
        oColumnVerticalBorder: '1px solid hsl(0, 0%, 38%)',
        
        revision: {
            bBackground: 'hsl(0, 0%, 20%)',
            tText:       'hsl(0, 0%, 63%)'
        },
        
        lineNumbers: {
            normal: {
                tText:       'hsl(0, 0%, 40%)'
            },
            old: {
                tText:       'hsl(0, 100%, 50%)',
                bBackground: 'hsl(0, 100%, 30%)'
            },
            new: {
                tText:       'hsl(120, 100%, 40%)',
                bBackground: 'hsl(120, 100%, 25%)'
            }
        },
        
        tCodeTextDefault: 'hsl(0, 0%, 100%)',
        
        token: {
            tKeyword:     'hsl(210, 100%, 80%)',
            tStartTag:    'hsl(210, 100%, 80%)',
            tEndTag:      'hsl(210, 100%, 80%)',
        
            tString:      'hsl(290, 100%, 80%)',
            tCharLiteral: 'hsl(290, 100%, 80%)',
            tNumeric:     'hsl(290, 100%, 80%)',
        
            tComment:     'hsl(22, 100%, 60%)',
            tTodo:        'hsl(22, 100%, 60%)',
        
            tIdentifier:  'hsl(45, 100%, 66%)',
            tAttrib:      'hsl(45, 100%, 66%)'
        },
        
        diff: {
            completeBlock: {
                bOldBackground: 'hsl(  0, 100%, 30%)',
                bNewBackground: 'hsl(120, 100%, 25%)'
            },
            partialBlock: {
                identical: {
                    bOldBackground: 'hsl(  0, 100%, 12%)',
                    bNewBackground: 'hsl(120, 100%, 10%)'
                },
                changed: {
                    bOldBackground: 'hsl(  0, 100%, 30%)',
                    bNewBackground: 'hsl(120, 100%, 25%)'
                }
            },
            bNonExistentBlockBackground: 'hsl(0, 0%, 20%)',
            bContextSeparatorBackground: 'hsl(0, 0%, 20%)'
        },
        
        userComment: {
            bDefault:           'hsl(60, 25%, 60%)',
            bRead:              'hsl(60, 25%, 60%)',
            bUnread:            'hsl(60, 35%, 80%)',
            bLeaveUnread:       'hsl(60, 35%, 80%)',
            bReadDefect:        'hsl( 0, 25%, 60%)',
            bUnreadDefect:      'hsl( 0, 35%, 80%)',
            bLeaveUnreadDefect: 'hsl( 0, 35%, 80%)'
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
    

    /*----- Backgrounds -----*/

    /* Main background (can be seen with very short files which don't fill the screen) */
    "#frx-pane { background-color: " + theme.bMainBackground + "; } " +

    /* Background of file comments container */
    ".revision_comments_frxinner { background-color: " + theme.bMainBackground + "; } " +

    /* Background of source code container */
    ".source { background-color: " + theme.bMainBackground + "; } " +
    

    /*----- Page header -----*/

    /* Background */
    "#atlas { background-color: " + theme.bMainBackground + "; } " +
    
    /* Review title: colour */
    "#reviewHead              { color: " + theme.pageHeader.tReviewTitle + "; } " +
    "#reviewHead span.title a { color: " + theme.pageHeader.tReviewTitle + "; } " +

    /* Review title: background colour */
    "#reviewHead.editable:hover { background-color: " + theme.pageHeader.bReviewTitleHover + "; } " +
    
    /* Review state */
    "#review-state      { color: " + theme.pageHeader.tReviewState        + "; } " +
    "#review-state span { color: " + theme.pageHeader.tReviewState        + " !important; } " +
    "#review-state em   { color: " + theme.pageHeader.tReviewStateOverdue + "; } " +
    
    /* Review members */
    ".review-members h5 { color: " + theme.pageHeader.tReviewMembers + "; } " +
    
    /* Progress bar */
    "#status { -webkit-filter: invert(100%); } " +


    /*----- Highlighted line -----*/
    
    /* Background of a highlighted source code line */
    /* Occurs when: */
    /*   1. Selecting one or more lines to add a user comment */
    /*   2. Hovering over an existing user comment */
    ".lineHighlighted { background-color: " + theme.bHighlightedLine + "; } " +
    

    /*----- File comments separator -----*/
    
    ".inline-comment-tip { background-color: " + theme.bFileCommentsSeparator + "; } " +
    

    /*----- Columns -----*/

    /* Column 1 */
    ".tetrisColumn { background-color: " + theme.bMainBackground + "; font-size: 1pt; } " +

    /* Column 2 */
    ".diffNav     { background-color: " + theme.bMainBackground + "; border-right: " + theme.oColumnVerticalBorder + "; font-size: 1pt; } " +
    ".diffNav img { -webkit-filter: invert(100%); } " +

    /* Column 3 */
    ".inlineSource td.author { background-color: " + theme.bMainBackground + "; } " +

    /* Column 4 */
    "td.revision { background-color: " + theme.revision.bBackground + "; color: " + theme.revision.tText + "; } " +

    /* Column 5 */
    ".diffLineNumbers  { font-family: " + theme.font + "; color: " + theme.lineNumbers.normal.tText + "; } " +
    ".diffLineNumbersA { font-family: " + theme.font + "; color: " + theme.lineNumbers.old.tText    + "; background-color: " + theme.lineNumbers.old.bBackground + "; } " +
    ".diffLineNumbersB { font-family: " + theme.font + "; color: " + theme.lineNumbers.new.tText    + "; background-color: " + theme.lineNumbers.new.bBackground + "; } " +

    /* Column 6 */
    ".lineContent { font-family: " + theme.font                  + "; color: "        + theme.tCodeTextDefault      + "; } " +
    ".diffContent { border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; } " +


    /*----- Tokens -----*/

    /* Keywords and tags */
    ".hl_keyword  { color: " + theme.token.tKeyword  + "; font-weight: normal; } " +
    ".hl_starttag { color: " + theme.token.tStartTag + "; font-weight: normal; } " +
    ".hl_endtag   { color: " + theme.token.tEndTag   + "; font-weight: normal; } " +

    /* Strings, char literals and numeric */
    ".hl_string       { color: " + theme.token.tString      + "; font-weight: normal; } " +
    ".hl_char_literal { color: " + theme.token.tCharLiteral + "; font-weight: normal; } " +
    ".hl_numeric      { color: " + theme.token.tNumeric     + "; } " +

    /* Comments and todo tags */
    ".hl_comment { color: " + theme.token.tComment + "; font-style:  normal; } " +
    ".hl_todo    { color: " + theme.token.tTodo    + "; font-weight: normal; } " +

    /* Other */
    ".hl_identifier { color: " + theme.token.tIdentifier + "; } " +
    ".hl_attrib     { color: " + theme.token.tAttrib     + "; } " +


    /*----- Diff -----*/

    /* Complete block */
    "td.diffContentA { background-color: " + theme.diff.completeBlock.bOldBackground + "; border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; } " +
    "td.diffContentB { background-color: " + theme.diff.completeBlock.bNewBackground + "; border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; } " +

    /* Partial block: identical */
    ".ediffContentA { background-color: " + theme.diff.partialBlock.identical.bOldBackground + "; border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; } " +
    ".ediffContentB { background-color: " + theme.diff.partialBlock.identical.bNewBackground + "; border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; } " +

    /* Partial block: changed */
    ".ediffChangedA { background-color: " + theme.diff.partialBlock.changed.bOldBackground + "; padding: 1px 0px; } " +
    ".ediffChangedB { background-color: " + theme.diff.partialBlock.changed.bNewBackground + "; padding: 1px 0px; } " +

    /* Non-existent block (code doesn't exist in other pane) */
    ".cells-empty             .cell-empty { background-color: " + theme.diff.bNonExistentBlockBackground + "; } " +
    ".inlineSource   td.author.cell-empty { background-color: " + theme.diff.bNonExistentBlockBackground + "; } " +
    ".inlineSource td.revision.cell-empty { background-color: " + theme.diff.bNonExistentBlockBackground + "; } " +

    /* Context separator */
    ".activeFrx .diffSkipped td { background-image: none; background-color: " + theme.diff.bContextSeparatorBackground + "; } " +


    /*----- User comments -----*/

    ".comment                    { border: 0; background-color: " + theme.userComment.bDefault           + "; } " +
    ".comment.read               { border: 0; background-color: " + theme.userComment.bRead              + "; } " +
    ".comment.unread             { border: 0; background-color: " + theme.userComment.bUnread            + "; } " +
    ".comment.leaveUnread        { border: 0; background-color: " + theme.userComment.bLeaveUnread       + "; } " +
    ".comment.read.defect        { border: 0; background-color: " + theme.userComment.bReadDefect        + "; } " +
    ".comment.unread.defect      { border: 0; background-color: " + theme.userComment.bUnreadDefect      + "; } " +
    ".comment.leaveUnread.defect { border: 0; background-color: " + theme.userComment.bLeaveUnreadDefect + "; } ";


    /*--------------------------------*/
    /*  Create and append style node  */
    /*--------------------------------*/

	var styleElement = document.createElement('style');
	styleElement.type = 'text/css';
	styleElement.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(styleElement);

})();