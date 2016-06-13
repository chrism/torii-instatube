import Ember from 'ember';

import Provider from 'torii/providers/base';

var Instatube = Provider.extend({
  open: function(){
    var url = 'http://dev.instatube.tv/oauth/authorize?client_id=3e49eab1d954f8a30eff9b54611268e73d4f0176e88a5902929439346e16d711&redirect_uri=http://127.0.0.1:4200&response_type=token';
    var responseParams= ['token'];

    return this.get('popup').open(url, responseParams).then(function(authData){
      console.log('authdata is... ' + authData);
    });
  }
});

export default Instatube;