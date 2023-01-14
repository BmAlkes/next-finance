import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddCategory } from "../../../store/ui-Slice";

const AddCategory = () => {
  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();
  console.log(category);

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title="Add New Category"
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
              placeholder="Ex: Essencial"
            />
          </div>
          <div className={styles["label-input"]}>
            <label htmlFor="percentage">Allocated percentage</label>
            <input
              type="text"
              id="percentage"
              name="percentage"
              placeholder="%"
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

export default AddCategory;
