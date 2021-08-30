// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from './component/PageScrollTop';
import HomeParticles from './home/HomeParticles';
import PortfolioDetails from "./elements/PortfolioDetails";
import ServiceDetails from "./elements/ServiceDetails";
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`/`} component={HomeParticles}/> 
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();