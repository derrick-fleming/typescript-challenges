let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.name > b.name ? 1 : -1);

export default function byField(key: string) {
  return function (a: any, b: any) {
    return a[key] > b[key] ? 1 : -1
  }
}
