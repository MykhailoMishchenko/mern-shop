import bcrypt from "bcryptjs";

const users = [
  {
    name: "Michael",
    email: "mishchenko.mykhailo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "John",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
  },
  {
    name: "Jane",
    email: "jane@icloud.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
  }
];

export default users;