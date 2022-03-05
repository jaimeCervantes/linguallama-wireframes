import logo from './resources/white-motto.png';
import './App.css';
import { Paper, Grid, Stack} from '@mui/material';

function App() {
  return (
    <>
      <Stack>
        <Paper elevation={2}
          style={{
            width: '400px',
            backgroundColor: '#BA0F30',
            textAlign: 'center',
            padding: '16px',
            alignSelf: 'center',
            boxSizing: 'content-box'
          }}
        >
          <img src={logo} alt="Logo" width={400} />
        </Paper>
      </Stack>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>

        </Grid>
      </Grid>
    </>
  );
}

export default App;
