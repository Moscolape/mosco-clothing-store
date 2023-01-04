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
`;

export const FormContainer = styled.form`
    height: 180px;
    min-width: 500px;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 20px;
`;