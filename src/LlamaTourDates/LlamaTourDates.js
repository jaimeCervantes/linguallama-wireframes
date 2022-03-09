import { Typography, Grid, Button, Box } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grow from '@mui/material/Grow';
import tours from './tours';

export default function LlamaTourDates() {
  return (
    <section>
      <header>
        <Typography variant="h2" sx={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
          Tour Dates
          <Button
            sx={{ marginLeft: '16px', height: '50px'}}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<CalendarMonthIcon fontSize="large"/>}
          >
            Book now  +1 201 838 0698
          </Button>
        </Typography>
      </header>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {tours.map((item) => (
          <Grow in={true}>
            <Grid item xs={12} sm={6} key={item.title} sx={{ cursor: 'pointer' }}>
              <Typography variant="h5" component="p" sx={{textAlign: 'center'}}>
                <Button variant="outlined" size="large">{item.title}</Button>
              </Typography>
            </Grid>
          </Grow>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', marginTop: '50px'}}>
        <Button
          variant="contained"
          color="primary"
          size="large"
        >
          Enter site
        </Button>
      </Box>
    </section>
  );
}