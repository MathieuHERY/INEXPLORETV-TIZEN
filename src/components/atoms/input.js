import React, { useState } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

function Input(props) {
  const [textVisible, setTextVisible] = useState(false);

  const { ref, focused } = useFocusable({
    onBlur: () => inputBlur(),
    onEnterPress: () => inputFocus(),
  });

  const inputFocus = () => {
    setTextVisible(true);
    ref.current.focus();
  };

  const inputBlur = () => {
    setTextVisible(false);
    ref.current.blur();
  };

  const onChange = (value) => {
    props.onChange(value);
  };

  return (
    <input
      ref={ref}
      className={focused ? props.focusClassName : props.blurClassName}
      value={props.value}
      type={
        props.type === "password"
          ? textVisible
            ? "text"
            : props.type
          : props.type
      }
      placeholder={props.placeholder}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
}

export { Input };
