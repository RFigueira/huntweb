import React from 'react';

import "./styles.css"

const Header = () => (
    <header id="main-header">Hello</header>
);

// o codigo a cima eh a mesma coisa que esse, 
//porem como temos o retorno logo de saida
//podemos usar o conceito de function 
//criando um component stantless, pois nao precisamos
//ter o estado do nosso componente, caso seja preciso
// devemos usar com o codigo abaixo
//class Header extends Component {
//    render() {
//       return <h1>Hello</h1>
//    }
//}

export default Header;