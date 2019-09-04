import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';

import { tableIcons } from "./TableIcons";

const Table = () => {
    const [state, setState] = useState({
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Nome', field: 'nome' },
            { title: 'Sobrenome', field: 'sobrenome' },
            { title: 'Email', field: 'email' },
            {
                title: 'Tipo de Usuário',
                field: 'tipoUsuario',
                lookup: { "Administrador": "Administrador", "Usuário padrão": 'Usuário padrão' },
            },
            { title: 'Ativo', field: 'ativo', type: 'boolean' },
        ],
        data: [],
    });

    const url = "http://localhost:3000/usuarios"

    const getUsers = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState(prevState => ({
                    ...prevState,
                    data
                }));    
            })

    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <MaterialTable
            icons={tableIcons}
            title="Usuários"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    )
}

export default Table
