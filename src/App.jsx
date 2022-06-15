
import './App.css';
import styled from "styled-components";
const Button=styled.button`
height:30px;
margin:20px;

background:${(props)=>(props.backgroundColor?props.backgroundColor:"white")};
border:${(props)=>(props.border)};
border-radius:3px;
color:${(props)=>(props.color)};
cursor:pointer;
text-decoration:${(props)=>(props.textDecoration)}

`;

function App() {
  return (
    <>
    <Button backgroundColor="#3AB0FF" border="transparent">Primary Button</Button>
    <Button border=" 2px solid #EDD2F3">Default Button</Button>
    <Button border=" 1.5px dashed #EDD2F3">Dashed Button</Button>
    <Button border="transparent">Text Button</Button>
    <Button border=" transparent" color="aqua" textDecoration="underline">Link Button</Button>
    </>
  );
}

export default App;
