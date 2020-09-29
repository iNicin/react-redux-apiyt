import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import VideoDetail from './components/VideoDetail';

function Routes() {

    return (  
    <BrowserRouter>

       
       <Route path="/search"  exact component={VideoDetail} />

    </BrowserRouter>
    )
};

export default Routes;