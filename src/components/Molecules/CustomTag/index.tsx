import theme from '../../../theme/theme'
import Typography from '../../Atoms/Typography'
type Props = {
    type: 1 | 2 | 3
    title: string
} 

const CustomTag = ({type,title}: Props) => {

    let tagStyle : object = {}
    let color : string

    switch(type){
        case 1:
            tagStyle = {
                backgroundColor: theme.palette.accent.lightGreen
            };
            color = theme.palette.accent.green
            break
        case 2:
            tagStyle = {
                backgroundColor: theme.palette.accent.lightYellow
            };
            color = theme.palette.accent.yellow
            break
        case 3:
            tagStyle = {
                backgroundColor: theme.palette.accent.lightBlue
            };
            color = theme.palette.accent.blue
            break
        default:
            tagStyle = {
                backgroundColor: theme.palette.accent.lightGreen
            };
            color = theme.palette.accent.green
    }

    tagStyle = {
        ...tagStyle,
        padding: "4px 12px",
        borderRadius: "4px",
      };

  return (
    <span style={tagStyle}>
        <Typography variant='caption1' color={color}>{title}</Typography>
    </span>
  );
};

export default CustomTag