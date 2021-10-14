
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [state, setState] = useState([]);
  const [names, setNames] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);
    
  // i know this works, it gets the API when the page renders
useEffect(() => {
  async function getProducts(){
    const res = await fetch("http://52.26.193.201:3000/products/list")
    const data = await res.json()
    setState([data])
    const namesUrl = await data[0].name
    setNames([nameUrl])
  }
  getProducts()
})

//could make a counter that when counted triggers getGivenProduct
useEffect(()=>{
  async function getGivenProduct(){
    const ress = await fetch(`http://52.26.193.201:3000/products/${givenProduct.id}`)
    // i think ${givenProduct.id} will be from a button click but i have no clue how to implent that
    const productData = await ress.json()
    const ImageUrl = await productData.results[0].photos[0].thumbnail_url
    const priceUrl = await productData.results[0].original_price
    setImage([ImageUrl]);
    setPrice([priceUrl]);
  }
})

  }



// tryin to figure out the HTML Button 
//<button onClick={(e) => getGvenProduct(e)}>Cat</button>
  return (
    <div className="App">
      <header className="App-header">
      
    
       
      </header>
    </div>
  );
}


export default App;
