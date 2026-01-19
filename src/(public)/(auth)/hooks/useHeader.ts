import { useState } from "react";

export function useHeader() {
  const [steps, setSteps] = useState<number>(0);

  const toggleShowComponent = (textButton: string) => {
    textButton === "createCount" ? setSteps(1) : setSteps(0);
  };

  return {
    steps,
    setSteps,
    toggleShowComponent,
  };
}
