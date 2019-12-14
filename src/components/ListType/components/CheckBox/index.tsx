import React, { useState } from "react";
import { SCheckBoxContainer } from "./styled";

interface IProps {
  label: string
  onClick: () => void
}

const CheckBox = (props: IProps) => {
  const [isChecked, setCheckState] = useState<boolean>(false);
  return (
    <SCheckBoxContainer onClick={() => {
      setCheckState(!isChecked) 
      props.onClick()
    }}>
      <input type="checkbox" checked={isChecked} readOnly />
      <span>{props.label}</span>
    </SCheckBoxContainer>
  );
};

export default CheckBox;
