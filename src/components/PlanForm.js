import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ExtensionIcon from '@mui/icons-material/Extension';
import Switch from '@mui/material/Switch';
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";




const PlanCard = ({icon, name, price}) => {
  const [checked, setChecked] = React.useState(true);

    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <img src={icon} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            {price}
          </Typography>          
        </CardContent>
      </Card>

    )

}


export default function PlanForm() {
  
    return (
        <>
        <Box sx={{ marginLeft: "50px", padding: "10px",minWidth: "600px" }}
>
            <Typography>
                Select Your Plan
            </Typography>
            <Typography>
                You have the option of monthly and yearly billing.
            </Typography>
            
            <Grid container spacing={3}>
            <Grid item size={3} >
                <PlanCard icon={Arcade} name={"Arcade"} price={"$9/mo"} />
            </Grid>
            <Grid item size={3}>
                <PlanCard icon={Advanced} name={ "Advanced"} price={"12/mo"} />
            </Grid>
            <Grid item size={3}>
                <PlanCard icon={Pro} name={ "Pro"} price={"$15/mo"} />
            </Grid>
            </Grid>
            <div>

            {/* Monthly<Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> yearly */}
    </div>
    

    <Button>Go Back</Button>
    <Button>Next Step</Button>

        </Box>
        </>
    )    
}