import axios from "axios";
import { Categories } from "component/Filter/Categories";
import { Sort } from "component/Filter/Sort";
import { Header } from "component/Header/Header";
import { PizzaBlock } from "component/Pizza/PizzaBlock";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pizzaSelector, setPizzas } from "Slice/PizzaSlice";

export const Home = () => {
  const { pizzas } = useSelector(pizzaSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://6783e7b58b6c7a1316f60805.mockapi.io/Pizza-v2`).then((res) => {
      dispatch(setPizzas(res.data));
    });
  }, []);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
              {pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
