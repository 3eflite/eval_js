let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


document.getElementById("tab").innerHTML = tab;

let prenom = prompt("Prenom");

let i = tab.indexOf(prenom);
if (i > -1) {
    tab.splice(i ,1);
    tab.push(' ');

}
document.getElementById("resultat").innerHTML = tab;