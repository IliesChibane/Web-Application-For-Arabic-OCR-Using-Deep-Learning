import styled from 'styled-components'
import "../../fonts/Montserrat-Black.ttf"
import "../../fonts/Montserrat-Regular.ttf"


export const ContentContainer = styled.div`
backgroud: gray;
display:flex;
justify-content:center;
align-items:center;
padding:0 25px;
height:800px;
position:relative;
z-index:1;
font-family:"Montserrat-Regular";

`

export const ContentBg = styled.div`
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
width:100%;
height:100%;
overflow:hidden;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
object-fit:cover;
backgroud:black;
opacity:95%;
`

export const ContentInfo = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ContentInfoH1 = styled.h1`
color: white;
font-size:100px;
text-align:center;
font-family:"Montserrat-Black";


@media screen and (max-width:770px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:30px;
}

`


export const ContentInfoP = styled.p`
margin-top:24px;
color:white;
font-size:24px;
text-align:center;
max-width:600px;
@media screen and (max-width:770px){
    font-size:20px;
}
@media screen and (max-width:480px){
    font-size:18px;
}
`