import React from 'react'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Search } from "@mui/icons-material";
import { FavoriteBorder } from '@material-ui/icons';
import styled from 'styled-components';


const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Img src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product

const Container = styled.div`
  flex:1;
  margin: 5ex;
  min-width: 280px;
  min-height: 280px;
  height: 350px;
` ;

const Circle = styled.div`
  
`
const Img = styled.img`
  height: 75%;
`

const Info = styled.div`
  
`

const Icon = styled.div`
  
`