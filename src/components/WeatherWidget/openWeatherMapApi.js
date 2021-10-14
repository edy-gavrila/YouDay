const getWeatherData = async (url) => {
  try {
    const weatherData = await fetch(url);
    const jsonData = await weatherData.json();
    return jsonData;
  } catch (error) {
    return { error: error };
  }
};

export const getCityWeatherData = async (city, countryCode = "") => {
  const data = await getWeatherData(
    `https://api.openweathermap.org/data/2.5/find?q=${city},${countryCode}&appid=da2408219dbf3c8b89c5d76887ef3d01&units=metric`
  );
  return data;
};

export const getCityForecastWeatherData = async (city) => {
  const data = await getWeatherData(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&appid=da2408219dbf3c8b89c5d76887ef3d01&units=metric`
  );
  return data;
};
