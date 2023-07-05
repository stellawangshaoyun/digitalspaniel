import "./App.css";
import {
  About,
  Blog,
  Contact,
  Footer,
  Header,
  Services,
  Work,
} from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Work />
      <About /> 
      <Blog />
       <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
