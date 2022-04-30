import React, { useState } from "react";
import { getErrorMessage } from "../comman/utils";
import TickSvgComponent from "./icons/TickSvgComponent";

interface OptionComponentProps {
  userText: string;
  result: string;
  errorMessage: string;
  setResult: (result: string) => void;
  setErrorMessage: (error: string) => void;
}

const OptionComponent = ({
  userText,
  result,
  errorMessage,
  setResult,
  setErrorMessage,
}: OptionComponentProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const onFormatHandler = () => {
    console.log("format");
    const currentUserText = userText;
    if (currentUserText) {
      try {
        const formattedUserText = JSON.stringify(
          JSON.parse(currentUserText),
          null,
          3
        );
        setResult(formattedUserText);
        setErrorMessage("");
      } catch (e) {
        const message = getErrorMessage(e);
        setErrorMessage(message);
      }
    } else {
      setErrorMessage("Please enter some text");
    }
  };
  const onCopyHandler = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      <button
        className="shadow-lg shadow-black-600 text-black m-2 p-2"
        onClick={onFormatHandler}
      >
        <span>Format</span>
      </button>
      {result && !errorMessage && (
        <button
          className="shadow-lg shadow-black-600 text-black m-2 p-2"
          onClick={onCopyHandler}
        >
          <div className="flex ">
            <span>{isCopied ? "Copied" : "Copy"}</span>
            {isCopied && <TickSvgComponent />}
          </div>
        </button>
      )}
    </div>
  );
};

export default OptionComponent;
