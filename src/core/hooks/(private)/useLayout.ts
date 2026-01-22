import { useCallback, useState } from "react";

export function useLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [popUp, setPopUp] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const togglePopUp = useCallback(() => {
    setPopUp((prev) => !prev);
  }, [popUp]);

  return {
    isOpen,
    toggleSidebar,
    popUp,
    togglePopUp,
  };
}
