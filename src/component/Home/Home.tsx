import { Categories } from "component/Filter/Categories";
import { Sort } from "component/Filter/Sort";
import { Header } from "component/Header/Header";
import { PizzaBlock } from "component/Pizza/PizzaBlock";

export const Home = () => {
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
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
