import {Grid} from '@mui/material'
import InfoLabel from '../../Molecules/InfoLabel'
import UserInfo, {UserInfoProps} from '../../Molecules/UserInfo'
import React,{useState} from 'react'


type Props = {
    title: string,
    data: Array<UserInfoProps>,
    show: boolean;
}

const DropDown = (props: Props) => {
    const [show,setShow] = useState<boolean>(props.show)
  return (
    
    <Grid
      container
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
      }}
    >
    <Grid item xs={12}>
        <InfoLabel
            title={props.title}
            icon={show? "upArrow" : "downArrow"}
            handleClick={()=>{setShow(!show)}}
            />
   </Grid>
   {show && (
    <Grid item container spacing={2} sx={{padding: "20px 16px"}}>
        {props.data.map((item)=> (
            <Grid item xs={4}>
                <UserInfo
                    title={item.title}
                    name={item.name}
                    icon={item.icon}/>
                    </Grid>
        ))}
        </Grid>

   )}

    </Grid>
  );
};

export default DropDown