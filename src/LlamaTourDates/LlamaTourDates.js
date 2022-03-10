import { Typography, Grid, Button, Box } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

import tours from './tours';

export default function LlamaTourDates() {
  return (
    <section>
      <header className="fadeIn">
        <Typography 
          variant="h2" 
          sx={{
            marginTop: '32px',
            marginBottom: '32px',
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
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
        {tours.map((item, index) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Typography variant="h5" component="p" sx={{textAlign: 'center'}}>
              <Button
                className="fadeIn"
                variant="outlined"
                size="large"
                sx={{
                  cursor: 'pointer', 
                  opacity: 0,
                  textTransform: 'capitalize',
                  animationFillMode: 'forwards'
                }}
              >
                {item.title}
              </Button>
            </Typography>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{
          textAlign: 'center',
          marginTop: '50px',
          opacity: 0,
          animationFillMode: 'forwards'
        }}
        className="fadeIn"
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ height: '50px' }}
          startIcon={<DoorSlidingIcon />}
        >
          Enter site
        </Button>
      </Box>
    </section>
  );
}