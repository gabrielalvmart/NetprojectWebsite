
function validaDatos() {
  var ActiveDirectory = require('activedirectory2');
  var config = {
      url: 'ldap://netproject.eastus.cloudapp.azure.com/',
      baseDN: 'dc=netproject,dc=eastus,dc=cloudapp,dc=azure,dc=com',
      username: 'marquito@netproject.eastus.cloudapp.azure.comame@domain.com',
      password : 'D^Y^*N5em!7ipBEp'
  };
  var ad = new ActiveDirectory(config);
  var username = 'gabmart@netproject.eastus.cloudapp.azure.com';
  var password = 'G%%gMytLc92%^gBD';
  // Authenticate
  ad.authenticate(username, password, function(err, auth) {
      /*if (err) {
          console.log('ERROR: '+JSON.stringify(err));
          return;
      }*/
      if (auth) {
          console.log('Authenticated!');
      }
      else {
          console.log('Authentication failed!');
      }
  });
}
