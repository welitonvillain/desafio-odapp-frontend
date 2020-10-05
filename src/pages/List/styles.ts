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

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    padding: 16px;

    table {
        width: 100%;
        border-spacing: 0 6px;

        th {
            color: var(--color-header-table);
            height: 40px;
            font-weight: 500;
            padding: 10px 6px;
            text-align: left;
            font-size: 16px;
        }

        tr {
            height: 50px;
            font-weight: 500;
            
            color: var(--text-color-dark);
            background: #FFF;
        }

        td {
            padding: 0 8px;
            color: var(--text-color-dark);
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;

            transition: border-color 0.2s;
        }

        tr td:first-child {
            border-left: 2px solid transparent;
        }

        tr td:last-child {
            border-right: 2px solid transparent;
        }

        tr:hover td {
            cursor: pointer;

            border-top: 2px solid var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
        }

        tr:hover td:first-child {
            border-left: 2px solid var(--primary-color);
        }

        tr:hover td:last-child {
            border-right: 2px solid var(--primary-color);
        }

        td:first-child {
            border-radius: 8px 0 0 8px;
        }

        td:last-child {
            border-radius: 0 8px 8px 0;
        }
    }
`;