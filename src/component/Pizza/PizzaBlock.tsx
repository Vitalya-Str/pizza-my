import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { cartItemSelector,  setItems } from "Slice/CartSlice";
import { PizzaType } from "Slice/PizzaSlice";

export type PizzaBlockProps = {
  item: PizzaType;
};

export const PizzaBlock: FC<PizzaBlockProps> = ({ item }) => {
  const { id, title, types, sizes, price } = item;

  const cartItem = useSelector(cartItemSelector(id));

  const setCount = cartItem ? cartItem.count : 0;

  const [pizzaSize, setSize] = useState(0);
  const [pizzaType, setType] = useState(0);

  const typeList = ["тонкое", "традиционное"];

  const dispatch = useDispatch();

  const addItems = () => {
    // const item: CartItemType = {
    //   id,
    //   title,
    //   types: typeList[pizzaType],
    //   sizes: sizes[pizzaSize],
    //   category,
    //   price,
    // };
    dispatch(setItems({ ...item, count: 0, types: typeList[pizzaType], sizes: sizes[pizzaSize] }));
  };

  return (
    <>
      <div className="pizza-block">
        <Link to={`/pizza-details/${id}`}>
          <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>

        <div className="pizza-block__selector">
          <ul>
            {types.map((type, i) => (
              <li key={i} className={pizzaType === i ? "active" : ""} onClick={() => setType(i)}>
                {typeList[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li key={i} className={pizzaSize === i ? "active" : ""} onClick={() => setSize(i)}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div onClick={addItems} className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {setCount > 0 && <i>{setCount}</i>}
          </div>
        </div>
      </div>
    </>
  );
};
