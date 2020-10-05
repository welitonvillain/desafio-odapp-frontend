import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { formatDate } from '../../utils/formatter';

import { Container, TableContainer } from './styles';

interface IPatient {
    code: number;
    name: string;
    age: number;
    register: Date;
    city: string;
    state: string;
}

const List: React.FC = () => {
    const [patients, setPatients] = useState<IPatient[]>([]);

    useEffect(() => {
        async function getPatients() {
            try {
                const response = await api.get<IPatient[]>('/patients');

                setPatients(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        getPatients();
    }, []);


    return (
        <Container>
            <h1>Listagem de Usuários</h1>
            <TableContainer>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>     
                        <th>Idade</th>                       
                        <th>Data Registro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </thead>

                    <tbody>
                        { patients.map(patient => 
                            <tr key={patient.code}>
                                <td>{patient.code}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{formatDate(patient.register)}</td>
                                <td>{patient.city}</td>
                                <td>{patient.state}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </TableContainer>
        </Container>
    );
}

export default List;