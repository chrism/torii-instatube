import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInToInstatube: function(){
      var controller = this.controllerFor('index');

      this.get('session').open('instatube').then(function(){
        Ember.Logger.log('whatevs');
      }, function(error){
        Ember.Logger.log('error');
      });
    }
  }
});
