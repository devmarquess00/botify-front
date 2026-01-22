import { useCallback, useState } from "react";

export function useLandingPage() {
  const [steps, setSteps] = useState<number>(0);
  const [faq1, setFaq1] = useState<boolean>(false);
  const [faq2, setFaq2] = useState<boolean>(false);
  const [faq3, setFaq3] = useState<boolean>(false);
  const [faq4, setFaq4] = useState<boolean>(false);

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const toggleShowDropdown = useCallback(() => {
    setIsShowDropdown((prev) => !prev);
  }, []);

  const toggleShowComponent = (textButton: string) => {
    textButton === "createCount" ? setSteps(1) : setSteps(0);
  };

  return {
    steps,
    setSteps,
    toggleShowComponent,
    faq1,
    setFaq1,
    faq2,
    setFaq2,
    faq3,
    setFaq3,
    faq4,
    setFaq4,
    toggleShowDropdown,
    isShowDropdown,
  };
}
