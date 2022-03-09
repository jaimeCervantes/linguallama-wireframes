import logo from './resources/red-logo_500.png';
import './App.css';
import { Stack, Divider } from '@mui/material';
import LlamaImageList from './LlamaImageList/LlamaImageList';
import LlamaTourDates from './LlamaTourDates/LlamaTourDates';

function App() {
  return (
    <>
      <header style={{ padding: '16px'}}>
        <Stack>
          <img src={logo} alt="Logo"
            style={{
              display: 'block',
              maxInlineSize: '100%',
              alignSelf: 'center'
            }}/>
        </Stack>
      </header>
      
      <main style={{ padding: '16px' }}>
        
        <LlamaImageList></LlamaImageList>
        
        <LlamaTourDates></LlamaTourDates>
      </main>
      <Divider sx={{ marginTop: '24px' }}></Divider>
      <footer
        style={{
          paddingTop: '16px',
          paddingBottom: '16px',
          textAlign: 'center',
          backgroundColor: "#110000",
          color: 'white'
        }}>
         Copyright ©{new Date().getFullYear()} Lingua. All rights reserved
      </footer>
    </>
  );
}

export default App;
