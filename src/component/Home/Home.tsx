import axios from "axios";
import { Categories } from "component/Filter/Categories";
import { Sort } from "component/Filter/Sort";
import { Header } from "component/Header/Header";
import { PizzaBlock } from "component/Pizza/PizzaBlock";
import QueryString from "qs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { filterSelector } from "Slice/FilterSlice";
import { pizzaSelector, setPizzas } from "Slice/PizzaSlice";

export const Home = () => {
  const { pizzas } = useSelector(pizzaSelector);
  const { categoryId, sortIndex, orderType, sortPopup } = useSelector(filterSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = categoryId === 0 ? "" : `category=${categoryId}`;

  useEffect(() => {
    axios.get(`https://6783e7b58b6c7a1316f60805.mockapi.io/Pizza-v2?${categories}&sortBy=${sortPopup}&order=${orderType}`).then((res) => {
      dispatch(setPizzas(res.data));
    });
  }, [categoryId, sortIndex, orderType, sortPopup]);

  useEffect(() => {
    const qs = QueryString.stringify({
      categoryId,
      sortPopup,
      orderType,
    });
    navigate(`?${qs}`);
    console.log(qs);
  }, [categoryId, orderType, sortPopup]);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories categoryId={categoryId} />
              <Sort orderType={orderType} sortIndex={sortIndex} />
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
