import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export const PizzaDetails = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{ title: string; imageUrl: string; price: number } | null>(null);

  useEffect(() => {
    const getPizza = async () => {
      const response = await axios.get(`https://6783e7b58b6c7a1316f60805.mockapi.io/Pizza-v2/${id}`);
      setPizza(response.data);
    };

    getPizza();
  }, [id]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content__items">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{pizza.title}</h4>
        <div>
          <b>Цена: {pizza.price} тг</b>{" "}
        </div>

        <Link to="/">
          <div className="button button--outline button--add">
            <span>Назад</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
