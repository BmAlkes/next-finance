import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditCategory } from "../../../store/ui-Slice";

const EditCategory = () => {
  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();
  console.log(category);

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleEditCategory(null))}
      title="Edit Category"
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
            <button type="button" className="btn btn-secondary">
              Delete
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
