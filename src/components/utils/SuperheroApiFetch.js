export const fetchPowerStats = async (name, setPowerStats, setError) => {
  try {
    const response = await fetch(`https://superheroapi.com/api/3502588363312858/search/batman`, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    setPowerStats(data);
  } catch (error) {
    setError("could not fetch data");
    console.log(error);
  }
};
