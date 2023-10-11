import { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString();
};

//  // Route to marvel api to add character names, pic and id to own database
// const Marvelapi = (setData) => {
//   const [errors, setErrors] = useState(null);
  
//   useEffect(() => {
//     const fetchCharacters = async () => {
//         const heroUrl= `${process.env.REACT_APP_BASE_URL}/v1/public/events/238/characters`;
//         let ts = Date.now().toString();
//         let apiKey = process.env.REACT_APP_API_KEY;
//         let privateKey = process.env.REACT_APP_PRIVATE_KEY;
//         let hash = getHash(ts, privateKey, apiKey);
//         let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
//       try {
//         const res = await fetch(`${url}`);
//         const data = await res.json();
//         console.log(data.data.results);
//         setData(data.data.results);
//         let characters = data.data.results;
//         console.log(characters[0].id);
//         for (let i = 0; i<characters.length; i++){
//         await fetch("http://localhost:5001/add", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: characters[i].name,
//             image: `${characters[i].thumbnail.path}.jpg`,
//             description: characters[i].description,
//             marvelID: characters[i].id,
//           }),
//         })};
//       } catch (error) {
//         setErrors("Failed to fetch data");
//         console.log(error);
//         console.log(errors);
//       }
//     };
//     fetchCharacters();
//   }, []);

//   return;
// };


export default Marvelapi;