//Extract the last four characters from the string below;
//"extravaganza"
const strings = "extravaganza";
var a = ("extravaganza"[8]);
console.log(a);
var b = ("extravaganza"[9]);
console.log(b);
var c = ("extravaganza"[10]);
console.log(c);
var d = ("extravaganza"[11]);
console.log(d);

//Insert the following string at the fourth index of the below variable:
//"eat"
//const food = "The quick fox jumped over the lazy dog"
const t="eat"
const food =`The quick fox  ${t} over the lazy dog`
console.log(food)



//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
//const story= "The quick brown fox jumps over the lazy dog"
const story ="The quick brown fox jumps over the lazy dog";
let count =(story.match(/the/g)||[]).length
console.log(count);
let count2 =(story.match(/brown/g||[])).length
console.log(count2);


//Using JavaScript, find the following words from the following strings:
//1. "are"
//const string1 = "The pupils are reading in the library";
const string1 ="The pupils are reading in the library";
let position=(string1.search("are"));
console.log(position)
//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const string2 = "The child was sitting on the table before it fell";
let positions=(string2.search("sitting"));
console.log(positions)





//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "UndERneath"
//3. Title case "A wonderful world"
const d ="wonderful"
const f =d.toUpperCase()
console.log(f);
const g ="amazing"
const j =g.toLowerCase()
console.log(j);
const c ="undERneath"
const e =c.toLowerCase()
console.log(e);
const w ="A wonderful world"
const v =w.toLocaleUpperCase()
console.log(v);


