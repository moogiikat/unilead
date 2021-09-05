// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from './component/PageScrollTop';
import HomeParticles from './home/HomeParticles';
import PortfolioDetails0 from "./elements/PortfolioDetails0";
import PortfolioDetails1 from "./elements/PortfolioDetails1";
import PortfolioDetails2 from "./elements/PortfolioDetails2";
import PortfolioDetails3 from "./elements/PortfolioDetails3";
import BlogDetails0 from "./elements/BlogDetails0";
import BlogDetails1 from "./elements/BlogDetails1";
import BlogDetails2 from "./elements/BlogDetails2";
import BlogDetails3 from "./elements/BlogDetails3";


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
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-0`} component={PortfolioDetails0}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-1`} component={PortfolioDetails1}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-2`} component={PortfolioDetails2}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-3`} component={PortfolioDetails3}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details-0`} component={BlogDetails0}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details-1`} component={BlogDetails1}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details-2`} component={BlogDetails2}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details-3`} component={BlogDetails3}/>

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