import Image from "next/image";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import useMenu from "../../hooks/useMenu";
import AddSalary from "../Header/modais/AddSalary";

const Header = () => {
  const [isVisible, toogleMenuHandler] = useMenu();
  return (
    <>
      <AddSalary />
      <section className={styles.header}>
        <div className={styles.message}>
          <h1>Welcome to Smart Finance</h1>
          <h2> The right way to control our wallet</h2>
        </div>
        <div className={styles.avatar}>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
            onClick={toogleMenuHandler}
          />
          {isVisible && <HeaderMenu toogleMenuHandler={toogleMenuHandler} />}
        </div>
      </section>
    </>
  );
};

export default Header;
