import React from "react";
import styled from "styled-components";
const Nav=styled.div
            `width: 100%;
            height: 70px;
            background-color: #0093e9;
            background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0; /* Adjust this value as needed */
            z-index: 100; /* Ensure the navbar appears above other content */
`;
const Cartcount =styled.div
`
        background: ${(props)=>props.color}; 
        border-radius:50% ;
        padding:4px 8px;
        position:absolute;
        right:10px;
        top:-5px;
        font-size:12px;
        visibility:${(props)=>props.show ?"visible":"hidden"}
`;
const Title=styled.div`
            font-size: 30px;
            color: #fff;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            margin-left: 20px;

            &:hover {
            color: deepskyblue;
            }
    
`;

class Navbar extends React.Component{
    render()
    {
        const {cartCount}=this.props;
        return(
            <>
            <Nav> 
                <Title>MovieFlix</Title>
                <div style={style.cartIconcontainer}>
                    <img style={style.cartIcon}
                     alt="Cart icon"
                     src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                     <Cartcount color="yellow" show="false">{cartCount}</Cartcount>
                     
                </div>
            </Nav>
            </>
        )
    }
}
const style={
    nav:{
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between" ,
        alignItems: "center",
        position: "relative",
    },
    title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20

    },
    cartCounter:{
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12,
        
    },
    cartIcon:{
        height:48,
        marginRight:20
    },
    cartIconcontainer:{
        position: "relative",
    cursor: "pointer",

    }
}
export default Navbar;
