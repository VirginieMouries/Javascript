
	
  	// Je recupère la liste
  	var dataListe = myJson;
  	// Je récupère l'url
  	var url = window.location;
  	// je récupère l'id de l'élève
  	var eleveId = url.hash;
  	console.log(url);
  	console.log("je suis sur la page détail de l'élève avec l'id :" + eleveId);
  	
  	// enlever le # devant l'id et le transformer en float pour pouvoir le chercher dans ma liste 
  	eleveId = parseFloat(eleveId.substring(1));
  	console.log(typeof eleveId);
  	

  	//	indexOf permet un accès plus rapide, je récupère l'objet
  	var myIndex = dataListe.findIndex(function(i){ return i.id === eleveId });
  	console.log(myIndex);

  	var monEleve=dataListe[myIndex];
  	

    var d=document.getElementById("titre");
    d.innerHTML="Elève "+ eleveId; //+" "+ prenom;

    var contenu = document.getElementById("contenu");
    var pEleve = document.createElement("p");
	// avec pour titre le nom de l'élève
	var identiteEleve = document.createElement("h2");
	identiteEleve.textContent = monEleve.nom + " " + monEleve.prenom;
	// j'ajoute à mon document
	pEleve.appendChild(identiteEleve);
	contenu.appendChild(identiteEleve);
