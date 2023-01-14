import CardMenu from "../UI/CardsMenu";
import useCloseMenu from "../../hooks/useCloseMenu";
import { useDispatch } from "react-redux";
import {
  toggleAddAmount,
  toggleEditCategory,
  toggleSubtractAmount,
  toggleTransferAmount,
} from "../../store/ui-Slice";

const CategoryMenu = ({ toogleMenuHandler, data }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))}>Edit</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Add</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))}>Discount</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))}>Transfer</li>
    </CardMenu>
  );
};

export default CategoryMenu;
