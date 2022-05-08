const img = document.querySelector("img");

const imgWrapper = document.querySelector("#img-wrapper");

async function getDrake() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=RuMmkRxWKnWWMfN33w68c4pjhKKNd7lh&s=drake",
      { mode: "cors" }
    );
    const drakeData = await response.json();

    img.src = drakeData.data.images.original.url;
  } catch (error) {
    imgWrapper.innerHTML = `Sorry, we couldn't find a suitable GIF of Drake to show you. 
      Go listen to Marvin's Room and then try and refresh the page`;
  }
}

getDrake();
