// méthode classlist.toggle :au clic élément est caché

document.querySelector("#like").onclick = function () {
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};

//gestion du click sur l'élément #bouttonInfo : au clic l'élément exécute la fonction classlist.toggle hidden

document.querySelector('#buttonInfo').onclick = function () { //qd élément #buttonInfo est cliqué , la fonction est associée
    let div = document.querySelector("#closeInfo"); //sélectionne l'élément #closeInfo et le stocke dans la variable div
    div.classList.toggle("hidden"); //méthode classList.toggle("hidden") est utilisée pr ajouter/supprimer la classe hidden de l'élément div
    div.animate( //méthode invoquée pour démarrer une animation sur l'élément div
        [
            //tableau d'objets représentant les étapes de l'animation
            { transform: 'translateY(100%' }, //élément div se déplace de 100% vers le bas
            { transform: 'translateY(-20%' }, //Ajout d'un effet rebond
            { transform: 'translateY(0' }, //retour à la position d'origine
        ],
        {  //options de l'animation
            duration: 2000,
            iterations: 1 //l'animation ne se répétera qu'une seule fois
        }
    )

}

document.querySelector('#closedArrow').onclick = function () { //au clic sur l'élément #closedArrow la fonction est exécutée : bascule présence classe CSS hidden sur l'élément
    document.querySelector('#closeInfo').classList.toggle("hidden"); 
}
