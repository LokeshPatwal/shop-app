import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    padding: 30px;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex:1;
`
const Center = styled.div`
    flex:1; 
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div` 
    flex:1;
    ${mobile({ margin: "20px 0px" })}
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Soppy.</Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta necessitatibus sunt numquam culpa eveniet quisquam consequuntur corrupti doloribus illo consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, quaerat?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />E - 444, Sector 11, Ghaziabad, Uttar Pradesh
                </ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />+1 234 567 89</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} />Contact@World.project</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer