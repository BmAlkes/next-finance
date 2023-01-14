import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddSalary } from "../../../store/ui-Slice";

const AddSalary = () => {
  const { isVisible, category } = useSelector((state) => state.ui.addSalary);
  const dispatch = useDispatch();
  console.log(category);

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddSalary(null))}
      title="Add Salary"
    >
      <div>
        <form>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSalary;
