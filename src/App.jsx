import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {useEffect} from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router';
import Services from './Services';
import Education from './Education';
import { useLocation,useHistory } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';

const App = () =>{
    let hs = useHistory();
    useEffect(()=>{
        hs.push("/");
    },[]);
    return (
        <>
        <div className="container-fluid p-0 bg-dark">
            <div className="row no-gutters">
                <div className="col-sm-2">
                    <Header />
                    
                    
                </div>
                <div className="col-sm-10">

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/skills" component={Services} />
                        <Route exact path="/education" component={Education} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />

                    </Switch>
                </div>
            </div>
        </div>
        
            
        </>
    );
}

export default App;