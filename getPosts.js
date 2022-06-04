import axios from "axios";

async function getData(number) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + number
  );

  console.log("users "+ number, users);
  console.log("post " + number, posts);
}

getData(1);
