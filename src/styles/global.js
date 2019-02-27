import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #6589e6;
        text-rendering: optimizeLegibility !important;
        -webkit-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;
