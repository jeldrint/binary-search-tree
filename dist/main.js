/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.querySelector('body');\r\nbody.style.backgroundColor = 'rgb(33,33,33)';\r\n\r\nconst Node = () => {\r\n    let num = '';\r\n    let left = ''\r\n    let right = '';\r\n}\r\n\r\nconst Tree = (arr) => {\r\n\r\n}\r\n\r\nconst buildTree = (arr) => {\r\n    const newArr = [];\r\n    arr.sort((a,b)=>a-b)\r\n    .map((e)=>{\r\n        if (!newArr.includes(e)){\r\n            newArr.push(e)\r\n        }\r\n    })\r\n    return newArr\r\n}\r\n\r\nbuildTree([7,3,2,1,4,5,6]);\n\n//# sourceURL=webpack://binary-search-tree/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;