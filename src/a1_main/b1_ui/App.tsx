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
            {/* HashRouter/(BrowserRouter) создает объект history который хранит путь к текущему location[1]
            и перерисовывает интерфейс сайта когда происходят какие то изменения пути.
            Остальные функции предоставляемые в React Router полагаются на доступность объекта history через context,
             поэтому они должны рендериться внутри компонента Router.
             Компоненты React Router не имеющие в качестве предка компонент Router не будут работать, так как не будет доступен context.*/}
            <HashRouter>
                {/*https://reactrouter.com/web/api/HashRouter*/}
                {/*https://ru.stackoverflow.com/questions/997296/%D0%92-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-react-router-browserrouter-%D0%B8-hashrouter*/}
                {/*Для браузерных проектов есть BrowserRouter и HashRouter компоненты.
                BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы,
                а HashRouter используйте когда у вас статический веб сайт.*/}
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
