import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loader(props) {
  return (
    <TailSpin
      height={props.height}
      width={props.width}
      color={props.color}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
