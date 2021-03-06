import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeftSideBar from './LeftBar/LeftSideBar';
import MiddleBar from './MiddleBar/MiddleBar';
// import Header from './Header'

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div>
                        <h1>Varun</h1>
                        <LeftSideBar />
                    </div>
                </BrowserRouter>
            </Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
