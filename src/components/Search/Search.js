import { useState } from "react";

const Search = () => {

    const [searchCharacter, setSearchCharacter] = useState("");
    const [characters, setCharacters] = useState([]);
    const [favouritesFiltered, setFavouritesFiltered] = useState([]);
    
    const handleChange = (event) => {
        setSearchCharacter(event.target.value);

        const filteredCharacters = characters.filter((character) => {
            return character.name.includes(searchCharacter)
        })

        setSearchCharacter(filteredCharacters)
    }

    return (
        <div>
            <form>
                <input placeholder="Search for a Superhero" onChange={handleChange}></input>
            </form>
            <div>
                {favouritesFiltered && favouritesFiltered.map((favourite, index) => {
                    return <p>{favourite.name}</p>
                })}
            </div>
        </div>
        
    )
}

export default Search;

// const [comicsAppearedIn, setComicsAppearedIn] = useState([]);
// const [comicSearchTerm, setComicSearchTerm] = useState("");
//   const [comicsFiltered, setComicsFiltered] = useState([]);



// const handleChange = (e) => {
//     setComicSearchTerm(e.target.value);

//     const filteredComics = comicsAppearedIn.filter((comic) => {
//       return comic.title.includes(comicSearchTerm);
//     });

//     setComicsFiltered(filteredComics);
//   };


//  <div className="comics-section">
//               <h3>Comics Appeared In</h3>
//               <form>
//                 <input placeholder="search for comics" onChange={handleChange} />
//               </form>
//               <div className="comics">
//                 {comicsFiltered &&
//                   comicsFiltered.map((comic, index) => {
//                     return <p>{comic.title}</p>;
//                   })} 