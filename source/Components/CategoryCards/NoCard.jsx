import styles from "./NoCard.module.scss";
import { TbPlus } from "react-icons/tb";

const NoCard = () => {
  return (
    <div className={styles["no-card"]}>
      <TbPlus className="icon" />
    </div>
  );
};

export default NoCard;
