// ==UserScript==
// @name         LazyFeatures
// @namespace    https://github.com/panetun/LazyFeatures
// @version      0.1
// @description  Record cucumber + spreewald features while interacting with the page
// @author       Michael Leimstädtner
// @match        https://github.com/panetun/LazyFeatures*
// @grant        unsafeWindow
// @downloadURL  https://raw.githubusercontent.com/panetun/LazyFeatures/master/LazyFeatures.user.js
// @updateURL    https://raw.githubusercontent.com/panetun/LazyFeatures/master/LazyFeatures.user.js
// ==/UserScript==

(function() {
    'use strict';
    if (window.top != window.self){  //-- Don't run on frames or iframes
        console.log("[#] Frame blocked");
        return;
    }

    let W = unsafeWindow;

    let LazyFeatures = {
        init: function(){
            DOM.init();
        }
    };
    let DOM = {
        init: function(){

        }
    };

    LazyFeatures.init();
})();