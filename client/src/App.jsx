import "./App.css";
import RouterSetup from "./RouterSetup";
import StarsCanvas from "./components/Animation/StarsCanvas";

function App() {
  return (
    <>
      <StarsCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <RouterSetup />
      </div>
    </>
  );
}

export default App;
