import styles from "../styles/initial.module.scss";
import Header from "../source/Components/Header/Header";
import AllCards from "../source/Components/CategoryCards/AllCards";
import { useDispatch } from "react-redux";
import { setCategories } from "../source/store/app-Slice";
import useGetDocs from "../source/hooks/useGetDoc";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useGetDocs("categories");
  dispatch(setCategories(categories));
  return (
    <>
      <main className={styles.main}>
        <Header />
        <AllCards />
      </main>
    </>
  );
}
