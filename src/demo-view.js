import Marionette from 'backbone.marionette'
import { ItemView } from 'backbone.marionette'
import template from './demo-view.hbs'

export default ItemView.extend({
  name: "Demo",
  template: template,
  serializeData: function () {
    return {
      name: Marionette.getOption(this, "name")
    }
  },
  events: {
    "click": "onClick"
  },
  onClick: function (event) {
    alert('Oh Hai Mark!');
  }
});
