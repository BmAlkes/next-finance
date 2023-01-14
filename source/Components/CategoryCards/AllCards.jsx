import CategoryCards from "./CategoryCards";
import styles from "./AllCards.module.scss";
import NoCard from "./NoCard";
import AddAmount from "../CategoryCards/modais/AddAmount";
import SubtractAmount from "../CategoryCards/modais/SubtractAmount";
import TransferAmount from "../CategoryCards/modais/TransferAmount";
import EditCategory from "../CategoryCards/modais/EditCategory";
import AddCategory from "../CategoryCards/modais/AddCategory";
import useGetDoc from "../../hooks/useGetDoc";
import { useSelector } from "react-redux";

const AllCards = () => {
  const { categories } = useSelector((state) => state.app);

  const cards = categories.map((category) => {
    return <CategoryCards key={category.id} data={category} />;
  });

  return (
    <>
      <AddAmount />
      <SubtractAmount />
      <TransferAmount />
      <EditCategory />
      <AddCategory />
      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  );
};

export default AllCards;
