(function() {

    /*-----------------*/
    /*  Themes object  */
    /*-----------------*/
    
    /* Prefixes for properties: */
    /*   t = text colour        */
    /*   b = background colour  */
    /*   o = border             */
    /*   d = data URI image     */
    /*   s = size               */

    var themes = {};
    

    /*-------------------*/
    /*  Palettes object  */
    /*-------------------*/
    
    /* Each theme has a palette, which can be used for storing commonly-used colours */

    var palettes = {};
    

    /*--------------*/
    /*  Dark theme  */
    /*--------------*/
    
    palettes.dark = {
    
        brightText: 'hsl(0, 0%, 100%)',
        dimText:    'hsl(0, 0%,  50%)',
        
        darkGreyBackground: 'hsl(0, 0%, 20%)',
        
        commonBorders: '1px solid hsl(0, 0%, 40%)',
        
        tokenBlue:   'hsl(210, 100%, 80%)',
        tokenPurple: 'hsl(290, 100%, 80%)',
        tokenOrange: 'hsl( 22, 100%, 60%)',
        tokenYellow: 'hsl( 45, 100%, 66%)'
    
    };

    themes.dark = {
    
        font: 'Monaco',
        
        bMainBackground: 'hsl(0, 0%, 0%)',

        pageHeader: {
            tReviewTitle:        palettes.dark.brightText,
            bReviewTitleHover:   'hsl(60, 100%,  20%)',
            tReviewState:        palettes.dark.dimText,
            tReviewStateOverdue: 'hsl( 0, 100%,  40%)',
            tReviewMembers:      palettes.dark.dimText
        },
        
        toolbars: {
            bBackground: palettes.dark.darkGreyBackground,
            tText:       palettes.dark.brightText,
            oBorder:     palettes.dark.commonBorders
        },
        
        oUpperToolbarSeparatorBorder: palettes.dark.commonBorders,
        
        lowerToolbar: {
            tFileChangedName: 'hsl(210,  50%, 85%)',
            tFileChangedTag:  'hsl(210, 100%, 40%)',
            tFileAddedName:   'hsl(120, 100%, 45%)',
            tFileAddedTag:    'hsl(120, 100%, 30%)',
            tFileDeletedName: 'hsl(  0, 100%, 55%)',
            tFileDeletedTag:  'hsl(  0, 100%, 40%)',
            tDropdownMenuFileOutdated: 'hsl(0, 100%, 66%) !important'
        },

        bFileCommentsSeparator: 'hsl(0, 0%, 66%)',
        
        oColumnVerticalBorder: palettes.dark.commonBorders,
        
        author: {
            bBackground: palettes.dark.darkGreyBackground
        },

        revision: {
            bBackground: palettes.dark.darkGreyBackground,
            tText:       'hsl(0, 0%, 63%)'
        },
        
        lineNumbers: {
            normal: {
                tText:       'hsl(0, 0%, 40%)'
            },
            old: {
                tText:       'hsl(0, 100%, 50%)',
                bBackground: 'hsl(0, 100%, 30%) !important'
            },
            new: {
                tText:       'hsl(120, 100%, 40%)',
                bBackground: 'hsl(120, 100%, 25%) !important'
            }
        },
        
        tCodeTextDefault: palettes.dark.brightText,
        
        token: {
            tKeyword:     palettes.dark.tokenBlue,
            tStartTag:    palettes.dark.tokenBlue,
            tEndTag:      palettes.dark.tokenBlue,
        
            tString:      palettes.dark.tokenPurple,
            tCharLiteral: palettes.dark.tokenPurple,
            tNumeric:     palettes.dark.tokenPurple,
        
            tComment:     palettes.dark.tokenOrange,
            tTodo:        palettes.dark.tokenOrange,
        
            tIdentifier:  palettes.dark.tokenYellow,
            tAttrib:      palettes.dark.tokenYellow
        },
        
        diff: {
            completeBlock: {
                bOldBackground: 'hsl(  0, 100%, 30%) !important',
                bNewBackground: 'hsl(120, 100%, 25%) !important'
            },
            partialBlock: {
                identical: {
                    bOldBackground: 'hsl(  0, 100%, 12%) !important',
                    bNewBackground: 'hsl(120, 100%, 10%) !important'
                },
                changed: {
                    bOldBackground: 'hsl(  0, 100%, 30%) !important',
                    bNewBackground: 'hsl(120, 100%, 25%) !important'
                }
            },
            bNonExistentBlockBackground: palettes.dark.darkGreyBackground,
            contextSeparator: {
                dBackground: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAATElEQVQYV4XQAQoAMAQFUM7k/kdwpg01YUEp6pUfBIAj7UVEcbWZmQEj7JBihxNyuCGDglLGl6kG/aAGr6UXE+xQOj0hhxtK79mefgG0Rif++GpEPQAAAABJRU5ErkJggg==') repeat",
                sHeight:     '50px'
            }
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
    

    /*----- Body -----*/

    "body { background-color: " + theme.bMainBackground + "; } " +
    

    /*----- Page header -----*/

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


    /*----- Upper toolbars -----*/
    
    /* Navigation */
    "#review-meta h3 { background-color: " + theme.toolbars.bBackground + "; color: " + theme.toolbars.tText + "; border: " + theme.toolbars.oBorder + "; } " +
    
    /* Main */
    "#content-column .toolbar                         { color:        " + theme.toolbars.tText               + "; background-color: " + theme.toolbars.bBackground + "; } " +
    "#reviewpage #review-info-container .toolbar      { border:       " + theme.toolbars.oBorder             + "; } " +
    "#time-spent-input                                { color:        " + theme.toolbars.tText               + "; } " +
    "#reviewpage .toolbar .toolbar-keyboard-shortcuts { color:        " + theme.toolbars.tText               + "; } " +
    ".toolbar .tb_left                                { border-right: " + theme.oUpperToolbarSeparatorBorder + "; } " +
    

    /*----- Lower toolbar -----*/
    
    ".frx-header-container .frx-header { background-color: " + theme.toolbars.bBackground + "; border-bottom: " + theme.toolbars.oBorder + "; } " +
    ".frx-header-container             { border-left:      " + theme.toolbars.oBorder     + "; } " +
    ".path-truncated .path-prefix      { color:            " + theme.toolbars.tText       + "; } " +
    ".frx-actions-primary .stats       { color:            " + theme.toolbars.tText       + "; } " +

    "#content-column span.frx-changed                { color: " + theme.lowerToolbar.tFileChangedName + "; } " +
    "#content-column span.operation-text.frx-changed { color: " + theme.lowerToolbar.tFileChangedTag  + "; } " +

    "#content-column span.frx-added                { color: " + theme.lowerToolbar.tFileAddedName + "; } " +
    "#content-column span.operation-text.frx-added { color: " + theme.lowerToolbar.tFileAddedTag  + "; } " +

    "#content-column span.frx-deleted                { color: " + theme.lowerToolbar.tFileDeletedName + "; } " +
    "#content-column span.operation-text.frx-deleted { color: " + theme.lowerToolbar.tFileDeletedTag  + "; } " +
    
    ".frx-outdated a.aui-dd-link { color: " + theme.lowerToolbar.tDropdownMenuFileOutdated + "; } " +


    /*----- Toolbar dropdown menus -----*/

    ".toolbar-frame .aui-dd-parent a.aui-dd-link { color: " + theme.toolbars.tText + "; } " +


    /*----- Container for lower toolbar and source code -----*/

    "#frx-pane { background-color: " + theme.bMainBackground + "; border-left: " + theme.toolbars.oBorder + "; } " +

    
    /*----- File comments container -----*/

    ".revision_comments_frxinner { background-color: " + theme.bMainBackground + "; } " +


    /*----- Source code container -----*/

    ".source { background-color: " + theme.bMainBackground + "; } " +
    

    /*----- File comments separator -----*/
    
    ".inline-comment-tip { background-color: " + theme.bFileCommentsSeparator + "; } " +
    

    /*----- Columns -----*/

    /* Column 1 */
    ".tetrisColumn { background-color: " + theme.bMainBackground + "; font-size: 1pt; } " +

    /* Column 2 */
    ".diffNav     { background-color: " + theme.bMainBackground + "; border-right: " + theme.oColumnVerticalBorder + "; font-size: 1pt; } " +
    ".diffNav img { -webkit-filter: invert(100%); } " +

    /* Column 3 */
    ".inlineSource td.author { background-color: " + theme.author.bBackground + "; } " +

    /* Column 4 */
    "td.revision { background-color: " + theme.revision.bBackground + "; color: " + theme.revision.tText + "; } " +

    /* Column 5 */
    "td.diffLineNumbers  { font-family: " + theme.font + "; color: " + theme.lineNumbers.normal.tText + "; background-color: " + theme.bMainBackground             + "; } " +
    "td.diffLineNumbersA { font-family: " + theme.font + "; color: " + theme.lineNumbers.old.tText    + "; background-color: " + theme.lineNumbers.old.bBackground + "; } " +
    "td.diffLineNumbersB { font-family: " + theme.font + "; color: " + theme.lineNumbers.new.tText    + "; background-color: " + theme.lineNumbers.new.bBackground + "; } " +

    /* Column 6 */
    ".lineContent { font-family: " + theme.font                  + "; color: "        + theme.tCodeTextDefault      + "; } " +
    ".diffContent { border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; background-color: " + theme.bMainBackground + "; } " +


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
    ".activeFrx .diffSkipped    { border: 0; } " +
    ".activeFrx .diffSkipped td { background: " + theme.diff.contextSeparator.dBackground + "; height: " + theme.diff.contextSeparator.sHeight + "; } " +


    /*----- Disable line highlighting -----*/
    
    ".inlineSource .lineHighlighted .diffLineNumbers { background-color: " + theme.diff.bNonExistentBlockBackground + "; } " +
    ".inlineSource .lineHighlighted .diffContent     { background-color: " + theme.diff.bNonExistentBlockBackground + "; } " +
    

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