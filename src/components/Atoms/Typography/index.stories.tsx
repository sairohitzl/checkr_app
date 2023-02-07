import Typography from ".";

import { Story } from "@storybook/react";

export default {
    title: "Atoms/Typography",
    component: Typography,
  }  

  const Template: Story<typeof Typography> = (args) =>
   (<Typography {...args}>Typography</Typography>);

  export const Typography1 = Template.bind({})
  Typography1.args = {
    variant : 'h1',
    color : 'blue'
  }

  export const Typography2 = Template.bind({})
  Typography1.args = {
    variant : 'h2', 
    color : 'blue'
  }
  export const Typography3 = Template.bind({})
  Typography3.args = {
    variant : 'h3',
    color : 'blue'
  }
  export const Typography4 = Template.bind({})
  Typography4.args = {
    variant : 'h4',
    color : 'blue'
  }

  export const body1 = Template.bind({})
  body1.args = {
    variant : 'body1',
    color : 'purple'
  }

  export const body2 = Template.bind({})
  body2.args = {
    variant : 'body2',
    color : 'green'
  }

  export const subtitle1 = Template.bind({})
  subtitle1.args = {
    variant : 'subtitle1',
    color : 'black'
  }

  export const subtitle2 = Template.bind({})
  subtitle2.args = {
    variant : 'subtitle2',
    color : 'grey'
  }
  export const string1 = Template.bind({})
  string1.args = {
    variant : 'string',
    color : 'blue'
  }
