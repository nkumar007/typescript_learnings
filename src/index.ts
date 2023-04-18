// Tuples is a typescript type that is used to store fixed number of values

// example: 1, Naveen

let user: [number, string] = [1, "Naveen"];

// Enums are a new type in Typescript which help us to group a series of constants( works similar to that exists in C# and Java)
// instead of having constants like these..

// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  small = 1,
  Medium = 2,
  Large = 4,
}

let mySize: Size = Size.Medium;

console.log(mySize);
