import { forwardRef } from "react";
import styles from "./CardsMenu.module.scss";
const CardsMenu = forwardRef(({ children }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
});
CardsMenu.displayName = "Card Menu";
export default CardsMenu;
