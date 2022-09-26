import Description from "./components/Description";
import Title from "./components/Title";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div className="back overflow-auto">
        <Title texto='Daniel Diaz Hernandez'/>
        <Description/>
        <Technologies/>
    </div>
  );
}

export default App;
