import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Container = styled.div`
    flex: 1;
    margin: 3px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background-color: #cac3c3; */
    &:hover ${Info}{
      opacity: 1;
    }
`
const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    /* background-color: brown;    */
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
    `
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    z-index: 3;
    transition: all 0.5s linear;
    &:hover{
      transform: scale(1.1);
    }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Circle>
    </Container>
  )
}

export default Product