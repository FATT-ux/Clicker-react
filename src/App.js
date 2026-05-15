import React from "react";
import Header from './componets/Header'
import Welcome from "./componets/Welcome";

class App extends React.Component{
    render () {
        return(
            <div>
            <Header />
            <Welcome />
            </div>
        )
    }
}

export default App