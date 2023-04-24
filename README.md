# NextWeather
## A weather tracker web app made with NextJS

This is a web application for tracking the weather in various locations. The app is built with Next.js, Material UI, SCSS, Axios, WeatherAPI's API, React.js, and TypeScript.

### Features
- View current weather conditions in a selected location
- View a 2-day weather forecast in a selected location
- Search for a location by city name
- Display base location by user's IP address

### Requirements
To run this app locally, you will need to have the following installed on your system:

- Node.js (v14 or later)
- npm package manager (v6 or later)

### Installation

1. Clone this repository

```bash
git clone https://github.com/FelBenini/NextWeather.git
```
2. Install dependencies:
```bash
cd nextweather
npm install
```
3. Set up the environment variables:

Create a .env.local file in the root directory of the project and add the following environment variables:
```makefile
API_KEY=<Your weatherapi key>
PEXELS_API_KEY=<Your pexels api key>
```
Replace API_KEY with your API key from WeatherAPI and the PEXELS_API_KEY with your API key from Pexels.

Start the development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000.

## Acknowledgments

- [Next.js documentation](https://nextjs.org/docs)
- [Material UI documentation](https://mui.com/core/)
- [WeatherAPI documentation](https://www.weatherapi.com/docs/)