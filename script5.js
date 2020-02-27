const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function HasBeenRented(array)
{
  for (i = 0; i < array.length; i++)
  {
     if(array[i].rented > 0)
     {
       continue;  
     }
     else
     {
       return false;
     }  
  };
}

if((HasBeenRented(books)) == false)
{
  console.log("Non.");
}
else
{
  console.log("Oui.");
}

function MostRented(array)
{
  most_rented = array[0]
  for (i = 0; i < array.length; i++)
  {
      if (array[i].rented > most_rented.rented)
      {
          most_rented = array[i];
      }
  }
  return most_rented
}

console.log(MostRented(books));

function LeastRented(array)
{
  least_rented = array[0]
  for (i = 0; i < array.length; i++) 
  {
      if (array[i].rented < least_rented.rented) 
      {
          least_rented = array[i];
      }
  }
  return least_rented 
}

console.log(LeastRented(books));

function FindIndX(array)
{
  const found = array.find(element => element.id == 873495);
  console.log(found);
}

FindIndX(books);

function DeleteBook(array)
{
  const found = array.find(element => element.id == 133712);
  array.splice(found, 1);
  return array;
}

console.log(DeleteBook(books));

function SortBooks(array)
{
  array.sort((a, b) => a.title.localeCompare(b.title))
  return array;
}

console.log(SortBooks(books));