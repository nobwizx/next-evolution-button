import Head from "next/head";
import { Fragment } from "react";
import EvoButton from "../components/ui/EvoButton";

function App() {
  return (
    <Fragment>
      <Head>
        <title>Next Evolution</title>
        <meta
          name="description"
          content="This is a Next Application built by Noble"
        />
      </Head>
      <EvoButton />
    </Fragment>
  );
}

export default App;
