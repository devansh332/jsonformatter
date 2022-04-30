import Link from "next/link";
import React from "react";

interface AnchorNavComponentProps {
  name: string;
  href: string;
}

const AnchorNavComponent = ({ name, href }: AnchorNavComponentProps) => {
  return (
    <div className="p-2 hover:bg-slate-400">
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </div>
  );
};

export default AnchorNavComponent;
