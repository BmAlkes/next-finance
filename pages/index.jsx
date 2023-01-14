import styles from "../styles/initial.module.scss";
import Header from "../source/Components/Header/Header";
import AllCards from "../source/Components/CategoryCards/AllCards";
import Charts from "../source/Components/Charts/Charts";
import { useDispatch } from "react-redux";
import { setCategories, setTransactions } from "../source/store/app-Slice";
import useGetDocs from "../source/hooks/useGetDoc";
import Transactions from "../source/Components/Transactions/Transactions";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setCategories(useGetDocs("categories")));
  dispatch(setTransactions(useGetDocs("transactions")));
  return (
    <>
      <main className={styles.main}>
        <Header />
        <AllCards />
        <Charts />
        <Transactions />
      </main>
    </>
  );
}
