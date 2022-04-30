import React from "react";

interface ResultComponentProps {
  result: string;
}

const ResultComponent = ({ result }: ResultComponentProps) => {
  return (
    <div className="break-all p-4 ">
      {result && <pre className="break-all">{result}</pre>}
    </div>
  );
};

export default ResultComponent;
