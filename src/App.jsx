import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import "./App.css";

const App = () => {

  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      // console.log(data);
      const itemList = await data.json();
      setItem(itemList);
      console.log(itemList);
      setLoading(false);

    } catch {
      (err) => {
        setLoading(false);
        return console.log(err)
      }
    }
  }

  // fetchItem()

  return (
    <>
      <h1>Online Store 🛍️</h1>
      <div>

        {
          loading

            ?

            <h2>please wait...</h2>

            :

            <div id='goodsContainer'>
              {
                item.map((goods) => {
                  return (
                    <Products key={goods.id} image={goods.image} title={goods.title} price={goods.price} category={goods.category} />
                  )
                })
              }
            </div>
        }

      </div>
    </>
  )
};

export default App;
