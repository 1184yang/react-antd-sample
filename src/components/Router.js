import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Home, About, Events, Contact, Products, Product, Protected, Profile } from '../pages'
import Nav from './Nav'

const Router = () => {
  const [current, setCurrent] = useState('home'); 
  const setRoute = () => {
    const location = window.location.href.split('/')
    const pathname = location[location.length - 1]
    setCurrent(pathname ? pathname : 'home')
  };

  useEffect(() => {
    setRoute();
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
  }, [])

  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/protected" component={Protected} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default Router