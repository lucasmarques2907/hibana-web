import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
