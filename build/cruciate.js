javascript: (function(){var a=document.createElement("style");a.type="text/css";a.appendChild(document.createTextNode("body { background-color: hsl(0, 0%, 0%); } #reviewHead { color: hsl(0, 0%, 100%); } #reviewHead span.title a { color: hsl(0, 0%, 100%); } #reviewHead.editable:hover { background-color: hsl(60, 100%, 20%); } #review-state { color: hsl(0, 0%, 60%); } #review-state span { color: hsl(0, 0%, 60%) !important; } #review-state em { color: hsl( 0, 100%, 40%); } .review-members h5 { color: hsl(0, 0%, 60%); } #status { -webkit-filter: invert(100%); } #review-meta h3 { background-color: hsl(0, 0%, 20%); color: hsl(0, 0%, 100%); border: 1px solid hsl(0, 0%, 40%); } #content-column .toolbar { color: hsl(0, 0%, 100%); background-color: hsl(0, 0%, 20%); } #reviewpage #review-info-container .toolbar { border: 1px solid hsl(0, 0%, 40%); } #time-spent-input { color: hsl(0, 0%, 100%); } #reviewpage .toolbar .toolbar-keyboard-shortcuts { color: hsl(0, 0%, 100%); } .toolbar .tb_left { border-right: 1px solid hsl(0, 0%, 40%); } #mark-comments-read-button a { color: hsl(45, 100%, 60%); } #mark-comments-read-button.tb_button.disabled a { color: hsl( 0, 0%, 35%); } .frx-header-container .frx-header { background-color: hsl(0, 0%, 20%); border-bottom: 1px solid hsl(0, 0%, 40%); } .frx-header-container { border-left: 1px solid hsl(0, 0%, 40%); } .path-truncated .path-prefix { color: hsl(0, 0%, 100%); } .frx-actions-primary .stats { color: hsl(0, 0%, 100%); } #content-column span.frx-changed { color: hsl(210, 50%, 85%); } #content-column span.operation-text.frx-changed { color: hsl(210, 100%, 40%); } #content-column span.frx-added { color: hsl(120, 100%, 45%); } #content-column span.operation-text.frx-added { color: hsl(120, 100%, 30%); } #content-column span.frx-deleted { color: hsl( 0, 100%, 55%); } #content-column span.operation-text.frx-deleted { color: hsl( 0, 100%, 40%); } .frx-outdated a.aui-dd-link { color: hsl(0, 100%, 66%) !important; } .toolbar-frame .aui-dd-parent a.aui-dd-link { color: hsl(0, 0%, 100%); } #reviewpage #content-navigation { border: 1px solid hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } #frx-overview span.number-of-files { color: hsl(0, 0%, 60%); } #tree-root li.source-node .source-node-hr { border-top: 1px solid hsl(0, 0%, 40%); } #tree-root li.source-node > span { background: hsl(0, 0%, 40%); color: hsl(0, 0%, 100%); } #navigation-tree .tree span.folder { color: hsl(0, 0%, 100%); } #navigation-tree .tree .stats .commentCount { color: hsl(0, 0%, 100%); } #navigation-tree .tree .stats .unreadCommentCount { color: hsl(0, 0%, 100%); } #navigation-tree .tree span.frx-changed a { color: hsl(210, 50%, 85%); } #navigation-tree .tree span.frx-added a { color: hsl(120, 100%, 45%); } #navigation-tree .tree span.frx-deleted a { color: hsl( 0, 100%, 55%); } #tree-root li > span { border-left: 2px solid hsl( 0, 0%, 0%); } #tree-root li.activeFrx > span { border-left: 2px solid hsl(210, 100%, 80%); background-color: hsl(210, 100%, 30%); } .overview-item h4.overview-heading { color: hsl(0, 0%, 100%); } div#generalComments.activeFrx { background-color: hsl(0, 0%, 0%); } #generalCommentsInner { background-color: hsl(0, 0%, 0%); } #details .base-table th { color: hsl(0, 0%, 100%); } #details .base-table td { color: hsl(0, 0%, 100%); } #review-meta-links li.top-level .heading { color: hsl(0, 0%, 60%); } #review-meta-links li.top-level span.top-level { color: hsl(0, 0%, 60%); } .overview-body .overview-content .objectives .meta-objectives { color: hsl(0, 0%, 60%); } .overview-body .overview-content #no-general-comments em { color: hsl(0, 0%, 60%); } #frx-pane { background-color: hsl(0, 0%, 0%); border-left: 1px solid hsl(0, 0%, 40%); } .revision_comments_frxinner { background-color: hsl(0, 0%, 0%); } .source { background-color: hsl(0, 0%, 0%); } .inline-comment-tip { background-color: hsl(0, 0%, 66%); } .tetrisColumn { background-color: hsl(0, 0%, 0%); font-size: 1pt; } .diffNav { background-color: hsl(0, 0%, 0%); border-right: 1px solid hsl(0, 0%, 40%); font-size: 1pt; } .diffNav img { -webkit-filter: invert(100%); } .inlineSource td.author { background-color: hsl(0, 0%, 20%); } td.revision { background-color: hsl(0, 0%, 20%); color: hsl(0, 0%, 63%); } td.diffLineNumbers { font-family: Monaco; color: hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } td.diffLineNumbersA { font-family: Monaco; color: hsl(0, 100%, 50%); background-color: hsl(0, 100%, 30%) !important; } td.diffLineNumbersB { font-family: Monaco; color: hsl(120, 100%, 40%); background-color: hsl(120, 100%, 25%) !important; } .lineContent { font-family: Monaco; color: hsl(0, 0%, 100%); } .diffContent { border-left: 1px solid hsl(0, 0%, 40%); border-right: 1px solid hsl(0, 0%, 40%); background-color: hsl(0, 0%, 0%); } .hl_keyword { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_starttag { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_endtag { color: hsl(210, 100%, 80%); font-weight: normal; } .hl_string { color: hsl(290, 100%, 80%); font-weight: normal; } .hl_char_literal { color: hsl(290, 100%, 80%); font-weight: normal; } .hl_numeric { color: hsl(290, 100%, 80%); } .hl_comment { color: hsl( 22, 100%, 60%); font-style: normal; } .hl_todo { color: hsl( 22, 100%, 60%); font-weight: normal; } .hl_identifier { color: hsl( 45, 100%, 66%); } .hl_attrib { color: hsl( 45, 100%, 66%); } table td.lineContent.diffContentA { background-color: hsl( 0, 100%, 30%) !important; border-left: 1px solid hsl( 0, 100%, 50%); border-right: 1px solid hsl( 0, 100%, 50%); } table td.lineContent.diffContentB { background-color: hsl(120, 100%, 25%) !important; border-left: 1px solid hsl(120, 100%, 40%); border-right: 1px solid hsl(120, 100%, 40%); } table td.lineContent.ediffContentA { background-color: hsl( 0, 100%, 12%) !important; border-left: 1px solid hsl( 0, 100%, 50%); border-right: 1px solid hsl( 0, 100%, 50%); } table td.lineContent.ediffContentB { background-color: hsl(120, 100%, 10%) !important; border-left: 1px solid hsl(120, 100%, 40%); border-right: 1px solid hsl(120, 100%, 40%); } .ediffChangedA { background-color: hsl( 0, 100%, 30%) !important; padding: 1px 0px; } .ediffChangedB { background-color: hsl(120, 100%, 25%) !important; padding: 1px 0px; } .cells-empty .cell-empty { background-color: hsl(0, 0%, 0%); } .inlineSource td.author.cell-empty { background-color: hsl(0, 0%, 20%); } .inlineSource td.revision.cell-empty { background-color: hsl(0, 0%, 20%); } .activeFrx .diffSkipped { border: 0; } .activeFrx .diffSkipped td { background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAATElEQVQYV4XQAQoAMAQFUM7k/kdwpg01YUEp6pUfBIAj7UVEcbWZmQEj7JBihxNyuCGDglLGl6kG/aAGr6UXE+xQOj0hhxtK79mefgG0Rif++GpEPQAAAABJRU5ErkJggg==') repeat; height: 50px; } .inlineSource .lineHighlighted .diffLineNumbers { background-color: hsl(0, 0%, 0%); } .inlineSource .lineHighlighted .diffContent { background-color: hsl(0, 0%, 0%); } .comment { border: 0; background-color: hsl(60, 25%, 60%); } .comment.read { border: 0; background-color: hsl(60, 25%, 60%); } .comment.unread { border: 0; background-color: hsl(60, 35%, 80%); } .comment.leaveUnread { border: 0; background-color: hsl(60, 35%, 80%); } .comment.read.defect { border: 0; background-color: hsl( 0, 25%, 60%); } .comment.unread.defect { border: 0; background-color: hsl( 0, 35%, 80%); } .comment.leaveUnread.defect { border: 0; background-color: hsl( 0, 35%, 80%); } ")); document.getElementsByTagName("head")[0].appendChild(a)})(); 