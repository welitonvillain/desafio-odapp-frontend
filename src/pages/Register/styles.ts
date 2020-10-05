import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px 20px 20px;

    margin: 0 auto;

    height: 100vh;
    max-width: 960px;

    color: var(--text-color-dark);

    h1 {
        font-size: 30px;
        font-weight: 500px;
        margin: 8px 0 ;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    padding: 16px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 760px;
    width: 100%;

    div {
        display: flex;
        height: 40px;
        width: 100%;

        margin-bottom: 10px;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 90px;
            padding: 8px;

            
            border-radius: 8px 0 0 8px;

            font-size: 12px;
            font-weight: 700;

            color: var(--text-color-dark);    
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 160px;
        margin-top: 16px;

        font-weight: 500;
        font-size: 16px;

        border: none;
        border-radius: 8px;

        color: var(--text-color-light);
        background: var(--primary-color);

        transition: background-color 0.2s;

        &:hover {
            background: var(--button-color-hover);
        }
    }

`;