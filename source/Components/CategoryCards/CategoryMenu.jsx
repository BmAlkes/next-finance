import CardMenu from "../UI/CardsMenu";
import useCloseMenu from "../../hooks/useCloseMenu";

const CategoryMenu = ({ toogleMenuHandler }) => {
  const menuRef = useCloseMenu(toogleMenuHandler);

  return (
    <CardMenu ref={menuRef}>
      <li>Edit</li>
      <li>Add</li>
      <li>Discount</li>
      <li>Transfer</li>
    </CardMenu>
  );
};

export default CategoryMenu;
