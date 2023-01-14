import styles from "./CategoryCards.module.scss";
import { TbPencil } from "react-icons/tb";
import useGetCurrency from "../../hooks/useGetCurrency";
import CategoryMenu from "../CategoryCards/CategoryMenu";
import useMenu from "../../hooks/useMenu";

const CategoryCards = ({ data }) => {
  const { title, amount, percentage } = data;
  const [isVisible, toggleMenuHandler] = useMenu();
  const formattedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" onClick={toggleMenuHandler} />
        {isVisible && (
          <CategoryMenu toogleMenuHandler={toggleMenuHandler} data={data} />
        )}
      </div>
      <h2>{title}</h2>
      <h3>₪ {formattedAmount}</h3>
      <h4>allocated: {percentage}%</h4>
    </div>
  );
};

export default CategoryCards;
