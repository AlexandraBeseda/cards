import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../b2_bll/store";
import {Header} from "./header/Header";
import {Routes} from "./routes/Routes";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    {/*тут будем хранить навлинки для переходов*/}
                    <Header/>
                    <Routes/>

                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
