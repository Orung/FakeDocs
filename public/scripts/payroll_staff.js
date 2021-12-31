((_) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  localStorage.setItem("userToken", token);

  document.addEventListener("DOMContentLoaded", (_) => {
    function setOpt(selector, text, value) {
      let node = document.querySelector(selector);
      let opt = document.createElement("option");
      opt.text = text;
      opt.value = value;
      node.add(opt);
      return false;
    }

    function T(t) {
      let now = new Date();
      let time;
      switch (t.toLowerCase()) {
        case "m":
          time = now.getMonth() + 1;
          break;
        case "d":
          time = now.getDate();
          break;
        case "y":
          time = now.getFullYear();
          break;
        default:
          break;
      }
      return time;
    }
    for (let i = 1990; i <= T("y"); i++) {
      setOpt("#cboYear", i, i);
    }

    function postData(e) {
      e.preventDefault();
      console.log(e.target.month.value);

      try {
        const data = {
          month: e.target.month.value,
          year: e.target.year.value,
          cost: e.target.amount.value,
          message: e.target.message.value,
        };
        const token = localStorage.getItem("userToken");
        console.log(token);
        fetch("https://reqres.in/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (e) {
        console.error(e);
      }
    }
    document
      .querySelector("#payroll_form")
      .addEventListener("submit", postData);
  });
  
})();
