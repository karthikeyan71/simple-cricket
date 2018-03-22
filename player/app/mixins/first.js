import Ember from 'ember';

export default Ember.Mixin.create({

  actions : {

    cool()
    {
      alert('This is a mixin action');
    }
    
  }

});
