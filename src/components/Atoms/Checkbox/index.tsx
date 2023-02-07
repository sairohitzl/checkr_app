import { Checkbox } from "@mui/material";
import { SyntheticEvent } from "react";

type Props = {
  checked?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  onChange?: (e: SyntheticEvent) => void;
};

const CheckBox = (props: Props) => {
  const { checked, onClick, onChange } = props;
  return (
    <Checkbox
      checked={checked}
      onClick={onClick}
      color={"primary"}
      onChange={onChange}
    />
  );
};

export default CheckBox;
