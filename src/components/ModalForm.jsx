import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../reducer/themeReducer/themeSlice';

// --- 0. Constantes e Dados Iniciais ---

const initialData = {
    nome: '',
    sobrenome: '',
    idade: '',
    endereco: '',
    organizacao: 'Quórum de Elderes',
    dataDeBatismo: '2025-11-05',
    descricao: '',
};

const organizacaoOptions = [
    { value: 'Quórum de Elderes', label: 'Quórum de Elderes' },
    { value: 'Sociedade de Socorro', label: 'Sociedade de Socorro' },
    { value: 'Moças', label: 'Moças' },
    { value: 'Primária', label: 'Primária' },
    { value: 'Rapazes', label: 'Rapazes' },
];

// --- 1. Estilos Base para o Glassmorphism ---

const inputBaseStyle = css`
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.2);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`;

// --- 2. Componentes Estilizados (Styled-Components) ---

// 2.1. Wrapper com BLUR de fundo (Fundo da Tela)
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ showModal }) => (showModal == false ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    z-index: 1000;

    padding: 0px 20px;
`;

// 2.2. Modal (Elemento de Vidro)
const Modal = styled.form`
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    position: relative; /* Essencial para posicionar o CloseButton */
    width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 20px;
    padding: 30px;
    color: #f1f1f1;
`;

// 2.3. Ícone/Botão de Fechar
const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    padding: 10px; /* Área de clique maior */
    border-radius: 50%;
    transition: background-color 0.2s ease;
    z-index: 10;
    font-weight: 300;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const ModalTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 600;
`;

const InputContainer = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #fff;
`;

const StyledInput = styled.input`
    ${inputBaseStyle}
`;

const StyledTextArea = styled.textarea`
    ${inputBaseStyle}
    resize: vertical;
    min-height: 100px;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition:
        background-color 0.3s ease,
        transform 0.1s ease;

    &:hover {
        background-color: #0056b3;
    }
    &:active {
        transform: scale(0.99);
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

const StyledSelect = styled.select`
    ${inputBaseStyle}
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13%205.3L146.2%20208.7%2018.4%2074.7a17.6%2017.6%200%200%200-25.3%2023.2l130.4%20130.4c6.8%206.8%2017.9%206.8%2024.7%200l130.4-130.4a17.6%2017.6%200%200%200%200-24.6%2017.6%2017.6%200%200%200-11.7-5.3z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 15px top 50%;
    background-size: 10px auto;
    padding-right: 30px;

    option {
        background: #333;
        color: #fff;
    }
`;

// --- 3. Componentes Reutilizáveis de Formulário ---

function FormInput({
    label,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    isTextArea = false,
}) {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            {isTextArea ? (
                <StyledTextArea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <StyledInput
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </InputContainer>
    );
}

function SelectInput({ label, value, onChange, options, name }) {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <StyledSelect
                onChange={onChange}
                value={value}
                name={name}
                id={name}
            >
                {options.map((option) => (
                    // O valor 'Todos' foi removido para fins de formulário de cadastro.
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </InputContainer>
    );
}

// --- 4. Componente Principal (App/ModalController) ---

// --- 5. Componente ModalForm (Integrado) ---

export function ModalForm({ onClose }) {
    const [formData, setFormData] = useState(initialData);
    //  const [showModal, setShowModal] = useState(true);
    const toggleModal = useSelector(({ theme }) => theme.showModal);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Formulário:', formData);
        alert('Formulário enviado! (Verifique o console)');
        // Aqui você faria a chamada para a API
        onClose(); // Fecha o modal após o envio (opcional)
    };

    const handleCloseModal = () => {
        dispatch(setShowModal({ showModal: false }));
    };

    return (
        <Wrapper
            onClick={(e) => {
                if (e.target === e.currentTarget) handleCloseModal();
            }}
            showModal={toggleModal}
        >
            <Modal onSubmit={handleSubmit}>
                {/* ÍCONE DE FECHAR ADICIONADO AQUI */}
                <CloseButton
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar Modal"
                    onClick={handleCloseModal}
                >
                    &times;
                </CloseButton>

                <ModalTitle>Criar Novo Registro</ModalTitle>

                <Grid>
                    <FormInput
                        label="Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Bruno"
                    />
                    <FormInput
                        label="Sobrenome"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        placeholder="Ex: Santos"
                    />
                </Grid>

                <Grid>
                    <FormInput
                        label="Idade"
                        name="idade"
                        type="number"
                        value={formData.idade}
                        onChange={handleChange}
                        placeholder="Ex: 23"
                    />
                    <SelectInput
                        label="Organização"
                        name="organizacao"
                        value={formData.organizacao}
                        onChange={handleChange}
                        options={organizacaoOptions}
                    />
                </Grid>

                <FormInput
                    label="Endereço"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Ex: Bairro Guarani, Av. Principal"
                />

                <FormInput
                    label="Data de Batismo"
                    name="dataDeBatismo"
                    type="date"
                    value={formData.dataDeBatismo}
                    onChange={handleChange}
                />

                <FormInput
                    label="Descrição/Notas"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Especialista em TI..."
                    isTextArea
                />

                <StyledButton type="submit">Salvar Tabela</StyledButton>
            </Modal>
        </Wrapper>
    );
}

export default ModalForm;
// export default App; (Usar o 'App' como componente principal em sua aplicação)
