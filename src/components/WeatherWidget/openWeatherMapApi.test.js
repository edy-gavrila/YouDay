import { getWeatherData } from "./openWeatherMapApi";

describe("Function getWeatherData", () => {
  test("Fetches an object", async () => {
    const data = await getWeatherData(
      "https://api.openweathermap.org/data/2.5/find?q=London&appid=da2408219dbf3c8b89c5d76887ef3d01&units=metric"
    );
    expect(data).toBeInstanceOf(Object);
  });
});
