import NextHead from 'next/head';
import React from 'react';

export const Header = (props) => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <title> React </title>
        <link rel="icon" sizes="192x192" href="static/favicon.png"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
    </NextHead>
)

export default Header;