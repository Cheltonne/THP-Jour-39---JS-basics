function bot() 
{
  const input = prompt("Que souhaitez-vous dire à notre ado ?");
  {
    if (input[input.length - 1] == "?")
    {
      console.log('Ouais Ouais...');
    }
    else if (input.match(/\B[A-Z]\b/g) && input !== "")
    { 
      console.log('Pwa, calme-toi...');
    }
    else if (input.split(" ").includes("Fortnite"))
    {
      console.log('on s\'fait une partie soum-soum ?');
    }
    else if (input === "")
    {
      console.log("t\'es en PLS ?");
    }
    else
    {
      console.log("balek.");
    }
  }
}

bot();