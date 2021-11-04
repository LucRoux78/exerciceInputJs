function testerLeNombre() {
    //let nombreSaisi = 15;
    let nombre = nombreSaisi.value; //Depuis EC5 on peut mettre l'Id dans une variable.
    let valeurCourante = 0;
    while (valeurCourante <= nombre) {
        console.log(valeurCourante);
        valeurCourante++;
    }
    console.log("Fin de l'affichage");
}
document.getElementById("monBouton").addEventListener("click", testerLeNombre);
