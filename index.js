const user = {
  id: 1,
  name: "Ahmed",
};
const key = "id";

console.log(user.id);
console.log(user[key]);

const get = (user, keyToRead) => {
  return user[keyToRead];
};

console.log(get({id: 2, name: "Sam"}, "name"));

const user1 = {
  id:1,
  name: "asss",
  age: 55,
};
const keys = Object.keys(user1);
console.log(keys);


const set = {
  theme: "Dark",
    version: "2.4.1",
    beta: false,
};
const key55 = Object.keys(set);
console.log(key55);

key55.forEach(key => {
  console.log(set[key]);
});

const cou = (course, detail) => {
  return `the cores ${detail} is ${course[detail]}`
};
console.log(cou({id: 1, name: "Learn JavaScript", year: 2021}, "name"));


const per = course => {
  const key = Object.keys(course);
  return key.length;
};
console.log(per({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"}));



const upper = coures => {
  return Object.keys(coures).map(key => key.toUpperCase());
};
console.log(upper({id: 1, name: "Learn JavaScript", year: 2021}));


const log = course => {
  Object.keys(course).forEach(key => {
    console.log(course[key]);
  });
};
console.log(log({id: 1, name: "Learn JavaScript", year: 2021}));

const person = {
  id:55,
  name: "asdfgh",
};

console.log(person.name.toUpperCase());
console.log(`Yes ${person}`);
console.log(`Yes ${person.name}`);

const val = Object.values(person);
console.log(val);

const ent = Object.entries(person);
console.log(ent);


const uii = coures => {
  return Object.values(coures).map(key => key.toUpperCase());
};
console.log(uii({name: "Learn JavaScript"}));