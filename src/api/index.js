import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableurl = url;
  console.log(country);
  if(country && country!=='global'){
    changeableurl = `${url}/countries/${country}`;
  }
  try{

      const { data } = await axios.get(changeableurl);
      
      const modifiedData = {
          confirmed: data.confirmed,
          recovered:  data.recovered,
          deaths:     data.deaths,
          lastUpdate: data.lastUpdate,
      }
      return modifiedData;

  } catch(error){
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async() => {
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch(error){
        console.log(error);
    }
}