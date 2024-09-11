function showPresident(response) {
  alert(response.data.answer);
}

let apiKey = "3t4aaf46b1o5b1534f3e944eb00eb10d";
let context = "provide a very short answer and make sure to pick one";
let prompt = "who was the first female president in the world";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("apiUrl");
axios.get(apiUrl).then(showPresident);
