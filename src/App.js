import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import Home from './components/pages/Home';
import {DataProvider} from './components/Context'
import Services from './components/pages/Services';
import LoginIn from './components/pages/LoginIn';
import Product from './components/pages/Product';
import Footer from './components/Footer';
class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/products' component={Product} />
          <Route path='/services' component={Services} />
          <Route path='/login' component={LoginIn} />
        </Switch>
        <Section/>
        <Footer/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
