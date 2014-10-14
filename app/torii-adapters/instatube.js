import Ember from 'ember';

export default Ember.Object.extend({

  open: function(authorization){
    Ember.Logger.log('authorization', authorization);
    return { authorization: authorization };
  }
});