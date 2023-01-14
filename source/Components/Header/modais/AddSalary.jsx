import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddSalary } from "../../../store/ui-Slice";
import { useState } from "react";
import useUpdateDoc from "../../../hooks/useUpdateDocs";

const AddSalary = () => {
  const [amount, setAmount] = useState(0);
  const { isVisible } = useSelector((state) => state.ui.addSalary);
  const { categories } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const addSalaryHandler = useUpdateDoc();

  const addPayment = (e) => {
    e.preventDefault();
    if (!amount) return;

    categories.forEach((category) => {
      const totalAmount = (Number(amount) * category.percentage) / 100;

      addSalaryHandler("categories", category.id, {
        amount: category.amount + totalAmount,
      });
    });
    dispatch(toggleAddSalary(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddSalary(null))}
      title="Add Salary"
    >
      <div>
        <form onSubmit={addPayment}>
          <div className={styles["label-input"]}>
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="₪"
              className="max-width"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSalary;
