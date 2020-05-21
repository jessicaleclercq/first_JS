
// Un prompt s'affiche avec la question suivante
number = prompt("De quel nombre veux-tu calculer la factorielle ?");


function factorielle(number) 
{ 
if (number<0) { 
alert ("Veuillez Saisir un entier positif ou null"); 
return "### Erreur ###"; 
} 
else { 
if (number == 0) { 
return 1; 
} 
else { 
return number * factorielle (number-1); 
} 
} 
} 
console.log(`Le résultat est : ${factorielle(number)}`);


