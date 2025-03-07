import { Banner } from "./Components/Banner/Banner";
import { Calculate } from "./Components/Calculate/Calculate";
import { Family } from "./Components/Family/Family";
import { Header } from "./Components/Header/Header";
import { JoinUs } from "./Components/JoinUs/JoinUs";
import { Location } from "./Components/Location/Location";
import { Motivation } from "./Components/Motivation/Motivation";
import { TrainingTypes } from "./Components/Training-types/Training-types";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Kropp Fitness Club</h1>
      <main >
        <Banner />
        <Motivation />
        <TrainingTypes />
        <JoinUs/>
        <Location />
        <Family />
        <Calculate />
      </main>
      <Footer />
    </>
  );
}

export default App;
