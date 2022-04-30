import dynamic from "next/dynamic";
import React from "react";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });
interface ResultComponentProps {
  result: string;
}

const ResultComponent = ({ result }: ResultComponentProps) => {
  return (
    <div className="break-all p-4 bg-white">
      {result && <ReactJson src={JSON.parse(result)} />}
    </div>
  );
};

export default ResultComponent;
