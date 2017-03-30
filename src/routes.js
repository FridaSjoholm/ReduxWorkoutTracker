import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import WorkOutCount from './components/containers/WorkOutCount'
import AddDayForm from './components/containers/AddDayForm'
import WorkOutList from './components/containers/WorkOutList'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={WorkOutCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={WorkOutList}>
                <Route path=":filter" component={WorkOutList}/>
            </Route>
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)

export default routes
