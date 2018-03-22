import Ember from 'ember';

import $ from 'jquery';

export default Ember.Controller.extend({

  init()
  {

    let self = this;

    Ember.$.getJSON('http://localhost:3000/Players', function(data)
    {
        console.log(data);
        let cell = data;
        self.set('player',cell);
    });
  },
  player:null,
  actions :{

    fetch_player(e,event)
    {

      let fetcher = e;

      Ember.$('.player_detail').hide();

      let target = event.target;

      let self = this;

      Ember.$.getJSON('http://localhost:3000/Players/'+e, function(data)
      {
          console.log(data);
          let cell = data;
          self.set('play_detail',cell);
          // $(target).find('.player_detail').show();
          $(target).parent().find('.player_detail').show();
      });


      // $(target).css("color","red");

    }

  }


});
