import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ErrorComponent from "../src/components/ErrorComponent";
import LogoSvgComponent from "../src/components/icons/LogoSvgComponent";
import { NavigationComponent } from "../src/components/NavigationComponent";
import OptionComponent from "../src/components/OptionComponent";
import ResultComponent from "../src/components/ResultComponent";
import TextEditor from "../src/components/TextEditor";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [userText, setUserText] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="h-screen bg-gray-600 text-white">
      <Head>
        <title>JSON Formatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex align-middle justify-between w-full h-fit py-2 pr-3">
        <div className="pl-2 w-8">
          <LogoSvgComponent className="h-12 w-12" />
        </div>
        <div>
          <NavigationComponent />
        </div>
      </div>
      <div className="flex w-full h-4/6 p-4 justify-center">
        <div className="grow">
          <div className="flex text-2xl mb-2 justify-center ">
            <span>JSON</span>
          </div>
          <TextEditor userText={userText} setUserText={setUserText} />
        </div>
        <div className="flex flex-col p-2">
          <div className="flex flex-col h-full justify-center align-middle">
            <OptionComponent
              userText={userText}
              result={result}
              setResult={setResult}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </div>
        </div>
        <div className=" p-2 w-1/2 ">
          <div className="flex text-2xl mb-2 justify-center">
            <span> Formatted JSON</span>
          </div>
          <div className="w-full h-full shadow-lg shadow-black-900 rounded-2xl  overflow-auto bg-white">
            <ResultComponent result={result} />
          </div>
        </div>
      </div>
      <div className="flex mt-12 justify-center">
        <ErrorComponent errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default Home;
