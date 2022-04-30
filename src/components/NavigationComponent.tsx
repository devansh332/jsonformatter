import React from "react";
import AnchorNavComponent from "./AnchorNavComponent";

export const NavigationComponent = () => {
  return (
    <div className="flex flex-row-reverse justify-between">
      <AnchorNavComponent name={"home"} href={"/"} />
    </div>
  );
};
