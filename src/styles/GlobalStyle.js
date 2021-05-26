import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-light-color: #f2f2f2;
    --border-color: #2e344e;
    --border-dark-color: #2e344e;
    --border-light-color:rgba(48,48,48,05);
    --white-color: #fff;
    --black-color: #000;
    --font-light-color: #a4acc4;
    --background-light-color-2: rgba(3,127,255,.09);
    --background-dark-color-2: rgba(48, 48, 48,.04);
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191d2b;
    /* --sidebar-light-color: #c7c7c7; */
    --sidebar-light-color: #e8e8e8;
    --btn-light-hover: rgba(48, 48, 48, 6);
    --transition-easeInOut-mode: all 1s ease-in-out;
    --transition-btn-easeInOut:all .25s ease-in-out;
    --p-fontSize: 1.8rem;
    --h-small-fontSize: 2rem;
    --h-big-fontSize: 2.5rem;
    /* --h-thin-fontSize: 2.1rem; */
    --shadow-white:rgba(255, 255, 255,.05);
    --shadow-white-hover:rgba(255, 255, 255,.09);
    --shadow-black:rgba(0, 0, 0,.05);
    --shadow-black-hover:rgba(0, 0, 0,.09);
    --h-font:  'Fondamento', cursive;
    --p-font: 'Cabin', sans-serif;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif ;
    
}

h1,h2,h3,h3{
font-family: var(--h-font);
}

p{
    font-family: var(--p-font);
    letter-spacing: 1px;
}

body{
    font-size:10px;

}


`;

export default GlobalStyle;
