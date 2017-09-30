import Link from 'next/link';
import style from 'styled-components'
import Header from '../src/components/header/header';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../src/components/navBar/navBar';
//import Layout from '../component/layout/Layout'

// const A = style.button.attrs({
//     className: 'btn btn-primary'
// })`
//     font-size: 20px;
//     color: red;
//     cursor: pointer
// `
export default class extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar/>
            </div>
        )
    };
};