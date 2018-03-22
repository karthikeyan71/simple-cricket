import Ember from 'ember';

export default Ember.Controller.extend({

  init()
  {

    console.log("came inside");

    let self = this;
    if(init_value === null)
    {
      Ember.$.getJSON('http://localhost:3000/current', function(data)
      {
          console.log(data);
          let cell = data;
          self.set('current_state',cell);
          init_value = cell;
      });
    }
    else
    {
        this.set('current_state',init_value);
    }


  },
  current_state:null,
  changeNote: Ember.observer('current_state',function()
  {
    setTimeout(function()
    {
      // this.transitionToRoute('index');
    },1000);
  }),
  actions : {
    refresh()
    {
      let self = this;
      setInterval(function()
      {
        console.log("came");
        Ember.$.getJSON('http://localhost:3000/current', function(data)
        {
            console.log(data);
            let cell = data;
            self.set('current_state',cell);
            init_value = cell;
        });
      },2000);
    }
  }


});
