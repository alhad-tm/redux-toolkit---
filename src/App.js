import logo from "./logo.svg";
import "./App.css";

import {ProductList,Header} from "./components";


function App() {
  return ( 
    <div className="App">
      <Header />
      <ProductList /> 
    </div>
  );
}

export default App;
