import styles from "./CategoryCards.module.scss";
import { TbPencil } from "react-icons/tb";
import useGetCurrency from "../../hooks/useGetCurrency";

const CategoryCards = ({ data }) => {
  const { title, amount, percentage } = data;

  const formattedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" />
      </div>
      <h2>{title}</h2>
      <h3>₪ {formattedAmount}</h3>
      <h4>allocated: {percentage}%</h4>
    </div>
  );
};

export default CategoryCards;