import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddAmount } from "../../../store/ui-Slice";

const AddAmount = () => {
  const { isVisible, category } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();
  console.log(category);

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddAmount(null))}
      title="Add Amount"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: sell KeyBoard"
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
