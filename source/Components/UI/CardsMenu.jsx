import styles from "./CardsMenu.module.scss";
const CardsMenu = ({ children }) => {
  return (
    <div className={styles.card}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
};

export default CardsMenu;
