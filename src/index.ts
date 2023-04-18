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

// functions in Typescript

function calculateTax(income: number, taxYear = 2022): number {
  let y;

  if (taxYear > 2022) return income * 1.2;
  return income * 1.3;
}

// Objects, unlike in Javascript where objects can be changed throughout their life time. We need to design our objects explicitely in Typescript

let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Naveen",
  retire: (date: Date) => console.log(date),
};
