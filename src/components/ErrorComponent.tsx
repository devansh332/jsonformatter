import React from "react";

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent = ({ errorMessage }: ErrorComponentProps) => {
  return (
    <div className="text-red-400">
      {errorMessage && <pre>{errorMessage}</pre>}
    </div>
  );
};

export default ErrorComponent;
