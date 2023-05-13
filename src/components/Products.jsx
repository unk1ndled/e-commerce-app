import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;


` ;
