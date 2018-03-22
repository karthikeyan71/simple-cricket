import Ember from 'ember';

export default Ember.Controller.extend({

  init()
  {
    let self = this;

    Ember.$.getJSON('http://localhost:3000/scorecard', function(data)
    {
        console.log(data);
        let cell = data;
        self.set('player_state',cell);
    });

  },
  player_state:null

});
