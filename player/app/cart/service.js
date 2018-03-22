import Ember from 'ember';

export default Ember.Service.extend({

  items : [1,2,3],

  cooler()
  {
    alert("cooler Function invoked");
  },
  save_item(a)
  {
    this.set("items",a);
  }

});
