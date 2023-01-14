import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTransferAmount } from "../../../store/ui-Slice";

const TransferAmount = () => {
  const { isVisible, category } = useSelector(
    (state) => state.ui.transferAmount
  );
  const dispatch = useDispatch();
  console.log(category);

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleTransferAmount(null))}
      title="Transfer Amount"
    >
      <div>
        <form>
          <div className={styles["label-input"]}>
            <p>From</p>
            <p className="caption">Personal</p>
          </div>
          <div className={styles["label-input"]}>
            <label htmlFor="destination">For</label>
            <select name="destination" id="destination" className="max-width">
              <option value="essencial">Essencial</option>
              <option value="personal">Personal</option>
              <option value="invest">Invest</option>
            </select>
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
              Transfer
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TransferAmount;
