javascript: (function(){var a=document.createElement("style");a.type="text/css";a.appendChild(document.createTextNode("body { background-color: hsl(0, 0%, 0%); } div#review-waypost h2#review-crumb span a { color: hsl(210, 50%, 80%); } #reviewHead { color: hsl(0, 0%, 100%); } #reviewHead span.title a { color: hsl(0, 0%, 100%); } #reviewHead.editable:hover { background-color: hsl(60, 100%, 20%); } #review-state { color: hsl(0, 0%, 60%); } #review-state span { color: hsl(0, 0%, 60%) !important; } #review-state em { color: hsl( 0, 100%, 40%); } .review-members h5 { color: hsl(0, 0%, 60%); } #status span { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAAAgCAYAAAA13/OGAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nOzdMVLjMBQG4NCp2iIdV/AlcomU3EUcg54yR+Ecm2MA0iCokl2bmUTW81d8zMRy8UbY1p9YlncppQ+AoN6KXByKfXNo295WUB+w0K53AQA38lJMxe6Kqe3Tu05gAcElpffitTgWj82xbXtfQX3AcjWQ/CkeiqfiVJybU9v20PYRXmAgWw8uNZjkdP0bWU7CC4ym3gKqv6bUYPL8j/2e2z5TctsIhrH14FJ/VbkWWr69rqBOYL6cvs7dp/b5b9s2Nblt+2j7fH9J6V03MMP/Bm2AUdVbQvVCly+05dZ2WkGdwALdCwC4kTqfpYaTSxN0p9Z2XkGdwALdCwC4EcEFAupeAMCNuFUEAdU/3SfadGRyLsST09e5a3IuBLT14OJxaIjH49AQ2NaDS2UBOojHAnQQlOACRGXJfwhIcAEi85JFCEZwAQCGIbgAAMMQXACAYQguAMAwBBcgMpNz9RHBCC5AVB6H1kcEJLhYgA4isgCdPmK+ocbBrQcXS/5DPJb810fMN9w4uPXg4iWLEE9OXrKoj5hruHFw68HlOOMfBoyp3u6o53m+0JZb26l9PqT+16N7Ovyij9iuOlb2PmZ/7HoX0NljhwMAuI86V6Oe55cmn06t7dw+71P/69E97X/RR2xXHSt7H7M/dr0L6ExwgbgEl+sEF5ZYVXD5BAAA///s3TEOgEAIBEBLf+XT/LqFsTQQmxOYYnqzxkDCHW6rH2AxoyLoy6jo3fEhI+YyKvqRcoeSgNC539+ug6cyIlauDk5vXMpdAwNCrvrKiLxydXB64/K8tDKLd4AUy9VkRF6pOqhxAbqyzl5GNKRxATrzA0EZ0cwFAAD//wMA9qcaFemH/40AAAAASUVORK5CYII='); } #review-meta h3 { background-color: hsl(0, 0%, 20%); color: hsl(0, 0%, 100%); border: 1px solid hsl(0, 0%, 40%); } #content-column .toolbar { color: hsl(0, 0%, 100%); background-color: hsl(0, 0%, 20%); } #reviewpage #review-info-container .toolbar { border: 1px solid hsl(0, 0%, 40%); } #time-spent-input { color: hsl(0, 0%, 100%); } #reviewpage .toolbar .toolbar-keyboard-shortcuts { color: hsl(0, 0%, 100%); } .toolbar .tb_left { border-right: 1px solid hsl(0, 0%, 40%); } #mark-comments-read-button a { color: hsl(45, 100%, 60%); } #mark-comments-read-button.tb_button.disabled a { color: hsl( 0, 0%, 35%); } .frx-header-container .frx-header { background-color: hsl(0, 0%, 20%); border-bottom: 1px solid hsl(0, 0%, 40%); } .frx-header-container { border-left: 1px solid hsl(0, 0%, 40%); } .path-truncated .path-prefix { color: hsl(0, 0%, 100%); } .frx-actions-primary .stats { color: hsl(0, 0%, 100%); } #content-column span.frx-changed { color: hsl(210, 50%, 80%); } #content-column span.operation-text.frx-changed { color: hsl(210, 100%, 40%); } #content-column span.frx-added { color: hsl(120, 100%, 40%); } #content-column span.operation-text.frx-added { color: hsl(120, 100%, 30%); } #content-column span.frx-deleted { color: hsl( 0, 100%, 55%); } #content-column span.operation-text.frx-deleted { color: hsl( 0, 100%, 40%); } .frxSlider-cells td.new a { color: hsl(120, 100%, 40%); } .frx-outdated a.aui-dd-link { color: hsl(0, 100%, 66%) !important; } .toolbar-frame .aui-dd-parent a.aui-dd-link { color: hsl(0, 0%, 100%); } #reviewpage #content-navigation { border: 1px solid hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } #navigation-tree .activeFrx li span a { color: hsl(210, 50%, 80%); } #frx-overview span.number-of-files { color: hsl(0, 0%, 60%); } #tree-root li.source-node .source-node-hr { border-top: 1px solid hsl(0, 0%, 40%); } #tree-root li.source-node > span { background: hsl(0, 0%, 40%); color: hsl(0, 0%, 100%); } #navigation-tree .tree span.folder { color: hsl(0, 0%, 100%); opacity: 0.5; } #navigation-tree .tree .stats .commentCount { color: hsl(0, 0%, 100%); } #navigation-tree .tree .stats .unreadCommentCount { color: hsl(0, 0%, 100%); } #navigation-tree .tree span.frx-changed a { color: hsl(210, 50%, 80%); } #navigation-tree .tree span.frx-added a { color: hsl(120, 100%, 40%); } #navigation-tree .tree span.frx-deleted a { color: hsl( 0, 100%, 55%); } #tree-root li > span { border-left: 2px solid hsl( 0, 0%, 0%); } #tree-root li.activeFrx > span { border-left: 2px solid hsl(210, 100%, 80%); background-color: hsl(210, 100%, 30%); } #navigation-tree .tree span.frx-incomplete a::after { content: '\\0000A0\\002605'; color: hsl(300, 100%, 50%); } div#generalComments.activeFrx { background-color: hsl(0, 0%, 0%); } #generalCommentsInner { background-color: hsl(0, 0%, 0%); } .overview-item h4.overview-heading { color: hsl(0, 0%, 100%); } #details .base-table th { color: hsl(0, 0%, 100%); } #details .base-table td { color: hsl(0, 0%, 100%); } #details .base-table td a { color: hsl(210, 50%, 80%); text-decoration: none; } #review-meta-links li.top-level .heading { color: hsl(0, 0%, 60%); } #review-meta-links li.top-level span.top-level { color: hsl(0, 0%, 60%); } #review-meta-links li.top-level a.jira-link { color: hsl(210, 50%, 80%); text-decoration: none; } .overview-heading .edit-objectives.edit-link { color: hsl(210, 50%, 80%); text-decoration: none; } .overview-body .overview-content .objectives .meta-objectives { color: hsl(0, 0%, 60%); } .overview-body .overview-content .objectives .meta-objectives .tip-edit-objectives { color: hsl(210, 50%, 80%); text-decoration: none; } .overview-body .overview-content #no-general-comments em { color: hsl(0, 0%, 60%); } .overview-body .overview-content #addReviewCommentLink { color: hsl(210, 50%, 80%); text-decoration: none; } #frx-pane { background-color: hsl(0, 0%, 0%); border-left: 1px solid hsl(0, 0%, 40%); } .revision_comments_frxinner { background-color: hsl(0, 0%, 0%); } .source { background-color: hsl(0, 0%, 0%); } .inline-comment-tip { background-color: hsl(0, 0%, 66%); } .tetrisColumn { background-color: hsl(0, 0%, 0%); font-size: 1pt; } span.tetrisCommentHidden { display: inline-block; width: 16px; height: 16px; top: 0px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA8JAAAPCQHhvMvxAAAAWElEQVR4nGJgmPRiHxDb////n4EczADU/AeKyTII2QCyDMJmAEkG4TOAKIOIMQCvQaQYgNUgcgxAMWhADCDbC2QHItnRSHZCIjspk52ZKMrOAAAAAP//AwA8O6F/wotm5gAAAABJRU5ErkJggg==') no-repeat 0px 0px; } .diffNav { background-color: hsl(0, 0%, 0%); border-right: 1px solid hsl(0, 0%, 40%); font-size: 1pt; } .diffNav a img { display: none; } .diffNav .diff-segment-link:first-child { display: inline-block; width: 9px; height: 13px; background-image: url('data:image/gif;base64,R0lGODlhCQANAPQAMQAAAAsJBhENChQQCx8YEiohGDYqHjgsID4xI0Q1Jkk6KnlgRYptTpBxUrqTar2Va8OZbsaccNGlduW0gui2g+q5hfC9iCf5AQMn+QEAAAAA6O2UAAAAAAAAAAAAAAAAACwAAAAACQANAAAFNSAgjuS4GCXAWNNBNpZUUYlYWNCgUJHtCCLEQyQIAE4AAmnVesVmNcAtt+tJf8EhoEhSpkYhADs='); } .diffNav .diff-segment-link:nth-child(2) { display: inline-block; width: 9px; height: 13px; background-image: url('data:image/gif;base64,R0lGODlhCQANAPQAMQAAAAsJBhENChQQCx8YEiohGDYqHjgsID4xI0Q1Jkk6KnlgRYptTpBxUrqTar2Va8OZbsaccNGlduW0gui2g+q5hfC9iLc3AgO3NwIAAAAA6O2UAAAAAAA4XWxz/38AACwAAAAACQANAAAFNCAgjqQQkIRYOIKIPKoFDQoVjY0lVVRCMpbJYWQCLAyAFGDVArxis9pNlNv1fsEhyYjcekMAOw=='); } .inlineSource td.author { background-color: hsl(0, 0%, 20%); } td.revision { background-color: hsl(0, 0%, 20%); color: hsl(0, 0%, 63%); } td.diffLineNumbers { font-family: Monaco, monospace; color: hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } td.diffLineNumbersA { font-family: Monaco, monospace; color: hsl(0, 100%, 50%); background-color: hsl(0, 100%, 30%) !important; } td.diffLineNumbersB { font-family: Monaco, monospace; color: hsl(120, 100%, 40%); background-color: hsl(120, 100%, 25%) !important; } .lineContent { font-family: Monaco, monospace; color: hsl(0, 0%, 100%); } .diffContent { border-left: 1px solid hsl(0, 0%, 40%); border-right: 1px solid hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } .hl_keyword { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_starttag { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_endtag { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_string { color: hsl(290, 100%, 80%); font-weight: normal; } .hl_char_literal { color: hsl(290, 100%, 80%); font-weight: normal; } .hl_numeric { color: hsl(290, 100%, 80%); } .hl_comment { color: hsl( 22, 100%, 60%); font-style: normal; } .hl_todo { color: hsl( 22, 100%, 60%); font-weight: normal; } .hl_identifier { color: hsl( 45, 100%, 66%); } .hl_attrib { color: hsl( 45, 100%, 66%); } table td.lineContent.diffContentA { background-color: hsl( 0, 100%, 30%) !important; border-left: 1px solid hsl( 0, 100%, 50%); border-right: 1px solid hsl( 0, 100%, 50%); } table td.lineContent.diffContentB { background-color: hsl(120, 100%, 25%) !important; border-left: 1px solid hsl(120, 100%, 40%); border-right: 1px solid hsl(120, 100%, 40%); } table td.lineContent.ediffContentA { background-color: hsl( 0, 100%, 12%) !important; border-left: 1px solid hsl( 0, 100%, 50%); border-right: 1px solid hsl( 0, 100%, 50%); } table td.lineContent.ediffContentB { background-color: hsl(120, 100%, 10%) !important; border-left: 1px solid hsl(120, 100%, 40%); border-right: 1px solid hsl(120, 100%, 40%); } .ediffChangedA { background-color: hsl( 0, 100%, 30%) !important; padding: 1px 0px; } .ediffChangedB { background-color: hsl(120, 100%, 25%) !important; padding: 1px 0px; } .cells-empty .cell-empty { background-color: hsl(0, 0%, 0%); } .inlineSource td.author.cell-empty { background-color: hsl(0, 0%, 20%); } .inlineSource td.revision.cell-empty { background-color: hsl(0, 0%, 20%); } .activeFrx .diffSkipped { border: 0; } .activeFrx .diffSkipped td { background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQUlEQVR4nIzKSw4AIAxCQe7E/c9WozZ+YiMs3gYGAOKM5FN+FtpQoAkNFLBQBSs0dgdd8IcWVCiNRr0GAAD//wMAMxCBfyEN4bcAAAAASUVORK5CYII=') repeat; height: 50px; } .inlineSource .lineHighlighted .diffLineNumbers { background-color: hsl(0, 0%, 0%); } .inlineSource .lineHighlighted .diffContent { background-color: hsl(0, 0%, 0%); } .comment .markup .codeContent { padding: 10px; } .comment .markup .code pre { font-family: Monaco, monospace; } .comment { border: 0; background-color: hsl(60, 25%, 60%); } .comment.read { border: 0; background-color: hsl(60, 25%, 60%); } .comment.unread { border: 0; background-color: hsl(60, 35%, 80%); } .comment.leaveUnread { border: 0; background-color: hsl(60, 35%, 80%); } .comment.read.defect { border: 0; background-color: hsl( 0, 25%, 60%); } .comment.unread.defect { border: 0; background-color: hsl( 0, 35%, 80%); } .comment.leaveUnread.defect { border: 0; background-color: hsl( 0, 35%, 80%); } ")); document.getElementsByTagName("head")[0].appendChild(a)})(); 