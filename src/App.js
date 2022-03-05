import logo from './resources/logo.png';
import './App.css';
import { Paper, Stack} from '@mui/material';

function App() {
  return (
    <>
      <Stack>
        <Paper elevation={2}
          style={{
            width: '300px',
            backgroundColor: '#BA0F30',
            textAlign: 'center',
            padding: '16px',
            alignSelf: 'center',
            boxSizing: 'content-box'
          }}
        >
          <img src={logo} alt="Logo" width={300} style={{ maxInlineSize: '100%' }}/>
        </Paper>
      </Stack>
    </>
  );
}

export default App;
