import theme from '../../../theme/theme'
import Typography from '../../Atoms/Typography'
type Props = {
    type: 'green' | 'yellow' | 'blue'
    title: string
} 

const CustomTag = (props: Props) => {
    const {type,title} = props
    let tagStyle : object = {}
    let color : string

    switch(type){
        case 'green':
            tagStyle = {
                backgroundColor: theme.palette.accent.lightGreen
            };
            color = theme.palette.accent.green
            break
        case 'yellow':
            tagStyle = {
                backgroundColor: theme.palette.accent.lightYellow
            };
            color = theme.palette.accent.yellow
            break
        case 'blue':
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
        <Typography variant='overline' color={color}>{title}</Typography>
    </span>
  );
};

export default CustomTag