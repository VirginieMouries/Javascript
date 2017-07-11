

    function $_GET(param) {
    	console.log("Fonction Get, param ", param);
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
	}

	var $_GET = $_GET(),
    nom = $_GET['nom'],
    prenom = $_GET['prenom'];

    /* myJson. */

    var d=document.getElementById("titre");
    d.innerHTML="Elève "+ nom +" "+ prenom;