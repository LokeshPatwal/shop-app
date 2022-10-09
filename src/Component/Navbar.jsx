import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    width: 100%;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex:1; 
    display: flex;
    align-items: center;    
`
const Center = styled.div`
    flex:1;
    text-decoration: none;
 `
const Language = styled.span`
    font-size: 16px;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid grey;
    display: flex;
    align-items: center;
    margin: 25px;
    padding: 5px;
    `
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    `
const Logo = styled.h1`
    text-align : center;
    ${mobile({ fontSize: "24px" })}
    `
const Right = styled.div`
        flex:1; 
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${mobile({ justifyContent: "center", flex: 2 })}
    `
const Menuitem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 20px;
    ${mobile({ fontSize: "12px", margin: "0 5px" })}
`
const NavigationLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;
/* ...........................................................................*/

const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <i class="fa-solid fa-magnifying-glass" style={{ color: "gray" }}></i>
                        </SearchContainer>
                    </Left>
                    <Center><Logo><NavigationLink to="/">Organico</NavigationLink></Logo></Center>
                    <Right>
                        <Menuitem><NavigationLink to="/register">Register</NavigationLink></Menuitem>
                        <Menuitem><NavigationLink to="/login">Sign In</NavigationLink></Menuitem>
                        <Menuitem>
                            <Badge badgeContent={4} color="primary">
                                <NavigationLink to="/cart">
                                    <ShoppingCartOutlined />
                                </NavigationLink>
                            </Badge>
                        </Menuitem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar