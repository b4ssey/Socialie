import React from "react";
import "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import Authentication from "./Authentication";
import Overview from "./Overview";

const Root = () => {
  const { token } = useSelector((state) => state.user);
  return <>{!token ? <Authentication /> : <Overview />}</>;
};

export default Root;
