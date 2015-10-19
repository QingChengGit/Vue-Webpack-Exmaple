/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./script/vues/articleVue.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2015/7/24.
	 */
	var //PXCom = require('../components/dialogComponent'),
	    //grid = PXCom.grid,
	    //require .vue文件，通过.vue文件的方式封装组件，返回值为options对象
	    gridComponent = __webpack_require__(/*! ../components/grid.vue */ 2),
	    //通过Vue.extend创建组件
	    grid = Vue.extend(gridComponent);
	    articleService = __webpack_require__(/*! ../services/articleService */ 9);
	var articleVue = new Vue({
	    el:'.container',
	    data:{
	        articles:articleService.fetchData()
	    },
	    methods:{
	        addArticle:function(title,content){
	            var articles = this.articles,
	                id = parseInt(articles[articles.length-1].id)>8?(parseInt(articles[articles.length-1].id)+1)+"":'0'+(parseInt(articles[articles.length-1].id)+1);
	            this.articles.push({id:id,title:title,content:content});
	        },
	        removeArticle:function(id){
	            var articles = this.articles;
	            for(var i = 0;i<articles.length;i+=1){
	                if(articles[i].id===id){
	                    articles.splice(i,1);
	                }
	            }
	        },
	        testhandler:function(){
	        }
	    }
	});
	var comVue = new Vue({
	    el:'.component-wrap',
	    data:{
	        firstData:{
	            tabData:[
	            {name:'组件实例数据A',age:'18'},
	            {name:'组件实例数据B',age:'22'}
	            ]
	        },
	        secondData:{
	            tabData:[
	                {name:'组件实例数据C',age:'18'},
	                {name:'组件实例数据D',age:'22'}
	            ]
	        }
	    }
	});
	
	var myGrid = new grid;
	var curData = comVue.firstData.tabData;
	console.log(curData);
	myGrid.renderTable(comVue.firstData.tabData);
	myGrid.$mount('.px-test');
	curData.push({name:'组件实例数据E',age:'25'});
	myGrid.renderTable(curData);
	
	var myGrid1 = new grid;
	var curData1 = comVue.secondData.tabData;
	curData1.push({name:'组件实例数据F',age:'30'});
	myGrid1.$mount('.component-wrap .px-test');
	myGrid1.renderTable(curData1);

/***/ },
/* 1 */,
/* 2 */
/*!************************************!*\
  !*** ./script/components/grid.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style!css!less!./../../~/vue-loader/lib/selector.js?type=style&index=0!./grid.vue */ 3)
	module.exports = __webpack_require__(/*! -!./../../~/vue-loader/lib/selector.js?type=script&index=0!./grid.vue */ 7)
	module.exports.template = __webpack_require__(/*! -!vue-html!./../../~/vue-loader/lib/selector.js?type=template&index=0!./grid.vue */ 8)


/***/ },
/* 3 */
/*!**************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/less-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./script/components/grid.vue ***!
  \**************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/less-loader!./../../~/vue-loader/lib/selector.js?type=style&index=0!./grid.vue */ 4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./grid.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./grid.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/*!*********************************************************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./script/components/grid.vue ***!
  \*********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ".px-ui-table {\n  width: 600px;\n  margin: 10px 0;\n  border-collapse: collapse;\n  border: 2px solid green;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.px-ui-table .px-ui-tr {\n  background-color: #f9f9f9;\n}\n.px-ui-table .px-ui-td {\n  height: 40px;\n  line-height: 40px;\n  border: 1px solid #fff;\n  text-align: center;\n}\n.px-ui-table .px-ui-tr:hover {\n  border: 1px solid green;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/*!***************************************************************************************!*\
  !*** ./~/vue-loader/lib/selector.js?type=script&index=0!./script/components/grid.vue ***!
  \***************************************************************************************/
/***/ function(module, exports) {

	module.exports = {
			data:function(){
	            return {
	                compData:[{name:'组件实例数据C',age:'18'},
	                    {name:'组件实例数据D',age:'22'}]
	            };
	        },
	        methods:{
	            renderTable:function(data){
	                this.$data.compData = data;
	            },
	            toggle:function(item){
	                var flag = item.getAttribute('selected');
	                if(!flag){
	                    item.style.backgroundColor = "green";
	                    item.setAttribute('selected',1);
	                }else{
	                    item.style.backgroundColor = "";
	                    item.removeAttribute('selected');
	                }
	            }
	        }
		};

/***/ },
/* 8 */
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./script/components/grid.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<table class=\"px-ui-table\">\r\n\t\t<caption></caption>\r\n\t\t<tbody>\r\n\t\t\t<tr class=\"px-ui-tr\" v-repeat=\"compData\" v-on=\"click:toggle(this.$el)\">\r\n\t\t\t\t<td class=\"px-ui-td\" v-text=\"name\"></td><td class=\"px-ui-td\" v-text=\"age\"></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>";

/***/ },
/* 9 */
/*!*******************************************!*\
  !*** ./script/services/articleService.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 2015/7/24.
	 */
	var articleService = (function(){
	    function fetchData(){
	        var data = [
	            {
	                id:'01',
	                title:'AngularJS',
	                content:'Angular 是一个NB的框架!'
	            },
	            {
	                id:'02',
	                title:'VueJS',
	                content:'VueJS 是一个轻量级的面向组件开发的灵活框架!'
	            },
	            {
	                id:'03',
	                title:'jQuery',
	                content:'jQuery 是一个极大的简化了开发人员对DOM操作并处理了复杂的框浏览器兼容性的高效的JS库!'
	            }
	        ];
	        return data;
	    }
	    return {
	        fetchData:fetchData
	    };
	}());
	module.exports = articleService;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map