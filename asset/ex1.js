let A=0;
let enfants=0;
let adultes=0;
let anciens=0;
let centenaire=0;

while (A < 100)
{
    A=parseInt(prompt("Insérez l'âge de la personne"));
    if (A<20)
    {
        enfants++;
    }
    else if (A>=20 && A<=40)
    {
        adultes++;
    }
    else if (A>40)
    {
        anciens++;
    }

}

console.log("Le nombre d'enfants est : "+enfants);
console.log("Le nombre d'adultes est : "+adultes);
console.log("Le nombre d'anciens' : "+anciens);
age = parseInt(prompt("Saisissez votre age, rentrez un centenaire pour arrêter la saisie"));



if ( age >= 100) {
    centenaire++;
}

document.write("Il y a "+enfants+" personnes de moins de 20 ans.");
document.write(" Il y a "+adultes+" personnes ayant entre 20 et 40 ans.");
document.write(" Il y a "+anciens+" personnes ayant plus de 40 ans.");
document.write(" Il y a "+centenaire+" qui est centenaire.");