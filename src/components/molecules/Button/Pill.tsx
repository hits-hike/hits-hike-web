import React from "react";
import ButtonProps from "../../atoms/Button/button";
import Text from "../../atoms/Text";
import PillWrapper from "../../atoms/Button/Pill";

function PillButton(props: ButtonProps) {
  return (
    <PillWrapper onClick={props.onClick}>
      <Text level={props.level} weight={props.weight} color={props.color}>
        {props.children}
      </Text>
    </PillWrapper>
  );
}

export default React.memo(PillButton);
