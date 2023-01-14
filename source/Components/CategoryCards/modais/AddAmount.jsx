import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddAmount } from "../../../store/ui-Slice";
import { useState } from "react";
import { doc, updateDoc } from "@firebase/firestore";
import db from "../../../firebase";
import useUpdateDoc from "../../../hooks/useUpdateDocs";

const AddAmount = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const { isVisible, category } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();

  const addAmountHandler = useUpdateDoc();

  const addAmount = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addAmountHandler("categories", category.id, {
      amount: category.amount + Number(amount),
    });
    setTitle("");
    setAmount(0);
    dispatch(toggleAddAmount(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddAmount(null))}
      title="Add Amount"
    >
      <div>
        <form onSubmit={addAmount}>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: sell KeyBoard"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
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
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAmount;
