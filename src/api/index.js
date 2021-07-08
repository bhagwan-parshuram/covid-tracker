import axios from "axios";

const url = "https://covid19.mathdro.id/api";
// const url = "https://www.google.com";

//learn about asyn javascript

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      date: dailyData.reportDate,
      deaths: dailyData.deaths.total,
      confirmed: dailyData.confirmed.total,
    }));
    return modifiedData;
  } catch (error) {}
};

export const countries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  try {
    return countries.map((countryName) => countryName.name);
  } catch (error) {}
};
