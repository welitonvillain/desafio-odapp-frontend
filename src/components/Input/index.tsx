import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from 'react';
import { debounce } from 'lodash';

import { validateIsNumber } from '../../utils/validateForm';

import { Container } from './styles';

interface IPatient {
    code: number;
    name: string;
    age: number;
    register: Date;
    city: string;
    state: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    patient: IPatient;
    setField: Function;
}

const Input: React.FC<InputProps> = ({ name, setField, patient, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length === 0) {
            setIsFocused(false);
            setIsFilled(false);
        }
    }, [patient]);

    // !(!!patient) && inputRef.current?.setAttribute('value', '');

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)
    
        setIsFilled(!!inputRef.current?.value);
    }, []);

    const debounced = debounce((data: string) => setField(name, data), 500);

    const handleSetField = useCallback((data: string) => {
        if (name === 'id' || name === 'age') validateIsNumber(data);


        debounced(data);
    }, [debounced, name]);


    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}

                onChange={e => handleSetField(e.target.value)}

                {...rest}
            />
        </Container>
    );
};

export default Input;