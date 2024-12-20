import './App.css';
import {useEffect, useState} from "react";
import MakeupProducts from "./Components/MakeupProducts";

function App() {

  const checkImageExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const [makeupProducts, setMakeupProducts] = useState();

  useEffect(() => {
    const fetchMakeupProducts = async () => {
      try {
        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const data = await response.json();

        const filteredMakeupProducts = await Promise.all(data.map(async (makeupProduct) => {
          const imgExists = await checkImageExists(makeupProduct.image_link);

          if (imgExists) {
            return {
              name: makeupProduct.name,
              date: makeupProduct.created_at.substring(0, 10),
              img: makeupProduct.image_link
            };
          }
          return null;
        }));

        const validMakeupProducts = filteredMakeupProducts.filter(product => product !== null);

        setMakeupProducts(validMakeupProducts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMakeupProducts()
  }, []);

  return (
    <div className="App">
      <MakeupProducts items={makeupProducts} />
    </div>
  );
}

export default App;
