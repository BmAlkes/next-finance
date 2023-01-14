import { useState } from "react";

const useMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleMenuHandler = () => setIsVisible(!isVisible);

  return [isVisible, toogleMenuHandler];
};

export default useMenu;
