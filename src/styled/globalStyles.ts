import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *,
    *::after,
    *::before {
        margin: 0;    
        padding: 0;        
        box-sizing: border-box;      
    }

    html {
        font-size: 62.5%;    
    }

    body {        
        line-height: 1.3;
        overflow-x: hidden;
        color: ${({ theme }) => theme.black};                
        font-size: ${({ theme }) => theme.fontSize.xl};

        ${({ theme }) => theme.media.phone} {
            font-size: ${({ theme }) => theme.fontSize.lg}
        }        
    }

    a {
        //display: inline-block;
        text-decoration: none;
        position: relative;
        transition: ${({ theme }) => theme.transition.normal};
    }

    button {
        cursor: pointer;
        border: 0rem;
        border-radius: 0rem;        
    }

    section {
        margin: 0 auto;
        padding: 10rem 0;
        max-width: 1000px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1rem;
        font-weight: bold;        
        line-height: 1.1;
    }

    p {
        margin: 0 0 1.1rem;
    }
`;

export default GlobalStyle;
