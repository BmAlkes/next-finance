import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";

const AddAmount = () => {
  return (
    <Modal isOpen={true} onClose={() => {}} title="Add Amount">
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
