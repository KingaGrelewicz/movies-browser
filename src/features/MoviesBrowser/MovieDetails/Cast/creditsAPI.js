import axios from "axios";

async function getCredits() {
  const APIkey = "b024809636d033af8d3a072db3fe8b5d";
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/693134/credits?api_key=${APIkey}`
  );
  console.log(response.data);
  return response.data;
}

export default getCredits;
