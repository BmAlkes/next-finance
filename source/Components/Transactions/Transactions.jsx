import styles from "./Transaction.module.scss";
import TransactionsList from "./TransactionList";

const Transactions = () => {
  return (
    <section className={styles.section}>
      <TransactionsList type={"income"} title={"incoming"} />
      <TransactionsList type={"expense"} title={"expenses"} />
    </section>
  );
};

export default Transactions;
