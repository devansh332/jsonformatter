import React from "react";
import Adsense from "./Adsense";

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent = ({ errorMessage }: ErrorComponentProps) => {
  return (
    <>
      <Adsense />
      {errorMessage && (
        <div className="text-red-400 border-2 w-full flex justify-center h-20 align-middle items-center mx-12">
          <pre>{errorMessage}</pre>
        </div>
      )}
    </>
  );
};

export default ErrorComponent;
