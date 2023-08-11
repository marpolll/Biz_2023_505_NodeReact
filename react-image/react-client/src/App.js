import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModule";
import { BBsContextProvider } from "./provider/BBsProvider";
import Search from "./comps/BBsSearch";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <BBsContextProvider>
        <BBsMain />
      </BBsContextProvider>
    </div>
  );
}

export default App;
