import { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString();
};

//  // Route to marvel api to add character names, pic and id to own database  events 238, 322, 234
// export const Marvelapi = () => {
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



// Route to get description from marvel api using stored id of character from backend
  export const CharDesc = (name, setDesc) => {
  const [errors, setErrors] = useState(null);
  const [charData, setCharData] = useState("");
  
  useEffect(() => {
    const fetchCharacter = async () => {
      let apiKey = process.env.REACT_APP_API_KEY;
      let privateKey = process.env.REACT_APP_PRIVATE_KEY;
      let ts = Date.now().toString();
      let hash = getHash(ts, privateKey, apiKey);
      try {
        const charRes = await fetch(`${process.env.REACT_APP_API}/one/${name}`);
        const char = await charRes.json();
        setCharData(char)
        console.log(char)
        const heroUrl= `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}`;
        let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=1`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data.data.results[0]);
        console.log(data.data.results[0].description);
        setDesc(data.data.results[0].description);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchCharacter();
  }, []);

  return;
};

// Route to get all characters from backend
export const AllChar = (setAllChar) => {
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}/all`);
        const allCharacters = await res.json();
        setAllChar(allCharacters.characters)
        console.log(allCharacters);
        console.log(allCharacters.characters);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchAllCharacters();
  }, []);

  return;
};

// Route to search for comics with character from marvel api using stored id of character from backend- title and image
export const CharComics = (name, input ,setComics) => {
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    const fetchComics = async () => {
      let apiKey = process.env.REACT_APP_API_KEY;
      let privateKey = process.env.REACT_APP_PRIVATE_KEY;
      let ts = Date.now().toString();
      let hash = getHash(ts, privateKey, apiKey);
      try {
        const charRes = await fetch(`${process.env.REACT_APP_API}/one/${name}`);
        const char = await charRes.json();
        console.log(char);
        const heroUrl= `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}/comics`;
        let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=20&titleStartsWith=${input}`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data.data.results);
        setComics(data.data.results);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchComics();
  }, []);

  return;
};

// Route to search for series with character from marvel api using stored id of character from backend - title, description, thumbnail(path.jpg) image
export const CharSeries = (name, input ,setSeries) => {
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    const fetchSeries = async () => {
      let apiKey = process.env.REACT_APP_API_KEY;
      let privateKey = process.env.REACT_APP_PRIVATE_KEY;
      let ts = Date.now().toString();
      let hash = getHash(ts, privateKey, apiKey);
      try {
        const charRes = await fetch(`${process.env.REACT_APP_API}/one/${name}`);
        const char = await charRes.json();
        console.log(char);
        const heroUrl= `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}/series`;
        let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=20&titleStartsWith=${input}`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data.data.results);
        setSeries(data.data.results);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchSeries();
  }, []);

  return;
};

// Route to search for series with character from marvel api using stored id of character from backend - title, description, thumbnail(path.jpg) image
export const PopChar = (setPop) => {
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    const fetchPop = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}/popular`);
        const data = await res.json();
        console.log(data);
        console.log(data.characters);
        setPop(data.characters);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchPop();
  }, []);

  return;
};