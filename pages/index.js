import Head from "next/head";
import { buttonStateValues } from "../data/buttonStateValues";
import { useState } from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

function App() {
  const [buttonState, setButtonState] = useState(buttonStateValues.default);

  const addLoadingHandler = useCallback(async () => {
    setButtonState(buttonStateValues.loading);
    console.log("loading");

    const response = await fetch("/api/randomBoolean").catch((error) =>
      console.log(error)
    );
    const result = await response.json();

    if (result.message == true) {
      setButtonState(buttonStateValues.success);
      console.log("success!");
    } else {
      setButtonState(buttonStateValues.error);
      console.log("failed!");
    }
    //console.log(result.message);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Next Evolution</title>
        <meta
          name="description"
          content="This is a Next Application built by Noble"
        />
      </Head>
      <div id="button-container">
        <button
          className={buttonState.class}
          onClick={addLoadingHandler}
          disabled={buttonState.disabled}
        >
          <span className="button-text">{buttonState.text}</span>

          <FontAwesomeIcon icon={buttonState.icon} />
        </button>
      </div>
    </Fragment>
  );
}

export default App;
