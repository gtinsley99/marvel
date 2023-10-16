export const fetchPowerStats = async (id, setPowerStats, setError) => {
  try {
    const response = await fetch(`https://akabab.github.io/superhero-api/api/powerstats/${id}.json`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`data for powerstats: ${data}`);
    setPowerStats(data);
  } catch (error) {
    setError("could not fetch data");
    console.log(error);
  }
};
