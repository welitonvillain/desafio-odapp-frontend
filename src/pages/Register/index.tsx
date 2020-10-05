import React, { useState, useCallback, FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Input from '../../components/Input';

import { Container, FormContainer, Form } from './styles';

interface IPatient {
    code: number;
    name: string;
    age: number;
    register: Date;
    city: string;
    state: string;
}

const Register: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [newPatient, setNewPatient] = useState<IPatient>({} as IPatient);

    const handleSubmitForm = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await api.post<IPatient>('/patients', newPatient);

            response.status === 200
                ? toast.success(`Paciente ${response.data.code} criado.`)
                : toast.error('Erro ao Registrar');
        } catch (e) {
            toast.error('Erro ao Registrar');
        }

        formRef.current?.reset();

        setNewPatient({} as IPatient);
    }, [newPatient]);

    const handleFillUser = useCallback((name: string, data: string) => {
        if (name === 'code') newPatient.code = Number(data);
        if (name === 'name') newPatient.name = data;
        if (name === 'age') newPatient.age = Number(data);
        if (name === 'register') newPatient.register = new Date(data);
        if (name === 'city') newPatient.city = data;
        if (name === 'state') newPatient.state = data;

        setNewPatient(newPatient);
    }, [newPatient]);

    return (
        <Container>
            <h1>Cadastro de usuários</h1>
            <FormContainer>
                <Form ref={formRef} onSubmit={e => handleSubmitForm(e)}>
                    <div>
                        <span>ID:</span>
                        <Input name="code" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <div>
                        <span>Nome:</span>
                        <Input name="name" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <div>
                        <span>Idade:</span>
                        <Input name="age" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <div>
                        <span>Data. Cad.:</span>
                        <Input name="register" type="date" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <div>
                        <span>Cidade:</span>
                        <Input name="city" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <div>
                        <span>Estado:</span>
                        <Input name="state" patient={newPatient} setField={handleFillUser}/>
                    </div>

                    <button type="submit">Cadastrar</button>
                </Form>

            </FormContainer>
        </Container>
    );
};

export default Register;