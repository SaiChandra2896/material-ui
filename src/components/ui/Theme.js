import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#3871c0';
const arcOrange = '#FFBA60'

export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    },
    typography:{
        h3:{
            fontWeight: 200
        }
    }
})