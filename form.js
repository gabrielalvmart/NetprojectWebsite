

/*function recolectaDatos() {

    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("password");
    document.getElementById("usuario").classList.add("invalid");
    validaDatos(usuario, contraseña);
}*/

/*function validaDatos(){
    console.log('hola');
    var ActiveDirectory = require('activedirectory');
    var ad = new ActiveDirectory(
    {url: 'LDAP://netproject.eastus.cloudapp.azure.com:389',
        baseDN: 'DC=netproject,DC=eastus,DC=cloudapp,DC=azure,DC=com'});
    var username = 'gabmart@netproject.eastus.cloudapp.azure.com';
    var password = 'G%%gMytLc92%^gBD';
 
ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
 
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});
}

validaDatos();*/
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
/*v ActiveDirectory = require('activedirectory2');
const config = { 
  url: 'ldap://netproject.eastus.cloudapp.azure.com',
  baseDN: 'dc=netproject,dc=eastus,dc=cloudapp,dc=azure,dc=com', 
}
const ad = new ActiveDirectory(config);
const username = 'gabmart';

ad.userExists(username, function(err, exists) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return null;
  }
 
  console.log(username + ' exists: ' + exists);
});
*/
/*const { authenticate } = require('ldap-authentication')

async function auth() {
  

  // auth with regular user
  options = {
    ldapOpts: {
      url: 'ldap://netproject.eastus.cloudapp.azure.com',
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: 'uid=gabmart,DC=netproject,DC=eastus,DC=cloudapp,DC=azure,DC=com',
    userPassword: 'G%%gMytLc92%^gBD',
    userSearchBase: 'DC=netproject,DC=eastus,DC=cloudapp,DC=azure,DC=com',
    usernameAttribute: 'uid',
    username: 'gabmart',
    // starttls: false
  }

  user = await authenticate(options)
  console.log(user)
}

auth()*/

/*
var client =ldap.createClient(username, password)({
  url: 'ldap:netproject.eastus.cloudapp.azure.com:389' 
   })

 client.bind(username, password,  function(error){
  if(error){ 
       } 
   else{ 
  } 
}) ;*/