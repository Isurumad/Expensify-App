import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Header from '../portfolio/Header'
import HomePage from '../portfolio/HomePage'
import Contatc from '../portfolio/Contact'
import Portfolio from '../portfolio/Portfolio'
import PortfolioItem from '../portfolio/PortfolioItem'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact={true} component={HomePage}/>
                <Route path='/contact' component={Contatc}/>
                <Route path='/portfolio' component={Portfolio} exact={true}/>
                <Route path='/portfolio/:id' component={PortfolioItem}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter