import axios from "axios";

async function getData(number) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );

  console.log("users " + number, users);
  console.log("post ", posts);
}

getData(1);
