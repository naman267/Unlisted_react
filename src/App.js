import React, { Component } from 'react'

import Web from './web/web'
import Admin from './admin/app/App'

import { Switch,Route, Redirect } from 'react-router-dom'
function main() {
    return(
        <>
        <Switch>
        <Route exact path="/" component={Web}/>
        <Route path="/admin" component={Admin}/> 
        
       </Switch>
        </>

        
    )
}
export default main
