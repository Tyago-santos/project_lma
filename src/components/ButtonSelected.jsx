import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    select {
        padding: 8px;
        outline: none;
        border: none;
        font-family: 'Roboto';
        background-color: ${(props) => props.theme.colors.background};
        font-weight: bold;
        color: ${(props) => props.theme.colors.text};
        border: 1px solid ${(props) => props.theme.colors.button};
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colors.button};
            color: #fff;
        }
    }

    margin-right: 10px;
`;

const ButtonSelected = ({ onSend }) => {
    const [valueSelect, setValueSelect] = useState();

    const handleChangeValueSelect = (e) => {
        setValueSelect(e.target.value);
        onSend(e.target.value);
    };

    return (
        <Wrapper>
            <select onChange={handleChangeValueSelect} value={valueSelect}>
                <option value="Todos">Todos</option>
                <option value="Quórum de Élderes">Quórun de Elderes</option>
                <option value="Sociedade de Socorro">
                    Sociedade de Socorro
                </option>
                <option value="Moças">Moças</option>
                <option value="Primária">Primária</option>
                <option value="Rapazes">Rapazes</option>
            </select>
        </Wrapper>
    );
};

export default ButtonSelected;
