import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;

    img{
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button{
        color: #FFFFFF;
        background-color: #B22222;
        border: none;
        border-radius: 5px;
        margin-bottom: 5px;
        cursor: pointer;

        &:hover{
            opacity: .8;
        }
    }
`