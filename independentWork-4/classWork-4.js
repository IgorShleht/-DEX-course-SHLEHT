const requestURL = "https://jsonplaceholder.typicode.com/users";

let user = {
  name: "Oleg",
  age: 25
};

const getUser = (method, url) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then((r) => r.json());
};

getUser("POST", requestURL).then((data) => console.log(data));
