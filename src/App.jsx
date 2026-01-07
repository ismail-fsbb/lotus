import "./App.css";
import Newsletter from "./components/Newsletter";
import Banner from "./components/Banner";
import PopularGames from "./components/PopularGames";
import DynamicTitle from "./components/DynamicTitle";

function App() {
  return (
    <>
      <DynamicTitle />
      <Banner />
      <PopularGames />
      <Newsletter />
    </>
  );
}

export default App;
