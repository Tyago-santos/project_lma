import React from "react";
import styled from "styled-components";

import data from '../api';

const Wapper = styled.table`
    width:100%;
    border: 1px solid white;
    background-color:red;

`;


const Table = ()=> {

    let namesObject = data.map(item=> Object.keys(item));

    console.log(namesObject);

    return (
        <Wapper>
            <thead>
                <tr>
                    {namesObject?.map((item)=>(
                        <th >{item}</th>
                    ))}
                </tr>
            </thead>
                                    
                    {data?.map((item)=>(
                        <tr>
                            <td>{item}</td>
                        </tr>
                    ))}
        </Wapper>
    );
}

export default Table;