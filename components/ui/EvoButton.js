import { buttonStateValues } from "../../data/buttonStateValues";
import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EvoButton() {
  const [buttonState, setButtonState] = useState("default");

  const addLoadingHandler = useCallback(async () => {
    setButtonState("loading");
    //console.log("loading");

    const response = await fetch("/api/randomBoolean").catch((errorMsg) =>
      console.log(errorMsg)
    );
    const result = await response.json();

    result.message ? setButtonState("success") : setButtonState("error");
  }, []);

  // function checkButtonState() {
  //   if (buttonState === "default") {
  //     return buttonStateValues.default;
  //   } else if (buttonState === "loading") {
  //     return buttonStateValues.loading;
  //   } else if (buttonState === "success") {
  //     return buttonStateValues.success;
  //   } else if (buttonState === "error") {
  //     return buttonStateValues.error;
  //   }
  // }
  //const currentButtonValues = checkButtonState();
  const currentButtonValues = buttonStateValues[buttonState];

  return (
    <div id="button-container">
      <button
        className={currentButtonValues.class}
        onClick={addLoadingHandler}
        disabled={currentButtonValues.disabled}
      >
        <span className="button-text">{currentButtonValues.text}</span>

        <FontAwesomeIcon icon={currentButtonValues.icon} />
      </button>
    </div>
  );
}
