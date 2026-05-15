import React from "react";

class HeaderNav extends React.Component{
    render(){
        return(
            <nav className="header-nav">
                <ul className="header-list">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Рейтинг</a></li>
                    <li><a href="#">О проекте</a></li>
                </ul>
            </nav>
        )
    }
}

export default HeaderNav