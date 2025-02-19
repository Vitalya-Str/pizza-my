import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCategoryIndex } from "Slice/FilterSlice";

const list = ["Все", "мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

type CategoriesType = {
  categoryId: number;
};

export const Categories: FC<CategoriesType> = ({ categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {list.map((cat, id) => (
          <li onClick={() => dispatch(setCategoryIndex(id))} key={id} className={categoryId === id ? "active" : ""}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};
