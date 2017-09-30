import style from 'styled-components';

const TopNav = style.div`
    overflow: hidden;
    background-color: #333;
    a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        cursor: pointer;
    }
    a:hover {
        background-color: #ddd;
        color: black;
    }
`

module.exports = {
    TopNav: TopNav
}