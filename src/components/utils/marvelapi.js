import { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

//  // Route to marvel api to add character names, pic and id to own database  events 238, 322, 234
export const Marvelapi = () => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const heroUrl = `${process.env.REACT_APP_BASE_URL}/v1/public/events/322/characters`;
      let ts = Date.now().toString();
      let apiKey = process.env.REACT_APP_API_KEY;
      let privateKey = process.env.REACT_APP_PRIVATE_KEY;
      let hash = getHash(ts, privateKey, apiKey);
      let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
      try {
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data.data.results);
        let characters = data.data.results;
        console.log(characters[0].id);
        for (let i = 0; i < characters.length; i++) {
          await fetch("http://localhost:5001/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: characters[i].name,
              image: `${characters[i].thumbnail.path}.jpg`,
              description: characters[i].description,
              marvelID: characters[i].id,
            }),
          });
        }
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchCharacters();
  }, []);

  return;
};

// Route to get variants of character
export const fetchVariants = async (name, setVariants) => {
  const heroUrl = `${process.env.REACT_APP_BASE_URL}/v1/public/characters`;
  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&nameStartsWith=${name}`;
  try {
    const res = await fetch(`${url}`);
    const data = await res.json();
    let picVariants = [];
    for (let i = 0; i < data.data.results.length; i++) {
      if (data.data.results[i].thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        picVariants.push(data.data.results[i]);
      }
    }
    setVariants(picVariants);
    console.log(data.data.results);
  } catch (error) {
    console.log(error);
  }
};

// Route to get description from marvel api using stored id of character from backend

export const fetchDescription = async (name, setDesc, errors, setErrors) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);
  try {
    const charRes = await fetch(`${process.env.REACT_APP_API_URL}/one/${name}`);
    const char = await charRes.json();
    console.log(char);
    const heroUrl = `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}`;
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

// fetch first 100 comics appeared in
export const fetchComics = async (name, errors, setErrors, setComicsAppearedIn, setComicsFiltered) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);
  try {
    const charRes = await fetch(`${process.env.REACT_APP_API_URL}/one/${name}`);
    const char = await charRes.json();
    console.log(char);
    const heroUrl = `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}/comics`;
    console.log(heroUrl);
    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
    const res = await fetch(`${url}`);
    const data = await res.json();
    setComicsAppearedIn(data.data.results);
    setComicsFiltered(data.data.results);
  } catch (error) {
    setErrors("Failed to fetch data");
    console.log(error);
    console.log(errors);
  }
};

// Route to get all characters from backend
export const AllChar = (setAllChar) => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/all`);
        const allCharacters = await res.json();
        allCharacters.characters.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        setAllChar(allCharacters.characters);
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
export const CharComics = (name, input, setComics) => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      let apiKey = process.env.REACT_APP_API_KEY;
      let privateKey = process.env.REACT_APP_PRIVATE_KEY;
      let ts = Date.now().toString();
      let hash = getHash(ts, privateKey, apiKey);
      try {
        const charRes = await fetch(`${process.env.REACT_APP_API_URL}/one/${name}`);
        const char = await charRes.json();
        console.log(char);
        const heroUrl = `${process.env.REACT_APP_BASE_URL}/v1/public/characters/${char.character.marvelID}/comics`;
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

// Route to search for most popular characters
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

// Route to add a favourite character
export const AddFavChar = async (jwt_token, charName) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/addfavourite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        name: charName,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data");
    console.log(error);
  }
};

// Route to remove a favourite character
export const DeleteFavChar = async (jwt_token, charName) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/deletecharacter`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        name: charName,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data");
    console.log(error);
  }
};

// Route to check if character is a favourite
export const CheckIfFavChar = async (name, jwt_token, setIconClicked) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/isfavourite/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "Is not a favourite") {
      setIconClicked(true);
    } else if (data.message === "Is a favourite") {
      setIconClicked(false);
    }
  } catch (error) {
    console.log("Failed to fetch data");
    console.log(error);
  }
};

// Route to get fav characters of user
export const UserFavChar = async (jwt_token, setFavs) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/favourites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setFavs(data.favourites);
  } catch (error) {
    console.log("Failed to fetch data");
    console.log(error);
  }
};
