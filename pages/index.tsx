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
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="javascript json format formatter formatjson best"
        />
        <meta
          name="description"
          content="Format ugly Json with Best Tool out there, on of the best javascript's Object formatting tool"
        ></meta>
        <meta name="author" content="Devansh Saini" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div className="flex align-middle justify-between w-full h-fit py-2 pr-3">
        <div className="pl-2 w-8">
          <LogoSvgComponent className="h-12 w-12" />
        </div>
        <div>
          <NavigationComponent />
        </div>
      </div>
      <div className="flex flex-col w-full p-4 justify-center sm:h-4/6 sm:flex-row">
        <div className="sm:grow sm:my-10">
          <div className="flex text-2xl mb-2 justify-center ">
            <span>JSON</span>
          </div>
          <TextEditor userText={userText} setUserText={setUserText} />
        </div>
        <div className="flex  p-2  ">
          <div className="flex flex-row h-full justify-center align-middle">
            <OptionComponent
              userText={userText}
              result={result}
              setResult={setResult}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </div>
        </div>
        <div className=" p-2 w-full h-fit sm:w-1/2 sm:h-full  ">
          <div className=" hidden text-2xl mb-2 justify-center sm:flex">
            <span> Formatted JSON</span>
          </div>
          <div className="w-full h-72 shadow-lg shadow-black-900 rounded-2xl  overflow-auto bg-white sm:h-full">
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
