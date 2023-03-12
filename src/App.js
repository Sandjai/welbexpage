import { BrowserRouter } from "react-router-dom";
import "./App.sass";
import { Content } from "./components/Content/Content";
import { Layer } from "./components/Layer/Layer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layer>
          <Content />
        </Layer>
      </div>
    </BrowserRouter>
  );
}

export default App;
