import React, { MutableRefObject, useEffect, useRef } from "react";

interface TextEditorProps {
  userText: string;
  setUserText: (userText: string) => void;
}

const TextEditor = ({ userText, setUserText }: TextEditorProps) => {
  const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(e.target.value);
  };
  return (
    <div className="w-full h-full text-black">
      <textarea
        className="p-4 shadow-lg shadow-black-600 rounded-xl h-72 w-full resize-none sm:h-full"
        name="userText"
        id="textarea"
        value={userText}
        onChange={handleOnChange}
        ref={textAreaRef}
      ></textarea>
    </div>
  );
};

export default TextEditor;
