import Modal from "../../UI/Modal";
import styles from "../../../Components/UI/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditCategory } from "../../../store/ui-Slice";
import { useState } from "react";
import useUpdateDoc from "../../../hooks/useUpdateDocs";
import useDeleteDoc from "../../../hooks/useDeleteDoc";

const EditCategory = () => {
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();

  const editCategoryHandler = useUpdateDoc();
  const deleteCategoryHandler = useDeleteDoc();

  const editForm = (e) => {
    e.preventDefault();
    if (!title || !percentage) return;

    editCategoryHandler("categories", category.id, {
      title,
      percentage,
    });

    dispatch(toggleEditCategory(null));
    setTitle("");
    setPercentage(0);
  };

  const deleteCategory = async (e) => {
    e.preventDefault();
    deleteCategoryHandler("categories", category.id);
    dispatch(toggleEditCategory(null));
    setTitle("");
    setPercentage(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleEditCategory(null))}
      title="Edit Category"
    >
      <div>
        <form onSubmit={editForm}>
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={deleteCategory}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
