
import { useEffect, useState } from "react";
import Card from "./productCard.jsx"
import { getProizvod, deleteProizvod } from "../data/api.jsx";

function ProductSection() {
  let [products, setProducts] = useState([]);
  let [isChecked, setIsChecked] = useState(false);
       
  useEffect(() =>{
    async function ucitaj() {
        const products = await getProizvod();
        setProducts(products);
    }
    
    
    ucitaj();
  }, [])
  async function filterArr(e){
  if(e.target.type === "text")
   { 
      if(e.target.value === "")
      setProducts(await getProizvod());
      else if(products.filter(element => element.title.includes(e.target.value)).length === 0){
      setProducts(await getProizvod());
      }
      else{
      setProducts(products.filter(element => element.title.includes(e.target.value)));
      }}
  else if(e.target.type === "checkbox")
  {
    if(isChecked === true)
    {
      setProducts(await getProizvod());
      setIsChecked(false);
    }
    else{
      setProducts(products.filter(element => element.rating >= 4.0));
      setIsChecked(true);
    }
  }
  }  
  function deleteFromArray(id){
    setProducts (products.filter(element => element.id != id));
  }
  return (
    <section>
      <h2>Proizvodi</h2>
      <div className="search">
        <input type="text" id="title" placeholder="Enter your title" onChange={filterArr}></input>
        <label htmlFor="check"><input type="checkbox" onChange={filterArr}></input>Show products with higher rating than 4</label>
      </div>
      <div className="cardWrapper">
            {products.map((product) => {
               return <Card key={product.id} proizvod={product} onDelete={deleteProizvod} deleteFrom={deleteFromArray}/>
              })}
      </div>
    </section>
  );
}

export default ProductSection
