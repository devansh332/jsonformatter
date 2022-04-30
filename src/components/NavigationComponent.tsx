import React from "react";
import AnchorNavComponent from "./AnchorNavComponent";
import InstallPWA from "./InstallPwa";

export const NavigationComponent = () => {
  return (
    <div className="flex flex-row-reverse justify-between">
      <InstallPWA />
      <AnchorNavComponent name={"home"} href={"/"} />
    </div>
  );
};
