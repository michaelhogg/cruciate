(function() {

    /*-----------------------------*/
    /*  Get dark theme properties  */
    /*-----------------------------*/

    function getDarkThemeProperties() {

        var palette = {

            brightText: 'hsl(0, 0%, 100%)',
            dimText:    'hsl(0, 0%,  60%)',

            darkGreyBackground: 'hsl(0, 0%, 20%)',

            commonBorders: '1px solid hsl(0, 0%, 40%)',

            blueText:  'hsl(210,  50%, 80%)',
            greenText: 'hsl(120, 100%, 40%)',
            redText:   'hsl(  0, 100%, 55%)',

            tokenBlue:   'hsl(210, 100%, 80%)',
            tokenPurple: 'hsl(290, 100%, 80%)',
            tokenOrange: 'hsl( 22, 100%, 60%)',
            tokenYellow: 'hsl( 45, 100%, 66%)'

        }

        // Prefixes:
        //   t = text colour
        //   b = background colour
        //   o = border
        //   d = data URI image
        //   s = size

        var properties = {

            monospaceFontFamily: 'Monaco, monospace',

            bMainBackground: 'hsl(0, 0%, 0%)',

            tLinks: palette.blueText,

            pageHeader: {
                tReviewTitle:        palette.brightText,
                bReviewTitleHover:   'hsl(60, 100%,  20%)',
                tReviewState:        palette.dimText,
                tReviewStateOverdue: 'hsl( 0, 100%,  40%)',
                tReviewMembers:      palette.dimText,
                dProgressBar:        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAAAgCAYAAAA13/OGAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nOzdMVLjMBQG4NCp2iIdV/AlcomU3EUcg54yR+Ecm2MA0iCokl2bmUTW81d8zMRy8UbY1p9YlncppQ+AoN6KXByKfXNo295WUB+w0K53AQA38lJMxe6Kqe3Tu05gAcElpffitTgWj82xbXtfQX3AcjWQ/CkeiqfiVJybU9v20PYRXmAgWw8uNZjkdP0bWU7CC4ym3gKqv6bUYPL8j/2e2z5TctsIhrH14FJ/VbkWWr69rqBOYL6cvs7dp/b5b9s2Nblt+2j7fH9J6V03MMP/Bm2AUdVbQvVCly+05dZ2WkGdwALdCwC4kTqfpYaTSxN0p9Z2XkGdwALdCwC4EcEFAupeAMCNuFUEAdU/3SfadGRyLsST09e5a3IuBLT14OJxaIjH49AQ2NaDS2UBOojHAnQQlOACRGXJfwhIcAEi85JFCEZwAQCGIbgAAMMQXACAYQguAMAwBBcgMpNz9RHBCC5AVB6H1kcEJLhYgA4isgCdPmK+ocbBrQcXS/5DPJb810fMN9w4uPXg4iWLEE9OXrKoj5hruHFw68HlOOMfBoyp3u6o53m+0JZb26l9PqT+16N7Ovyij9iuOlb2PmZ/7HoX0NljhwMAuI86V6Oe55cmn06t7dw+71P/69E97X/RR2xXHSt7H7M/dr0L6ExwgbgEl+sEF5ZYVXD5BAAA///s3TEOgEAIBEBLf+XT/LqFsTQQmxOYYnqzxkDCHW6rH2AxoyLoy6jo3fEhI+YyKvqRcoeSgNC539+ug6cyIlauDk5vXMpdAwNCrvrKiLxydXB64/K8tDKLd4AUy9VkRF6pOqhxAbqyzl5GNKRxATrzA0EZ0cwFAAD//wMA9qcaFemH/40AAAAASUVORK5CYII=')"
            },

            toolbars: {
                bBackground: palette.darkGreyBackground,
                tText:       palette.brightText,
                oBorder:     palette.commonBorders
            },

            upperToolbar: {
                oCellSeparator:            palette.commonBorders,
                tMarkCommentsRead:         'hsl(45, 100%, 60%)',
                tMarkCommentsReadDisabled: 'hsl( 0,   0%, 35%)'
            },

            lowerToolbar: {
                tFileChangedName:  palette.blueText,
                tFileChangedTag:   'hsl(210, 100%, 40%)',
                tFileAddedName:    palette.greenText,
                tFileAddedTag:     'hsl(120, 100%, 30%)',
                tFileDeletedName:  palette.redText,
                tFileDeletedTag:   'hsl(  0, 100%, 40%)',
                tNewSinceLastRead: palette.greenText,
                tDropdownMenuFileOutdated: 'hsl(0, 100%, 66%) !important'  // !important is required because the original style is also !important
            },

            navigation: {
                oBorder:        palette.commonBorders,
                tNumberOfFiles: palette.dimText,
                oSourceNodeHR:  palette.commonBorders,
                bSourceNode:    'hsl(0, 0%, 40%)',
                tSourceNode:    palette.brightText,
                tFolder:        palette.brightText,
                folderOpacity:  '0.5',
                tCommentCount:  palette.brightText,
                tFileChanged:   palette.blueText,
                tFileAdded:     palette.greenText,
                tFileDeleted:   palette.redText,
                oInactiveFile:  '2px solid hsl(  0,   0%,  0%)',
                oActiveFile:    '2px solid hsl(210, 100%, 80%)',
                bActiveFile:    'hsl(210, 100%, 30%)',
                unreadFileMarkerText:    "'\\0000A0\\002605'",  // non-breaking space, followed by black star
                tUnreadFileMarkerColour: 'hsl(300, 100%, 50%)'
            },

            overview: {
                tOverviewHeading:   palette.brightText,
                tTableHeaderCell:   palette.brightText,
                tTableNormalCell:   palette.brightText,
                tLinkedIssue:       palette.dimText,
                tNoObjectives:      palette.dimText,
                tNoGeneralComments: palette.dimText
            },

            bFileCommentsSeparator: 'hsl(0, 0%, 66%)',

            oColumnVerticalBorder: palette.commonBorders,

            dHiddenCommentMarker: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA8JAAAPCQHhvMvxAAAAWElEQVR4nGJgmPRiHxDb////n4EczADU/AeKyTII2QCyDMJmAEkG4TOAKIOIMQCvQaQYgNUgcgxAMWhADCDbC2QHItnRSHZCIjspk52ZKMrOAAAAAP//AwA8O6F/wotm5gAAAABJRU5ErkJggg==')",

            diffNav: {
                dUpArrow:   "url('data:image/gif;base64,R0lGODlhCQANAPQAMQAAAAsJBhENChQQCx8YEiohGDYqHjgsID4xI0Q1Jkk6KnlgRYptTpBxUrqTar2Va8OZbsaccNGlduW0gui2g+q5hfC9iCf5AQMn+QEAAAAA6O2UAAAAAAAAAAAAAAAAACwAAAAACQANAAAFNSAgjuS4GCXAWNNBNpZUUYlYWNCgUJHtCCLEQyQIAE4AAmnVesVmNcAtt+tJf8EhoEhSpkYhADs=')",
                dDownArrow: "url('data:image/gif;base64,R0lGODlhCQANAPQAMQAAAAsJBhENChQQCx8YEiohGDYqHjgsID4xI0Q1Jkk6KnlgRYptTpBxUrqTar2Va8OZbsaccNGlduW0gui2g+q5hfC9iLc3AgO3NwIAAAAA6O2UAAAAAAA4XWxz/38AACwAAAAACQANAAAFNCAgjqQQkIRYOIKIPKoFDQoVjY0lVVRCMpbJYWQCLAyAFGDVArxis9pNlNv1fsEhyYjcekMAOw==')"
            },

            author: {
                bBackground: palette.darkGreyBackground
            },

            revision: {
                bBackground: palette.darkGreyBackground,
                tText:       'hsl(0, 0%, 63%)'
            },

            lineNumbers: {
                normalLines: {
                    tText:       'hsl(0, 0%, 40%)'
                },
                oldLines: {
                    tText:       'hsl(0, 100%, 50%)',
                    bBackground: 'hsl(0, 100%, 30%) !important'
                },
                newLines: {
                    tText:       'hsl(120, 100%, 40%)',
                    bBackground: 'hsl(120, 100%, 25%) !important'
                }
            },

            tCodeTextDefault: palette.brightText,

            token: {
                tKeyword:     palette.tokenBlue,
                tStartTag:    palette.tokenBlue,
                tEndTag:      palette.tokenBlue,

                tString:      palette.tokenPurple,
                tCharLiteral: palette.tokenPurple,
                tNumeric:     palette.tokenPurple,

                tComment:     palette.tokenOrange,
                tTodo:        palette.tokenOrange,

                tIdentifier:  palette.tokenYellow,
                tAttrib:      palette.tokenYellow
            },

            diff: {
                verticalBorder: {
                    oOld: '1px solid hsl(  0, 100%, 50%)',
                    oNew: '1px solid hsl(120, 100%, 40%)'
                },
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
                contextSeparator: {
                    dBackground: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQUlEQVR4nIzKSw4AIAxCQe7E/c9WozZ+YiMs3gYGAOKM5FN+FtpQoAkNFLBQBSs0dgdd8IcWVCiNRr0GAAD//wMAMxCBfyEN4bcAAAAASUVORK5CYII=')",
                    sHeight:     '50px'
                }
            },

            userComment: {
                sCodePadding:       '10px',
                bDefault:           'hsl(60, 25%, 60%)',
                bRead:              'hsl(60, 25%, 60%)',
                bUnread:            'hsl(60, 35%, 80%)',
                bLeaveUnread:       'hsl(60, 35%, 80%)',
                bReadDefect:        'hsl( 0, 25%, 60%)',
                bUnreadDefect:      'hsl( 0, 35%, 80%)',
                bLeaveUnreadDefect: 'hsl( 0, 35%, 80%)'
            }

        };

        return properties;

    }


    /*----------------------*/
    /*  Generate theme CSS  */
    /*----------------------*/

    function generateThemeCss(theme) {

        var css = "" +


        /*----- Body -----*/

        "body { background-color: " + theme.bMainBackground + "; } " +


        /*----- Page header -----*/

        // Header links
        "div#review-waypost h2#review-crumb span a { color: " + theme.tLinks + "; } " +

        // Review title
        "#reviewHead                { color:            " + theme.pageHeader.tReviewTitle      + "; } " +
        "#reviewHead span.title a   { color:            " + theme.pageHeader.tReviewTitle      + "; } " +
        "#reviewHead.editable:hover { background-color: " + theme.pageHeader.bReviewTitleHover + "; } " +

        // Review state
        "#review-state      { color: " + theme.pageHeader.tReviewState        + "; } " +
        "#review-state span { color: " + theme.pageHeader.tReviewState        + " !important; } " +
        "#review-state em   { color: " + theme.pageHeader.tReviewStateOverdue + "; } " +

        // Review members
        ".review-members h5 { color: " + theme.pageHeader.tReviewMembers + "; } " +

        // Progress bar
        "#status span { background-image: " + theme.pageHeader.dProgressBar + "; } " +


        /*----- Upper toolbar: Navigation -----*/

        "#review-meta h3 { background-color: " + theme.toolbars.bBackground + "; color: " + theme.toolbars.tText + "; border: " + theme.toolbars.oBorder + "; } " +


        /*----- Upper toolbar: Main -----*/

        "#content-column .toolbar                         { color:  " + theme.toolbars.tText   + "; background-color: " + theme.toolbars.bBackground + "; } " +
        "#reviewpage #review-info-container .toolbar      { border: " + theme.toolbars.oBorder + "; } " +
        "#time-spent-input                                { color:  " + theme.toolbars.tText   + "; } " +
        "#reviewpage .toolbar .toolbar-keyboard-shortcuts { color:  " + theme.toolbars.tText   + "; } " +

        ".toolbar .tb_left                               { border-right: " + theme.upperToolbar.oCellSeparator            + "; } " +
        "#mark-comments-read-button a                    { color:        " + theme.upperToolbar.tMarkCommentsRead         + "; } " +
        "#mark-comments-read-button.tb_button.disabled a { color:        " + theme.upperToolbar.tMarkCommentsReadDisabled + "; } " +


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

        ".frxSlider-cells td.new a { color: " + theme.lowerToolbar.tNewSinceLastRead + "; } " +

        ".frx-outdated a.aui-dd-link { color: " + theme.lowerToolbar.tDropdownMenuFileOutdated + "; } " +


        /*----- Toolbar dropdown menus -----*/

        ".toolbar-frame .aui-dd-parent a.aui-dd-link { color: " + theme.toolbars.tText + "; } " +


        /*----- Navigation -----*/

        "#reviewpage #content-navigation           { border:     " + theme.navigation.oBorder        + "; background-color: " + theme.bMainBackground + "; } " +
        "#navigation-tree .activeFrx li span a     { color:      " + theme.tLinks                    + "; } " +
        "#frx-overview span.number-of-files        { color:      " + theme.navigation.tNumberOfFiles + "; } " +
        "#tree-root li.source-node .source-node-hr { border-top: " + theme.navigation.oSourceNodeHR  + "; } " +
        "#tree-root li.source-node > span          { background: " + theme.navigation.bSourceNode    + "; color: "   + theme.navigation.tSourceNode   + "; } " +
        "#navigation-tree .tree span.folder        { color:      " + theme.navigation.tFolder        + "; opacity: " + theme.navigation.folderOpacity + "; } " +

        "#navigation-tree .tree .stats .commentCount       { color: " + theme.navigation.tCommentCount + "; } " +
        "#navigation-tree .tree .stats .unreadCommentCount { color: " + theme.navigation.tCommentCount + "; } " +

        "#navigation-tree .tree span.frx-changed a { color: " + theme.navigation.tFileChanged + "; } " +
        "#navigation-tree .tree span.frx-added a   { color: " + theme.navigation.tFileAdded   + "; } " +
        "#navigation-tree .tree span.frx-deleted a { color: " + theme.navigation.tFileDeleted + "; } " +

        "#tree-root li > span           { border-left: " + theme.navigation.oInactiveFile + "; } " +
        "#tree-root li.activeFrx > span { border-left: " + theme.navigation.oActiveFile   + "; background-color: " + theme.navigation.bActiveFile + "; } " +

        "#navigation-tree .tree span.frx-incomplete a::after { content: " + theme.navigation.unreadFileMarkerText + "; color: " + theme.navigation.tUnreadFileMarkerColour + "; } " +


        /*----- Overview -----*/

        "div#generalComments.activeFrx { background-color: " + theme.bMainBackground + "; } " +
        "#generalCommentsInner         { background-color: " + theme.bMainBackground + "; } " +

        ".overview-item h4.overview-heading { color: " + theme.overview.tOverviewHeading + "; } " +

        "#details .base-table th   { color: " + theme.overview.tTableHeaderCell     + "; } " +
        "#details .base-table td   { color: " + theme.overview.tTableNormalCell     + "; } " +
        "#details .base-table td a { color: " + theme.tLinks + "; text-decoration: none; } " +

        "#review-meta-links li.top-level .heading       { color: " + theme.overview.tLinkedIssue         + "; } " +
        "#review-meta-links li.top-level span.top-level { color: " + theme.overview.tLinkedIssue         + "; } " +
        "#review-meta-links li.top-level a.jira-link    { color: " + theme.tLinks + "; text-decoration: none; } " +

        ".overview-heading .edit-objectives.edit-link { color: " + theme.tLinks + "; text-decoration: none; } " +

        ".overview-body .overview-content .objectives .meta-objectives                      { color: " + theme.overview.tNoObjectives        + "; } " +
        ".overview-body .overview-content .objectives .meta-objectives .tip-edit-objectives { color: " + theme.tLinks + "; text-decoration: none; } " +

        ".overview-body .overview-content #no-general-comments em { color: " + theme.overview.tNoGeneralComments   + "; } " +
        ".overview-body .overview-content #addReviewCommentLink   { color: " + theme.tLinks + "; text-decoration: none; } " +


        /*----- Container for lower toolbar and source code -----*/

        "#frx-pane { background-color: " + theme.bMainBackground + "; border-left: " + theme.toolbars.oBorder + "; } " +


        /*----- File comments container -----*/

        ".revision_comments_frxinner { background-color: " + theme.bMainBackground + "; } " +


        /*----- Source code container -----*/

        ".source { background-color: " + theme.bMainBackground + "; } " +


        /*----- File comments separator -----*/

        ".inline-comment-tip { background-color: " + theme.bFileCommentsSeparator + "; } " +


        /*----- Columns -----*/

        // Column 1
        ".tetrisColumn { background-color: " + theme.bMainBackground + "; font-size: 1pt; } " +
        "span.tetrisCommentHidden { display: inline-block; width: 16px; height: 16px; top: 0px; background: " + theme.dHiddenCommentMarker + " no-repeat 0px 0px; } " +

        // Column 2
        ".diffNav       { background-color: " + theme.bMainBackground + "; border-right: " + theme.oColumnVerticalBorder + "; font-size: 1pt; } " +
        ".diffNav a img { display: none; } " +
        ".diffNav .diff-segment-link:first-child  { display: inline-block; width: 9px; height: 13px; background-image: " + theme.diffNav.dUpArrow   + "; } " +
        ".diffNav .diff-segment-link:nth-child(2) { display: inline-block; width: 9px; height: 13px; background-image: " + theme.diffNav.dDownArrow + "; } " +

        // Column 3
        ".inlineSource td.author { background-color: " + theme.author.bBackground + "; } " +

        // Column 4
        "td.revision { background-color: " + theme.revision.bBackground + "; color: " + theme.revision.tText + "; } " +

        // Column 5
        "td.diffLineNumbers  { font-family: " + theme.monospaceFontFamily + "; color: " + theme.lineNumbers.normalLines.tText + "; background-color: " + theme.bMainBackground                  + "; } " +
        "td.diffLineNumbersA { font-family: " + theme.monospaceFontFamily + "; color: " + theme.lineNumbers.oldLines.tText    + "; background-color: " + theme.lineNumbers.oldLines.bBackground + "; } " +
        "td.diffLineNumbersB { font-family: " + theme.monospaceFontFamily + "; color: " + theme.lineNumbers.newLines.tText    + "; background-color: " + theme.lineNumbers.newLines.bBackground + "; } " +

        // Column 6
        ".lineContent { font-family: " + theme.monospaceFontFamily   + "; color: "        + theme.tCodeTextDefault      + "; } " +
        ".diffContent { border-left: " + theme.oColumnVerticalBorder + "; border-right: " + theme.oColumnVerticalBorder + "; background-color: " + theme.bMainBackground + "; } " +


        /*----- Tokens -----*/

        // Keywords and tags
        ".hl_keyword  { color: " + theme.token.tKeyword  + "; font-weight: normal; } " +
        ".hl_starttag { color: " + theme.token.tStartTag + "; font-weight: normal; } " +
        ".hl_endtag   { color: " + theme.token.tEndTag   + "; font-weight: normal; } " +

        // Strings, char literals and numeric
        ".hl_string       { color: " + theme.token.tString      + "; font-weight: normal; } " +
        ".hl_char_literal { color: " + theme.token.tCharLiteral + "; font-weight: normal; } " +
        ".hl_numeric      { color: " + theme.token.tNumeric     + "; } " +

        // Comments and todo tags
        ".hl_comment { color: " + theme.token.tComment + "; font-style:  normal; } " +
        ".hl_todo    { color: " + theme.token.tTodo    + "; font-weight: normal; } " +

        // Other
        ".hl_identifier { color: " + theme.token.tIdentifier + "; } " +
        ".hl_attrib     { color: " + theme.token.tAttrib     + "; } " +


        /*----- Diff -----*/

        // Complete block
        "table td.lineContent.diffContentA { background-color: " + theme.diff.completeBlock.bOldBackground + "; border-left: " + theme.diff.verticalBorder.oOld + "; border-right: " + theme.diff.verticalBorder.oOld + "; } " +
        "table td.lineContent.diffContentB { background-color: " + theme.diff.completeBlock.bNewBackground + "; border-left: " + theme.diff.verticalBorder.oNew + "; border-right: " + theme.diff.verticalBorder.oNew + "; } " +

        // Partial block: identical
        "table td.lineContent.ediffContentA { background-color: " + theme.diff.partialBlock.identical.bOldBackground + "; border-left: " + theme.diff.verticalBorder.oOld + "; border-right: " + theme.diff.verticalBorder.oOld + "; } " +
        "table td.lineContent.ediffContentB { background-color: " + theme.diff.partialBlock.identical.bNewBackground + "; border-left: " + theme.diff.verticalBorder.oNew + "; border-right: " + theme.diff.verticalBorder.oNew + "; } " +

        // Partial block: changed
        ".ediffChangedA { background-color: " + theme.diff.partialBlock.changed.bOldBackground + "; padding: 1px 0px; } " +
        ".ediffChangedB { background-color: " + theme.diff.partialBlock.changed.bNewBackground + "; padding: 1px 0px; } " +

        // Non-existent block (code doesn't exist in other pane)
        ".cells-empty             .cell-empty { background-color: " + theme.bMainBackground      + "; } " +
        ".inlineSource   td.author.cell-empty { background-color: " + theme.author.bBackground   + "; } " +
        ".inlineSource td.revision.cell-empty { background-color: " + theme.revision.bBackground + "; } " +

        // Context separator
        ".activeFrx .diffSkipped    { border: 0; } " +
        ".activeFrx .diffSkipped td { background: " + theme.diff.contextSeparator.dBackground + " repeat; height: " + theme.diff.contextSeparator.sHeight + "; } " +


        /*----- Disable line highlighting -----*/

        ".inlineSource .lineHighlighted .diffLineNumbers { background-color: " + theme.bMainBackground + "; } " +
        ".inlineSource .lineHighlighted .diffContent     { background-color: " + theme.bMainBackground + "; } " +


        /*----- User comments -----*/

        ".comment .markup .codeContent { padding:     " + theme.userComment.sCodePadding + "; } " +
        ".comment .markup .code pre    { font-family: " + theme.monospaceFontFamily      + "; } " +

        ".comment                    { border: 0; background-color: " + theme.userComment.bDefault           + "; } " +
        ".comment.read               { border: 0; background-color: " + theme.userComment.bRead              + "; } " +
        ".comment.unread             { border: 0; background-color: " + theme.userComment.bUnread            + "; } " +
        ".comment.leaveUnread        { border: 0; background-color: " + theme.userComment.bLeaveUnread       + "; } " +
        ".comment.read.defect        { border: 0; background-color: " + theme.userComment.bReadDefect        + "; } " +
        ".comment.unread.defect      { border: 0; background-color: " + theme.userComment.bUnreadDefect      + "; } " +
        ".comment.leaveUnread.defect { border: 0; background-color: " + theme.userComment.bLeaveUnreadDefect + "; } ";

        return css;

    }


    /*---------------------*/
    /*  IDs and selectors  */
    /*---------------------*/

    var cruciateStyleID   = "cruciateStyle";
    var cruciateToolbarID = "cruciateToolbar";
    var moreButtonsSpanID = "cruciateMoreButtons";

    var activePaneSelector = "div.change.frxouter.activeFrx";

    var menuSelector_diff       = "li.frx-diff-layout-opt";
    var menuSelector_context    = "div.aui-dropdown.aui-dropdown-right ol:first-child li";
    var menuSelector_whitespace = "li.frx-whitespace-opt";


    /*--------------------*/
    /*  Helper functions  */
    /*--------------------*/

    function createLabel(text, isHeading) {
        var fontWeight = (isHeading === true) ? "bold" : "normal";
        var fontSize   = (isHeading === true) ? "15px" : "13px";
        return jQuery("<span></span>").css({"padding": "10px", "color": "hsl(210, 20%, 65%)", "font-weight": fontWeight, "font-size": fontSize}).text(text);
    }

    function createButton(labelText, clickHandler) {
        return jQuery("<button></button>").text(labelText).click(clickHandler);
    }

    function toggleControlsUnderneath(showControls) {
        jQuery("div.aui-header-secondary ul.aui-nav, div.toolbar-keyboard-shortcuts").css(
            { "opacity": (showControls ? "1" : "0") }
        );
    }

    function isThemeInjected() {
        return (jQuery("#" + cruciateStyleID).length > 0);
    }

    function injectTheme() {
        if (isThemeInjected()) {
            return;
        }
        var themeProperties = getDarkThemeProperties();
        var css             = generateThemeCss(themeProperties);
        jQuery("head").append(
            jQuery("<style></style>").attr({"id": cruciateStyleID, "type": "text/css"}).text(css)
        );
    }

    function removeTheme() {
        jQuery("#" + cruciateStyleID).remove();
    }


    /*------------------*/
    /*  Button actions  */
    /*------------------*/

    function buttonAction_removeCruciate() {
        jQuery("#" + cruciateToolbarID).remove();
        toggleControlsUnderneath(true);
    }

    function buttonAction_toggleTheme() {
        if (isThemeInjected()) {
            removeTheme();
        } else {
            injectTheme();
        }
    }

    function buttonAction_showMoreButtons() {
        jQuery(this).remove();
        jQuery("#" + moreButtonsSpanID).css({"display": "inline"});
    }

    function buttonAction_menuClick(menuSelector, childNumber) {
        jQuery(activePaneSelector + " " + menuSelector + ":nth-child(" + childNumber + ") a").trigger("click");
    }

    function buttonAction_changeCommentsDisplay(commentsMode) {
        jQuery("#set-" + commentsMode + "-comments a").trigger("click");
    }


    /*--------*/
    /*  Main  */
    /*--------*/

    function injectCruciateToolbar() {

        if (jQuery("#" + cruciateToolbarID).length > 0) {
            return;
        }

        jQuery("body").append(
            jQuery("<div></div>").attr({"id": cruciateToolbarID}).css({"position": "absolute", "top": "10px", "right": "10px"}).append(

                createButton("x", buttonAction_removeCruciate),

                createLabel("Cruciate", true),

                createButton("Toggle theme", buttonAction_toggleTheme),
                createButton("More \u2192",  buttonAction_showMoreButtons),

                jQuery("<span></span>").attr({"id": moreButtonsSpanID}).css({"display": "none"}).append(

                    createLabel("Diff:"),

                    createButton("Unif", function() { buttonAction_menuClick(menuSelector_diff, 1); }),
                    createButton("Side", function() { buttonAction_menuClick(menuSelector_diff, 2); }),

                    createLabel("Context:"),

                    createButton("20",   function() { buttonAction_menuClick(menuSelector_context, 3); }),
                    createButton("100",  function() { buttonAction_menuClick(menuSelector_context, 4); }),
                    createButton("Full", function() { buttonAction_menuClick(menuSelector_context, 5); }),

                    createLabel("Whitespace:"),

                    createButton("All",  function() { buttonAction_menuClick(menuSelector_whitespace, 1); }),
                    createButton("Sig",  function() { buttonAction_menuClick(menuSelector_whitespace, 2); }),
                    createButton("None", function() { buttonAction_menuClick(menuSelector_whitespace, 3); }),

                    createLabel("Comments:"),

                    createButton("Inline", function() { buttonAction_changeCommentsDisplay("inline"); }),
                    createButton("Hidden", function() { buttonAction_changeCommentsDisplay("hidden"); })

                )

            )
        );

    }

    injectCruciateToolbar();

    toggleControlsUnderneath(false);

    injectTheme();

})();
