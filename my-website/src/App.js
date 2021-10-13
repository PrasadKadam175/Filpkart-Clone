
import { BrowserRouter , Switch, Route } from 'react-router-dom'



import Header from './Components/header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/cart/Cart'
import DetailView from './Components/itemdetail/DetailView'

import  TemplateProvider  from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';



function App() {
    return (
        <div>
            <TemplateProvider>
                <ContextProvider>
                    <BrowserRouter>
                    <Header />
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/product/:id" component={DetailView}/>
                    </Switch>
                    </BrowserRouter>
                </ContextProvider>
            </TemplateProvider>
        </div>
    )
}

export default App

