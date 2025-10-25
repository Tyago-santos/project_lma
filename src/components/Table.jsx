import React, {useState} from "react";
import styled from "styled-components";

import data from '../api';

const Wapper = styled.table`
    width:100%;
    hidden:auto

    & th{
        font-size:1.2rem;
    }


`;


const Table = ()=> {    

    
    

    return (
        <Wapper >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th>Organização</th>
                    <th>Sexo</th>
                </tr>
            </thead>


          <tbody>
  {data.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.sobrenome}</td>
      <td>{item.idade}</td>
      <td>{item.endereco}</td>
      <td>{item.organizacao}</td>
      <td>{item.sexo}</td>
    </tr>
  ))}
</tbody>

                  
        </Wapper>
    );
}

export default Table;