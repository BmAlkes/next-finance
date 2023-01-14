import CategoryCards from "./CategoryCards";
import styles from "./AllCards.module.scss";
import NoCard from "./NoCard";
import AddAmount from "../CategoryCards/modais/AddAmount";
import SubtractAmount from "../CategoryCards/modais/SubtractAmount";
import TransferAmount from "../CategoryCards/modais/TransferAmount";
import EditCategory from "../CategoryCards/modais/EditCategory";
import AddCategory from "../CategoryCards/modais/AddCategory";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Personal",
    amount: 400,
    percentage: 20,
  },
  {
    id: 2,
    title: "Essencial",
    amount: 2000,
    percentage: 30,
  },
  {
    id: 3,
    title: "Invest",
    amount: 500,
    percentage: 20,
  },
];

const AllCards = () => {
  const cards = DUMMY_DATA.map((category) => {
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
