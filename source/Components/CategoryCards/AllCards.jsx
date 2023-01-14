import CategoryCards from "./CategoryCards";
import styles from "./AllCards.module.scss";
import NoCard from "./NoCard";

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
  {
    id: 4,
    title: "several",
    amount: 800,
    percentage: 30,
  },
];

const AllCards = () => {
  const cards = DUMMY_DATA.map((category) => {
    return <CategoryCards key={category.id} data={category} />;
  });

  return (
    <section className={styles.section}>
      {cards}
      <NoCard />
    </section>
  );
};

export default AllCards;