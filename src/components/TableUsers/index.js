import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, add, edit, deleteData } from "../../API/request"

import { tableIcons } from "./TableIcons";

const TableUsers = () => {
    // eslint-disable-next-line no-unused-vars
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
        // dispatch(fetchUsers())
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
                        }, 300);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            dispatch(edit(oldData.id, newData))
                            dispatch(fetchUsers())
                        }, 300);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            dispatch(deleteData(oldData.id))
                        }, 300);
                    }),
            }}
        />
    )
}

export default TableUsers
