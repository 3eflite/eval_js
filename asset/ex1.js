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

    if (A>=100)
    {
        centenaire++;
    }

}

console.log("Le nombre de de personnes ayant moins de 20 ans est : "+enfants);
console.log("Le nombre de personnes ayant entre 20 et 40 ans est : "+adultes);
console.log("Le nombre de personnes ayant plus de 40 ans est : "+anciens);

document.write("Il y a "+enfants+" personnes de moins de 20 ans.");
document.write(" Il y a "+adultes+" personnes ayant entre 20 et 40 ans.");
document.write(" Il y a "+anciens+" personnes ayant plus de 40 ans.");
document.write(" Il y a également un centenaire.");