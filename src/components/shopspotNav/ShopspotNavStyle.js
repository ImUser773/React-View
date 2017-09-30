import style from 'styled-components';

const Style = {}

Style.HeaderView = style.header`
    height: 70px;
    padding 0;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
`
Style.HeaderLeftView = style.div `
    float: left;
    width: 58.33%;
`
Style. HeaderLeftRow = style.div`
    margin-left: -15px;
    margin-right: -15px;
`
Style.UlContainer = style.ul`
    margin-bottom:0;
    margin-left: -45px;
`
Style.IconView = style.li`
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    a {
        color: #4f94cd;
        transition: color .15s ease-in-out;
    }
    img {
        vertical-align: middle;
    }
`

Style.MarketView = style.li`
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    a {
        font-weight: 600;
        padding: 15px 0;
        display: block;
        width: 100px;
        text-align: center;
        color: inherit;
    }
    img {
        vertical-align: middle;
        width: 16px;
        height: 16px;
        background: red;
    }
`

Style.ArticleView = style.li`
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    border-left: 1px solid #ccc;
    a {
        font-weight: 600;
        padding: 15px 0;
        display: block;
        width: 100px;
        text-align: center;
        color: inherit;
    }
    img {
        vertical-align: middle;
        width: 18px;
        height: 16px;
        background: red;
    }
`
Style.SerachView = style.li`
    display: inline-block;
    margin-left: 50px;
    a {
        font-weight: 600;
        padding: 15px 0;
        display: block;
        width: 100px;
        text-align: center;
        color: inherit;
    }
    img {
        vertical-align: middle;
        width: 18px;
        height: 16px;
        background: red;
    }
`
Style.SerachContainer = style.div`
    display: flex;
    height: 30px;
`
Style.SerachDropDown = style.div`
    width: 100%;
`
Style.SerachButton = style.button`
    border-top-right-radius: 0;
    border-buttom-right-radius: 0;
    text-align: left;
    padding-left: 15px;
    width: 65px;
    height: 30px;
    color: inherit;
`


Style.HeaderRightView = style.div `
    float: left;
    width: 58.33;
`

module.exports = Style;