// ==UserScript==
// @name         grafana-screen-button
// @namespace    https://github.com/pavel-zeman/grafana-screen-button
// @description  Grafana screenshot helper
// @version      0.1
// @author       Pavel Zeman
// @include      http://*:3000/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var link = $("<div style='cursor:pointer'>Screen</div>");
  link.on("click", function() {
    document.querySelectorAll("div.main-view > div.scroll-canvas")[0].style.setProperty("overflow", "visible", "important");
    document.getElementsByClassName("scroll-canvas--dashboard")[0].style.setProperty("overflow", "visible", "important");
    document.getElementsByClassName("custom-scrollbar--page")[0].style.setProperty("overflow", "visible", "important");
    document.querySelectorAll("div.custom-scrollbar--page > div.view")[0].style.setProperty("overflow", "visible", "important");
  });
  link.insertBefore($(".sidemenu-item").first())
})();