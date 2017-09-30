import Link from 'next/link';
import style from 'styled-components'
import Heade from '../src/components/header/header';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../src/components/navBar/navBar';
import Header from '../src/components/shopspotNav/ShopspotNav'

export default class extends Component {
    render() {
        return (
            <div>
                <Heade />
                <Header/> 
            </div>
        )
    };
};