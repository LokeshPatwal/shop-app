import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    height: 70vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({minWidth: "75vw"})}
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
   
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "Center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "75%" })}
`
const Input = styled.input`
    flex: 8;
    border:none;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get Timely Updates from your favourite products</Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter