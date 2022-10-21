import Description from "./components/Description";
import Title from "./components/Title";
import Technologies from "./components/Technologies";
import Hobbies from "./components/Hobbies";
import Profiles from "./components/Profiles";
function App() {
  return (
    <div className="back overflow-auto">
        <Title texto='Daniel Diaz Hernandez'/>
        <Description/>
        <Technologies/>
        <Hobbies/>
        <Profiles/>
    </div>
  );
}

export default App;
