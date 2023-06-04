import React, { useState } from 'react'
import styled from 'styled-components'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import Products from '../components/Products'
import TextBar from '../components/TextBar'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductsList = () => {
  const location = useLocation();
  const cat=location.pathname.split("/")[2];
    console.log(location)
    console.log(cat)
    const [filters,setFilter]=useState({});
    const [sort,setSort]=useState("Newest");
    const handleFilters = (e)=>{
        const value=e.target.value;
        setFilter({
            ...filters,
            [e.target.name]:value}); 
    }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  console.log(filters)
  console.log(sort)
  return (
    <Container>
        <TextBar text ="EXCLUSIVE !!!  buy 10 receive 1 tux for FREE" size="25px"/>
            <Title>Sweats</Title>
            <FilterContainer>
                <Filter  onChange={handleFilters}><FilterText>Filter Products</FilterText>
                    <Select name="color">
                        <Option disabled >Colors</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>blue</Option>
                        <Option>colors</Option>
                    </Select>
                </Filter>
                <Filter ><FilterText>Sorting products</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest" disabled>Newest</Option>
                        <Option value="asc">cheapest first</Option>
                        <Option value="desc">expensive first</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        
    </Container >

  )
}




const Container = styled.div`
`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`

const Filter = styled.div`
margin:20px;

`

const FilterText = styled.span`
    font-weight:400;
    font-size:20px;
    margin-right:20px;

`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
`
const Option = styled.option``



export default ProductsList