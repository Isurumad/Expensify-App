import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import ExpensiveApp from '../expensive/ExpensiveApp'
import CreateExpense from '../expensive/CreateExpencify'
import EditExpence from '../expensive/EditExpence'
import HelpExpence from '../expensive/HelpExpence'
import NotFound from '../expensive/NotFound'
import Header from '../expensive/Header'

const AppRouter= () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact ={true} component = {ExpensiveApp}/>
                <Route path='/create' exact ={true} component={CreateExpense}></Route>
                <Route path='/edit/:id' exact ={true} component={EditExpence}></Route>
                <Route path='/help' exact ={true} component={HelpExpence}></Route>
                <Route  component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;