function cortex(floors){ 
  for(let count = floors; count != 0; count--){
    console.log(" ".repeat(count - 1) + "#".repeat(floors - (count - 1)));
  }
}

UserInput = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if(!parseInt(UserInput)){
  console.log("dsl, il faut mettre un nombre frere, essaie de rafraichir la page.");
}else{
    console.log(cortex(UserInput));
  }