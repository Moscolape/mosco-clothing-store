import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div `
    position: absolute;
    width: 300px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        margin-top: auto;
    }

    @media screen and (max-width: 800px) {
        width: 270px;
    }
`

export const EmptyMessage = styled.span `
    font-size: 16px;
    margin: 50px auto;
    font-style: italic;
`

export const CartItems = styled.div `
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
