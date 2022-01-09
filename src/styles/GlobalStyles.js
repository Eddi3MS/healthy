import { createGlobalStyle } from "styled-components";

// Typography

import "@fontsource/montserrat/600.css";
import "@fontsource/mulish";

const GlobalStyles = createGlobalStyle`

:root {
  --color-title-1: #1D164D;
  --color-title-2: #2D3561;
  --color-text: #9E9BAF;
  
  --focus-color: #BADC58;
  --focus-color-hover: #c0e94a;

  --header-height: 103px;
  --radius: 6px;
}

// RESET \\

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'],
ul {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


body {
  font-family: montserrat, mulish, sans-serif;
  color: var(--color-title-1);
}

.flex {
  display: flex;
}

.mulish__font {
  font-family: mulish, sans-serif;
}

// slider lib \\ 

.rec-arrow-left,
.rec-arrow-right {
  display: none;
}

.rec-dot_active {
  background-color: var(--focus-color) !important;
  box-shadow: 0 0 1px 2px var(--focus-color-hover) !important;
}

.rec-dot {
  &:hover,
  &:focus {
    box-shadow: 0 0 1px 2px var(--focus-color) !important;
  }
}

`;

export default GlobalStyles;
