import logo from "./logo.svg";
import "./App.css";
import profile from "./image/adi photo.png";
import piala from "./image/Piala.png";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourtSection";

function App() {
  return (
    <div>
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </div>
  );
}

export default App;
