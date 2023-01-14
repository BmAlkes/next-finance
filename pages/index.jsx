import styles from "../styles/initial.module.scss";
import Header from "../source/Components/Header/Header";
import AllCards from "../source/Components/CategoryCards/AllCards";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <AllCards />
      </main>
    </>
  );
}
