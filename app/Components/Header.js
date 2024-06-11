import React from "react";
import Nav from "./Navigation";
import { useContext } from "react";
import { MyContext } from "@/Helper/Context";

const Header = (props) => {
  const numReal = useContext(MyContext);
  return (
    <>
      <div>This is Header</div>
      <Nav num={props.num} />
      <div>{numReal}</div>
    </>
  );
};

export default Header;
