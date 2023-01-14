import { useDispatch } from "react-redux";
import useCloseMenu from "../../hooks/useCloseMenu";
import useMenu from "../../hooks/useMenu";
import { toggleAddSalary } from "../../store/ui-Slice";
import CardMenu from "../UI/CardsMenu";

const HeaderMenu = ({ toogleMenuHandler }) => {
  const cardRef = useCloseMenu(toogleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={cardRef}>
      <li onClick={() => dispatch(toggleAddSalary())}>Add Payment</li>
    </CardMenu>
  );
};

export default HeaderMenu;
