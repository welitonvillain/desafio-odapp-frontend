import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <span>ODAPP®</span>
            </Logo>
            <Menu>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/"><span>Listar</span></Link>
            </Menu>
        </Container>
    );
};

export default Header;