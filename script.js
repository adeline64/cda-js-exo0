// var nom = "Bordenave";
// console.log(nom);
// console.log(typeof nom);
// if (typeof nom === "string") {
//     alert("le nom est string")
// }

// var prenom = "jean";
// console.log(prenom);
// console.log(typeof prenom);
// if (typeof prenom === "string") {
//     alert("le prenom est string")
// }

// var adresse = "3 rue de la patate 64000 PAU"
// console.log(adresse);
// console.log(typeof adresse);
// if (typeof adresse === "string") {
//     alert("l'adresse est string")
// }

// var age = 30
// console.log(age);
// console.log(typeof age);
// if (typeof age === "string") {
//     alert("l'age est string")
// }

// var telephone = "0630320988"
// console.log(telephone);
// console.log(typeof telephone);
// if (typeof telephone === "string") {
//     alert("le telephone est string")
// }

// var homme = true
// console.log(homme);
// console.log(typeof homme);
// if (typeof homme === "string") {
//     alert("le sexe est string")
// }

// var carnet = [nom, prenom, adresse, age, telephone, homme];
// console.log(carnet);
// console.log(typeof carnet);
// console.log(carnet[0]);

// if (carnet[0] == "string" && carnet[1] == "string" && carnet[2] == "string" && carnet[3] == "string" && carnet[4] == "string" && carnet[5] == "string") {
//     alert("euuuu : tous ne sont pas une chaine de caractère")
//     console.log("test premiere valeur tableau");
// }
// else if(carnet[0] == "string" && carnet[1] == "string" && carnet[2] == "string" && carnet[3] == "number" && carnet[4] == "string" && carnet[5] == "boolean") {
//     alert("réussite : ce ne sont pas tous des string")
// }
// else{
//     alert("test erreur : oh oh soucis")
//     console.log("test erreur");
// }

const annuaire = [["orel", "chirot"], ["Adeline", "Bilibi"], ["Elodie", "truc"], ["janine", "machin"]];

console.log(annuaire);

console.log("prenom et nom de la première personne : " + annuaire[0]);
console.log("prenom de la première personne: " + annuaire[0][0]);
console.log("nom de la première personne: " + annuaire[0][1]);


console.log("prenom et nom de la seconde personne: " + annuaire[1]);
console.log("prenom de la seconde personne: " + annuaire[1][0]);
console.log("nom de la seconde personne: " + annuaire[1][1]);

console.log(annuaire[0][0] + " " + annuaire[0][1] );
console.log(annuaire[1][0] + " " + annuaire[1][1] );

for (let i = 0; i < annuaire.length; i++) {
    console.log("nom et prenom : " + annuaire[i][0] + " " + annuaire[i][1] );
}

for (let j = 0; j < annuaire.length; j++) {
    console.log("liste prenom : " + annuaire[j][0]);

    let prenom = annuaire[j][0]

    if (prenom.length >= 5) {
        console.log("tout les prenoms superieur ou égal à 5 : " + prenom);
        alert("bravo cela fait 5 caractère ou plus")
    }else{
        console.log("dommage");
        alert("dommage c'est raté : ");
    }
}