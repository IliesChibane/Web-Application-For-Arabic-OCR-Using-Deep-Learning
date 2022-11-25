import styled from 'styled-components'



export const DemoContainer = styled.div`
backgroud: white;
display:block;
justify-content:center;
align-items:center;
padding:0 25px;
height:800px;
position:relative;
z-index:1;
font-family:"Montserrat-Regular";
`
export const DemoH1 = styled.h1`
color: black;
font-size:60px;
text-align:center;
margin-top:15%;
font-family:"Montserrat-Black";


@media screen and (max-width:770px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:30px;
}

`
export const DemoManipulation = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`


export const DemoResults = styled.div`
color:gray;
`

export const Input = styled.div`
padding: 5rem;
margin: 2em;
color: white;
background: black;
border: dashed;
border-radius: 30px;
font-size:30px;
width:400px;
@media screen and (max-width:770px){
  width:100px;
  font-size:20px;
}
@media screen and (max-width:480px){
width:50px;
font-size:12px;
}
`;

export const Test = styled.button`
padding: 15px 30px;
color: black;
font-size: 14px;
font-weight: 700;
background-color: ${({ theme }) => theme.color1};
border: 1px solid;
border-radius: 25px;
appearance: none;
cursor: pointer;
margin:20px ;
`;