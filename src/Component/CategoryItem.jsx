import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 65vh;
    position: relative;
    opacity: 0.6;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const InfoCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <InfoCont>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </InfoCont>
        </Container>
    )
}

export default CategoryItem