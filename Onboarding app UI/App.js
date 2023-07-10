import React, { useState } from "react";
import Onboard from "./components/Onboard";
import Home from "./components/Home";

export default function App() {

  const [showOnBoard, setShowOnboard] = useState(true);
  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  return (
    <>
      {
        showOnBoard && <Onboard handleDone={handleOnboardFinish} />
      }
      {
        !showOnBoard && <Home />
      }
    </>
  );
}