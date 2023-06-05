import React, { useEffect,useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
import axios from "axios";

const Products = ({cat,filters,sort}) => {
  console.log("cat filter sort",cat,filters,sort)
  const [products,setProducts]= useState([]);
  const [filteredProducts,setFilteredProducts]= useState([]);
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`:`http://localhost:5000/api/products`)
        console.log("res",res)
        setProducts(res.data) 
        console.log("some data from res.data",products)
      }catch(err){
        console.log("erreur lors du fetch a partir du serveur")
      }
    }
    getProducts();
  },[cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;


` ;
