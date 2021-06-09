import React,{ useState,ReactNode } from "react";

interface props{
  children : ReactNode,
}

export default function Contexts(props : props) : ReactNode{
  const [state, setState] = useState();

  return (
      <div className="m">
          {props.children}
      </div>
  );
}