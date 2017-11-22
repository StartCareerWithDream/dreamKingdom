(function() {
	'use strict';
		var editorObj = $('#myEditor');
		var htmlStr = '<div editorContanier><div editorMenuBar><span editorMenuBtn><i class="my-iconfont my-icon-yanse1"></i></span></div><div  editorContent scrollBar contentEditable="true"></div></div>';
		editorObj.html(htmlStr);
		return editorObj;
}());