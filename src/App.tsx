import "./scss/app.scss";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "./component/Home/Home";
import { PizzaDetails } from "./component/Pizza/PizzaDetails";
import { Cart } from "component/Cart/Cart";
import { CartEmpty } from "component/Cart/CartEmpty";
import { NotFound } from "component/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cartEmpty" element={<CartEmpty />} />
      <Route path="/pizza-details/:id" element={<PizzaDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
