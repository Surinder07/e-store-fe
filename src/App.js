import logo from './logo.svg';
import './App.css';
import ProductList from "./products/ProductList";
import Header from "./navMenu/Header";
import Login from "./login/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

function App() {

  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/product" component={ProductList} />
                  <Redirect from="/" to="/login" />
                  {/*<Route path="/login">*/}
                  {/*    <Header />*/}
                  {/*    <Login />*/}
                  {/*</Route>*/}
                  {/*<Route path="/product">*/}
                  {/*    <Header />*/}
                  {/*    <ProductList/>*/}
                  {/*</Route>*/}
                  {/*<Route path="/checkout">*/}
                  {/*    <Header />*/}
                  {/*    <Checkout />*/}
                  {/*</Route>*/}
                  {/*<Route path="/">*/}
                  {/*    <Header />*/}
                  {/*    <Home />*/}
                  {/*</Route>*/}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
