import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, add } from "../../API/request"

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
    });
    const users = useSelector( state => state.users.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(users)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])

    return (
        <MaterialTable
            icons={tableIcons}
            title="Usuários"
            columns={state.columns}
            data={users}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            dispatch(add(newData))
                        }, 500);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...users];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...users];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    )
}

export default Table
