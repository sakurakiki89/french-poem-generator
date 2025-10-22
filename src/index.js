function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "440893f6bf64c849f9e50botb1a13f91";
  let context =
    "You are a romantic Poem expert and love to write about poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the User instructions. Sign the poem with only: SheCodes AI inside a <strong> element at th end";
  let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);

  poemElement.innerHTML = "La tombe dit a la rose";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
