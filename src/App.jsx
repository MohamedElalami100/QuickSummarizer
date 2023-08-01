import Hero from "./components/Hero";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Form />
      </div>
    </main>
  );
};

export default App;
