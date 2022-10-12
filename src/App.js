import Description from "./components/Description";
import Title from "./components/Title";
import Technologies from "./components/Technologies";
import Hobbies from "./components/Hobbies";
function App() {
  return (
    <div className="back overflow-auto">
        <Title texto='Daniel Diaz Hernandez'/>
        <Description/>
        <Technologies/>
        <Hobbies/>
    </div>
  );
}

export default App;
