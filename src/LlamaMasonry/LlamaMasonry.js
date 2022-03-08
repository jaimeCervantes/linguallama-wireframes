import Masonry from '@mui/lab/Masonry';
import {  Card, CardMedia, CardContent, Typography } from '@mui/material';
import mansonryItems from './items';

export default function LlamaMasonry() {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={1}>
      {mansonryItems.map((item) => {
        return (
          <Card key={item.img}>
            <CardMedia
              component="img"
              image={item.img}
            />
            <CardContent>
              <Typography>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Masonry>
  );
}