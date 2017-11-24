/**
 * Created by yangwangwang on 2017/11/16.
 * 自定义富文本编辑器
 */

 angular.module('myEditor').component('myEditor',{
 	templateUrl:'component/myEditor/myEditor.template.html',
 	controller:function($scope){
		var createDOM = function(ele,parent,fn){
			var currElement = document.createElement(ele);
			parent && parent.appendChild(currElement); //如果父节点存在
			fn && fn(currElement);  
			return currElement;
		};

		var setAttr = function(ele,attr){
			for(let key in attr){
				ele.setAttribute(key,attr[key]);
			}
		};

		var setCss = function(ele,style){
			ele.style.cssText = style;
		};

		var addEventListener = function(ele,type,fn){
			 ele.addEventListener ? ele.addEventListener(type, fn, false) : ele.attachEvent("on" + type, fn);
		}


		var myEditor = function(){
			var self = this;
			this.options = {
				containerId:'myEditor'
			};
			this.eContainer = document.getElementById(this.options.containerId);
			this.toolsBar = createDOM('div',this.eContainer);
			this.eBody = createDOM('div',this.eContainer);
			this.eFrame = createDOM('iframe',this.eBody);
			this.eFooter = createDOM('div',this.eContainer);
			setAttr(this.toolsBar,{editorMenuBar:''});
			setAttr(this.eBody,{editorContent:''});
			setAttr(this.eFrame,{height:(this.eBody.clientHeight - 2)+'px',scrollBar:'',src: "./component/myEditor/myEditor.eidtarea.html",});
			setAttr(this.eFooter,{editorFooter:''});
			this.eFooter.innerHTML = '文档路径';
			this.editArea = this.eFrame.contentDocument;
			addEventListener(this.eFooter,'click',function(){
				console.log(self.editArea.contentDocument.innerHTML);
			});
			
		
		};

		myEditor();
 	},
 	bindings:{}
 });