import CardMenu from "../UI/CardsMenu";
import useCloseMenu from "../../hooks/useCloseMenu";
import { useDispatch } from "react-redux";
import { toggleAddAmount } from "../../store/ui-Slice";

const CategoryMenu = ({ toogleMenuHandler, data }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li>Edit</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Add</li>
      <li>Discount</li>
      <li>Transfer</li>
    </CardMenu>
  );
};

export default CategoryMenu;
