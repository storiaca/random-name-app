const loadRandomName = (resultDiv) => {
  fetch("http://localhost:3344/random-name")
    .then((response) => response.json())
    .then((result) => {
      resultDiv.innerHtml = `<h2>${result.first_name} ${result.last_name}</h2>`;
    });
};
