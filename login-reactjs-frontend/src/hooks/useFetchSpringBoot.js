import { useState, useEffect } from 'react'

export const useFetchSpringBoot = () => {

    const [usuarios, setUsuarios] = useState([]);
    const url = "http://localhost:8080/api/usuarios/";
    
    const handleListar = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setUsuarios(data);
        })
    }

    useEffect(() => {
        handleListar();
    }, [])

    const handleCreate = (formData) => {

        console.log(formData);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleListar();
        })
    }

    const handleUpdate = (formData) => {
        console.log(formData);
    }

    const handleDelete = (idCliente) => {
        fetch(url + idCliente, {
            method: "DELETE"
        })
        .then(response => {
            handleListar();
        })
    }

    



    return {
        usuarios: usuarios,
        handleCreate: handleCreate,
        handleUpdate: handleUpdate,
        handleDelete: handleDelete
    };

}
