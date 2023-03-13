import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardInstruments = ({dataInstrument}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={dataInstrument.img} alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataInstrument.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {dataInstrument.price} | stock: {dataInstrument.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardInstruments;