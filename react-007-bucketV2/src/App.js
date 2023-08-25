import logo from "./logo.svg";
import logo2 from "./aaaa.png";
import "./css/App.css";
import MainRouterProvider from "./layout/MainRouterProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <MainRouterProvider />
      </section>
    </div>
  );
}

export default App;
