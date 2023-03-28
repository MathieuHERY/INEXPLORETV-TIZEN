import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

function HomeButton(props) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => onPress(),
  });

  const onPress = () => {
    props.onPress();
  };

  return (
    <div
      ref={ref}
      className={focused ? props.focusClassName : props.blurClassName}
    >
      <span>{props.text}</span>
    </div>
  );
}

export { HomeButton };
