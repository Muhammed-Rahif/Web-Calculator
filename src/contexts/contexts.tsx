import React,{ useContext, useState } from "react";

interface props{
  children : React.ReactNode,
}

export default function Contexts(props : props) : React.ReactNode{
  const [state, setState] = useState();

  return (
      <div>
          {props.children}
      </div>
  );
}