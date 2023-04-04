import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    padding: 25px;
    margin-top: 30px;
    border: 1px solid black;

    @media screen and (max-width: 800px) {
        height: 180px;
        width: 100%;
        padding: 10px;
        align-items: unset;
    }
`;

export const FormContainer = styled.form`
    height: 180px;
    min-width: 500px;

    @media screen and (max-width: 800px) {
        min-width: unset;

        h2 {
            font-size: 20px;
        }
    }
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 20px;
`;