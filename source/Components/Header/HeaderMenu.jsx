import useCloseMenu from "../../hooks/useCloseMenu";
import useMenu from "../../hooks/useMenu";
import CardMenu from "../UI/CardsMenu";

const HeaderMenu = ({ toogleMenuHandler }) => {
  const cardRef = useCloseMenu(toogleMenuHandler);

  return (
    <CardMenu ref={cardRef}>
      <li>Add Payment</li>
    </CardMenu>
  );
};

export default HeaderMenu;
