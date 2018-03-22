import Ember from 'ember';

export default Ember.Route.extend({

  trigger()
  {
    this._super();
    // setTimeout(function()
    // {
    //   this.transitionTo('index');
    // },2000);

  },
  afterModel()
  {
    // this.send('refresh');
  }

});
