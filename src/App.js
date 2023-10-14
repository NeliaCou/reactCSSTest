import React from 'react';
import style from 'styled-components';

// you can use this example :)
const Test = style.div`
  background: none;
`;

const Ul = style.ul`
display: flex;
justify-content: space-around;
list-style-type: none;
background: #d41f1f;
color: white;
padding: 12px;
`;

const Title = style.h1`
text-align: center;
color: #d41f1f;
font-weight: bold;
margin-top: 3rem;
`;

const Text = style.p`
text-align: right;
font-size: 14px;
margin-top: 5rem;
`
// create the styled component Ul of a ul and apply these rules:  display: flex; list-style-type: none;
// create the styled component Title of an h1 and apply these rules:  text - align: center; color: #d41f1f;

function App() {
  return (
    // replace the html tags below where necessary with the created styled components
    <Test>
      <nav>
        <Ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </Ul>
      </nav>
      <Title>Styled Component!</Title>
      <Text>This is an example of Styled Component</Text>
    </Test>
  );
}

export default App;
