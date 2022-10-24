import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/catalog';
import Admin from 'pages/Adimin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Define as rotas do site */
const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
