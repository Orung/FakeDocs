document.querySelector("#patientsAjaxSearch").addEventListener("input", (e) => {
  const val = e.target.value;
  //   console.clear();
  searchPerson(val);
});

async function searchPerson(name) {
  const url = "../seed/users.json";

  const res = await fetch(url);
  const data = await res.json();
  const ul = document.createElement("ul");
  for (let person of data.people) {
    const { firstName, lastName, patientID, profileURL } = person;

    console.log(person);

    let fullName = firstName.concat(" ", lastName);

    if (fullName.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = profileURL;
      a.textContent = fullName + " ==> " + patientID;
      li.append(a);
      ul.appendChild(li);
      if (name.length > 0)
        document.querySelector(".patient_list").innerHTML = ul.innerHTML;
      else document.querySelector(".patient_list").innerHTML = "";
    }
    //   console.log(fullName, "==>", patientID);
  }
}
