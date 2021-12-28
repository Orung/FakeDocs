const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

localStorage.getItem("userToken", token);

function getUserInfo(data) {
  const users = data.data;

  console.log(users[0]);
}
fetch("https://reqres.in/api/users", {
  method: "GET",
  headers: { Authorization: token },
})
  .then((response) => response.json())
  .then((data) => {
    getUserInfo(data);
  });
