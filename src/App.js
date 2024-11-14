import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';




function App() {

  const [count,setCount]=useState(0)

  const addToCart=()=>{
      setCount(1)
  }

  const addCount=()=>{
    setCount(count+1)
  }
  
  const lessCount=()=>{
    setCount(count-1)
  }
  return (
    <div className="App"> 

     <Header count={count}/>
     <ProductList addToCart={addToCart} addCount={addCount} count={count} lessCount={lessCount}/>
    
    </div>
  );
}

export default App;
