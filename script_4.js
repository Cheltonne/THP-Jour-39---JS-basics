const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function BornInTheSeventies(array)
{
  for(let index in array)
  {
    if (array[index].year >= 1970 && array[index].year <= 1979)
    {
      console.log(array[index].first + " " + array[index].last);
    } 
  }
}

function FullName(array)
{
  for(let index in array)
  {
    console.log(array[index].first + " " + array[index].last); 
  }
}

function CurrentAge(array)
{
  for(let index in array)
  {
    console.log(array[index].first + " " + array[index].last + ": " + (2020 - array[index].year));
  }
}

function SortAlpha(array)
{
  let SortedNames=[];
  array.forEach(entrepreneur => 
  {
    SortedNames.push(entrepreneur.last + " " + entrepreneur.first);
  });
  return SortedNames.sort();
}

console.log("Liste des entrepreneurs né dans les années 70:");
console.log(BornInTheSeventies(entrepreneurs));
console.log("Prénom et nom des entrepreneurs:");
console.log(FullName(entrepreneurs));
console.log("Quel âge aurait chaque inventeur aujourd\'hui ?" );
CurrentAge(entrepreneurs);
console.log("Les entrepreneurs triés par ordre alphabétique de leur nom de famille: ");
console.log(SortAlpha(entrepreneurs));