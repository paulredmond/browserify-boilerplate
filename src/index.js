import $ from 'jquery'
import _ from 'underscore'
import Bacbone from 'backbone'
import { Application, LayoutView, ItemView } from 'backbone.marionette'
import DemoView from './demo-view'

let DemoApp = new Application();

DemoApp.on("before:start", function () {

  var RegionContainer = LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  DemoApp.regions = new RegionContainer();

});

DemoApp.on("start", function () {
  let view = new DemoView();
  DemoApp.regions.main.show(view);
});

DemoApp.start();
