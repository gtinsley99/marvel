import { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString();
};

const Marvelapi = (setData) => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
        const heroUrl= `${process.env.REACT_APP_BASE_URL}/v1/public/characters`;
        let ts = Date.now().toString();
        let apiKey = process.env.REACT_APP_API_KEY;
        let privateKey = process.env.REACT_APP_PRIVATE_KEY;
        let hash = getHash(ts, privateKey, apiKey);
        let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
      try {
        const res1 = await fetch(`${url}&offset=0`);
        const data1 = await res1.json();
        console.log(data1);
        const res2 = await fetch(`${url}&offset=100`);
        const data2 = await res2.json();
        console.log(data2);
        const res3 = await fetch(`${url}&offset=200`);
        const data3 = await res3.json();
        console.log(data3);
        const res4 = await fetch(`${url}&offset=300`);
        const data4 = await res4.json();
        console.log(data4);
        const res5 = await fetch(`${url}&offset=400`);
        const data5 = await res5.json();
        console.log(data5);
        const res6 = await fetch(`${url}&offset=500`);
        const data6 = await res6.json();
        console.log(data6);
        const res7 = await fetch(`${url}&offset=600`);
        const data7 = await res7.json();
        console.log(data7);
        const res8 = await fetch(`${url}&offset=700`);
        const data8 = await res8.json();
        console.log(data8);
        const res9 = await fetch(`${url}&offset=800`);
        const data9 = await res9.json();
        console.log(data9);
        const res10 = await fetch(`${url}&offset=900`);
        const data10 = await res10.json();
        console.log(data10);
        const res11 = await fetch(`${url}&offset=1000`);
        const data11 = await res11.json();
        console.log(data11);
        const res12 = await fetch(`${url}&offset=1100`);
        const data12 = await res12.json();
        console.log(data12);
        const res13 = await fetch(`${url}&offset=1200`);
        const data13 = await res13.json();
        console.log(data13);
        const res14 = await fetch(`${url}&offset=1300`);
        const data14 = await res14.json();
        console.log(data14);
        const res15 = await fetch(`${url}&offset=1400`);
        const data15 = await res15.json();
        console.log(data15);
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


export default Marvelapi;