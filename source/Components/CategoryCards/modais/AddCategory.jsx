import { useState } from "react";
import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddCategory } from "../../../store/ui-Slice";
import useAddDoc from "../../../hooks/useAddDoc";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  const addCategoryDoc = useAddDoc();

  const addCategory = (e) => {
    e.preventDefault();

    if (!title || !percentage) return;

    addCategoryDoc("categories", {
      title,
      percentage: Number(percentage),
      amount: 0,
    });
    dispatch(toggleAddCategory(null));
    setTitle("");
    setPercentage("");
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title="Add New Category"
    >
      <div>
        <form onSubmit={addCategory}>
          <div className={styles["label-input"]}>
            <label htmlFor="title" className="p">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: Essencial"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles["label-input"]}>
            <label htmlFor="percentage">Allocated percentage</label>
            <input
              type="text"
              id="percentage"
              name="percentage"
              placeholder="%"
              onChange={(e) => setPercentage(e.target.value)}
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
