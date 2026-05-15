import React from "react";
import coin from '../img/main-icon.png'
import goldCoin from '../img/logo.png'

class Welcome extends React.Component{
    state = {
        count: 0,
        mainImg: coin,
        welcomeText: 'Медная монета'
    }

    render(){
        return(
            <main className="main">
                <section className="welcome">
                    <div className="container">
                        <h1 className="welcome-title">{this.state.welcomeText}</h1>
                        <img className="welcome-img" src={this.state.mainImg} onClick={this.click}/>
                        <h2 className="counter">Ваш счет {this.state.count}</h2>
                    </div>
                </section>
            </main>
        )
    }

    click = () =>{
        this.setState({
            count: this.state.count + 10
        }, () =>{ //после обновление счета вызваем функцию 
            this.changePicture()
        })
    }

    changePicture = () =>{
        if(this.state.count > 100){
            this.setState({
                mainImg:goldCoin,
                welcomeText: 'Золотая монета'
            })
            
        }
    }
}

export default Welcome