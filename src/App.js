import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <div className="wrapper">
            <Header />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catalog:slug" component={Product} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
