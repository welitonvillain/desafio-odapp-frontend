import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: 1;

    input {
        width: 100%;
        height: 40px;
        padding: 0 24px;

        border: 2px solid #FFF;
        border-radius: 8px;

        text-align: center;
        font-size: 16px;
        color: var(--text-color-dark);

        transition: border-color 0.2s;

        ::-webkit-datetime-edit {
            color: #999;
        }

        &:hover {
            border-color: var(--primary-color);
        }

        ${(props) =>
            props.isFocused &&
            css`
                border-color: var(--primary-color);
                ::-webkit-datetime-edit {
                    color: var(--text-color-dark);
                }
            `
        }

        ${(props) =>
            props.isFilled &&
            css`
                border-color: var(--primary-color);
                ::-webkit-datetime-edit {
                    color: var(--text-color-dark);
                }
            `
        }
    }
`;