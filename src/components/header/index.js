import React from 'react';
import './styles.css'


const Header = () => {
    return (
    <header>
        <div className='titulo'>
            <h2>dinerdash</h2>
            <div className='subtitulo'>
                <h1>Backoffice</h1>
                <p>Gerencie pedidos, refeições e mais.</p>
            </div>
        </div>
        <div className='topRight'>
            <a>backoffice</a>
            <a>perfil</a>
            <a>sair</a>
        </div>
        
    </header>
    )
}

export default Header