import { useState } from "react";

export function useLandingPage() {
  const [faq1, setFaq1] = useState<boolean>(false);
  const [faq2, setFaq2] = useState<boolean>(false);
  const [faq3, setFaq3] = useState<boolean>(false);
    const [faq4, setFaq4] = useState<boolean>(false);

  return {
    faq1,
    setFaq1,
    faq2,
    setFaq2,
    faq3,
    setFaq3,
    faq4, 
    setFaq4
  };
}
