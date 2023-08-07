import React from "react";
import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "904a27a89e7ee9c6fa66788b54d4961c";

const getweather = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getweather;
