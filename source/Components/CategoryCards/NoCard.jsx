import styles from "./NoCard.module.scss";
import { TbPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toggleAddCategory } from "../../store/ui-Slice";

const NoCard = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles["no-card"]}
      onClick={() => dispatch(toggleAddCategory(null))}
    >
      <TbPlus className="icon" />
    </div>
  );
};

export default NoCard;
