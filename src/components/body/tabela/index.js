import React, { useEffect, useState } from "react";
import users from './nomes'
import './styles.css'


export const Nav = () => {
    return (
        <nav>
            <a>Pedidos</a>
            <a>Usuários</a>
            <a>Refeições</a>
            <a>Categorias da Refeição</a>
        </nav>        
    )
}




export const Tabela = () => {
    let listaIndices = []
    let listaPaginas = []
    const [page, setPage] = useState(1)
    const [tamanhoUsers, setTamanho] = useState(11)
    let indiceMax = page * 5
    let indiceMin = indiceMax - 5
    let currentPage = page

    for (let indice = indiceMin; (indice < indiceMax) && (indice < users.length); indice++) {
        listaIndices.push(indice)
    }

    let qtde_paginas = Math.ceil(users.length / 5)
    
    
    for (let i = 1; i <= qtde_paginas; i++) {
            listaPaginas.push(i)
    }
    
    const PrevPage = () => {
        setPage(page - 1)
        useEffect(() => {
            Tabela()
        })
    }

    const NextPage = () => {
        setPage(parseInt(page) + 1)
    }


    return (
      <div className="table"> 
        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>Cadastrado em</th>
                <th></th>
            </thead>
            <tbody>
                {listaIndices.map((i) => (
                    <tr>
                        <td>{users[i].first_name + ' ' + users[i].last_name}</td>
                        <td>{users[i].email}</td>
                        <td>{users[i].email}</td>
                        <td>
                            <button id="edit">{'editar '}</button>
                            <button id="delete" className={i} onClick={(event) => {
                                users.splice(event.target.className, 1)
                                setTamanho(users.length)
                            }}>{'excluir'}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="pagination">
            <button onClick={PrevPage} disabled={page == 1}>{'<<'}</button>
            {listaPaginas.map((i) => (
                <button className={i} id={i == currentPage ? 'active': ''} onClick={(event) => {
                    setPage(event.target.className)
                }}>{i}</button>
            ))}
            <button onClick={NextPage} disabled={page == qtde_paginas}>{'>>'}</button>
        </div>
        </div>  
       
    )
}


