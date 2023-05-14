import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import Products from '../components/Products'
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

const ProductsList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>Colors</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>blue</Option>
                        <Option>colors</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sorting products</FilterText>
                    <Select>
                        <Option selected disabled>Newest</Option>
                        <Option>cheapest first</Option>
                        <Option>expensive first</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        
    </Container >

  )
}

export default ProductsList