const proteins = [
{name: "Sérine", arn: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]},
{name: "Proline", arn: ["CCU", "CCC", "CCA", "CCG"]},
{name: "Leucine",arn: ["UUA", "UUG"]},
{name: "Phénylalanine", arn: ["UUU", "UUC"]},
{name: "Arginine", arn: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]},
{name: "Tyrosine", arn: ["UAU", "UAC"]},
];

function Decoder(string)
{
  string = string.match(/.{1,3}/g);
  string = string.join("-");
  string = string.split("-");
  let decoded = [];
  for (i = 0; i < string.length; i++) 
    {
      proteins.forEach(element => 
      {
       if (element.arn.includes(string[i]))
       {
         decoded.push(element.name);
       }
      });
    };
  return decoded.join("-");
}

console.log(Decoder("CCGUCGUUGCGCUACAGC"));
console.log(Decoder("CCUCGCCGGUACUUCUCG"));