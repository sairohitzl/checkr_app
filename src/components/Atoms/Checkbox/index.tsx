import { Checkbox } from '@mui/material';

type Props = {
    checked?: boolean;
}

const CheckBox = ({checked}: Props) => {

  return (
    
    <Checkbox checked={checked} color={'primary'}/>
    
  )
}

export default CheckBox