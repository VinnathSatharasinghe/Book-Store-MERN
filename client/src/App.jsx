import "./App.css";
import RouterSetup from "./RouterSetup";
import StarsCanvas from "./components/Animation/StarsCanvas";
import NavBar from "./navbar/Navigation";

function App() {
  return (
    <>
      <StarsCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <RouterSetup />
      </div>
    </>
  );
}

export default App;
