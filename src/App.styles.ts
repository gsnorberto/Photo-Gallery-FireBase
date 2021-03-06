import styled from "styled-components";



export const Container = styled.div`
    background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#27282f'};
    color: #FFFFFF;
    min-height: 100vh;

    &:header{
        
    }
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    color: ${props => props.theme === 'light' ? '#000000' : '#FFFFFF'};
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        color: #FFFFFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover{
            opacity: .8;
        }
    }
`

export const Button = styled.button`
    width: 100px;
`;

export const ThemeArea = styled.div`
    display: flex;
    justify-content: flex-end;
`;