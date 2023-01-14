import { useState } from "react";
import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubtractAmount } from "../../../store/ui-Slice";
import useUpdateDoc from "../../../hooks/useUpdateDocs";

const SubTractAmount = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const { isVisible, category } = useSelector(
    (state) => state.ui.subtractAmount
  );
  const dispatch = useDispatch();

  const substractAmountHandler = useUpdateDoc();

  const substractAmount = (e) => {
    e.preventDefault();
    if (!title || !amount) return false;

    substractAmountHandler("categories", category.id, {
      amount: category.amount - Number(amount),
    });

    setTitle("");
    setAmount(0);
    dispatch(toggleSubtractAmount(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleSubtractAmount(null))}
      title="Discount Amount"
    >
      <div>
        <form onSubmit={substractAmount}>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: Car gas"
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
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Discount
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SubTractAmount;
