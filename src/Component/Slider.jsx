import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { sliderItems } from './Data'
import { mobile } from '../Responsive'

const Container = styled.div`
    background-color: yellow;
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #a19e9e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.4;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideNumber * -100}vw);
`
const Slide = styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ImgContainer = styled.div`
    padding: 50px;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
     height: 100vh;
     width: 100vw;
`
const InfoContainer = styled.div`
     position: absolute;
     width: 100vw;
     padding: 50px;
     color: white;
     z-index: 3;
`
const Title = styled.h1`
     font-size: 70px;`
const Description = styled.p`
     margin: 50px 0px;
     font-size: 20px;
     font-weight: 500;
     letter-spacing: 3px; `
const Button = styled.button`
     color: white;
     border: white;
     padding: 10px;
     font-size: 20px;
     background-color: transparent;
     cursor: pointer;
`
const Slider = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideNumber(slideNumber > 0 ? slideNumber - 1 : 2);
        } else {
            setSlideNumber(slideNumber < 2 ? slideNumber + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideNumber={slideNumber}>
                {
                    sliderItems.map((item) => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                            </InfoContainer>
                        </Slide>
                    )
                    )
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;