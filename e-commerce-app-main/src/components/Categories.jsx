import React from 'react'
import styled from 'styled-components'
import { categories } from "../data";
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <Link to="/productslist">
    <Container>
      {categories.map((item)=>{
        return <CategoryItem item = {item} id ={item.id}/>
      })}
    </Container>
    </Link>
  )
}
export default Categories

const Container = styled.div`
  display: flex;
  padding: 2ex;
  justify-content: space-between;
  
`