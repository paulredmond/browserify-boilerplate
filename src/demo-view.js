import { ItemView } from 'backbone.marionette'

export default ItemView.extend({
  template: "<p>Oh Hai, Demo!</p>",
  events: {
    "click": "onClick"
  },
  onClick: function (event) {
    alert('Oh Hai Mark!');
  }
});
