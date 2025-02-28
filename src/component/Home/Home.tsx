import axios from "axios";
import { Categories } from "component/Filter/Categories";
import { Sort } from "component/Filter/Sort";
import { Header } from "component/Header/Header";
import { PizzaBlock } from "component/Pizza/PizzaBlock";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { filterSelector, setFilter } from "Slice/FilterSlice";
import { pizzaSelector, setPizzas } from "Slice/PizzaSlice";

export const Home = () => {
  const { pizzas } = useSelector(pizzaSelector);
  const { categoryId, sortIndex, orderType, sortPopup } = useSelector(filterSelector);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const categories = categoryId === 0 ? "" : `category=${categoryId}`;

  useEffect(() => {
    const category = searchParams.get("category") || 0;
    const sortList = searchParams.get("sortBy") || "rating";
    const order = searchParams.get("order") || "asc";

    dispatch(
      setFilter({
        categoryId: Number(category),
        sortPopup: sortList,
        orderType: order as "asc",
        sortIndex,
      })
    );
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getPizzas = async () => {
      try {
        const responce = await axios.get(
          `https://6783e7b58b6c7a1316f60805.mockapi.io/Pizza-v2?${categories}&sortBy=${sortPopup}&order=${orderType}`,
          {
            signal: controller.signal,
          }
        );
        dispatch(setPizzas(responce.data));
      } catch (error) {}
    };
    getPizzas();
    return () => controller.abort();
  }, [categoryId, orderType, sortPopup]);

  useEffect(() => {
    setSearchParams(`${categories}&sortBy=${sortPopup}&order=${orderType}`);
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
