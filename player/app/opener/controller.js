import Ember from 'ember';

export default Ember.Controller.extend({

  carter : Ember.inject.service('cart'),

  actions : {

    invoke_service()
    {
      alert("Function Called");

      let valuer1 = [100,200,300];

      this.get('carter').save_item(valuer1);

      let valuer = this.get('carter').get('items');

      console.log(valuer);

    }

  }

});
