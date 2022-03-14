import React from 'react'
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';


export default function ComponentesEstilizados() {
    //interpolacion de valores
    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";
    
    //creamos una funcion para no aplicar la transicion en cad componente, sino llamar a la funcion
    const setTransitionTime = (time) => `all ${time} ease-in-out`;
    
    //animacion keyframe. .... animation ${fadeIN} 4s ease-out
    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    //creamos las propiedades css de mi etiqueta y en vez d poner h3... luego pongo myH3
    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${(props) => props.color};
        color: ${({color}) => color};
        color: ${({color}) => color || "#111"};
        background-color: ${mainColor};
        transition: ${setTransitionTime("1s")};
        animation: ${fadeIn} 4s ease-out;

        ${(props) => props.isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.5rem;
            cursor: pointer;
        `};
        

        &:hover {
            background-color: ${mainAlphaColor80};
        }
    `;
    //colores de fondo y letra que le pasamos a los themeprviders BOX
    const light = {
        color: "#222",
        bgColor: "#DDD"
    };
    const dark = {
        color: "#DDD",
        bgColor: "#222"
    };

    //themeproviders
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;
    //herencia de BOX dentro de Styled(BOX)
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;


    //createGlobalStyle ((hacerlo en App.js para que afecte a toooda la app))
    //AFECTA A TODO TODO TODO en cuanto pones el globalstyle... aunq lo importes en un componente a la APP
    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        };
    `;

    return (
        <>
        <GlobalStyle>
            <h2>Styled-Components</h2>
            <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61afb">Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja ligth</Box>
                <BoxRounded>Soy una caja ligth</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja dark</BoxRounded>
            </ThemeProvider>
        </GlobalStyle>
        </>
    )
}