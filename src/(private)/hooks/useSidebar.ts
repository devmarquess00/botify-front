import { useCallback, useState } from "react";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return {
    isOpen,
    toggleSidebar,
  };
}
