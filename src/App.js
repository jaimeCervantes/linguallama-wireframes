import logo from './resources/red-logo_500.png';
import './App.css';
import { Stack } from '@mui/material';
import LlamaImageList from './LlamaImageList/LlamaImageList';
import LlamaTourDates from './LlamaTourDates/LlamaTourDates';

function App() {
  return (
    <>
      <header>
        <Stack>
          <img src={logo} alt="Logo"
            style={{
              display: 'block',
              maxInlineSize: '100%',
              alignSelf: 'center'
            }}/>
        </Stack>
      </header>
      
      <main>
        <div style={{marginTop: '16px', marginBottom: '16px', height: '1px'}}></div>
        
        <LlamaImageList></LlamaImageList>
        
        <LlamaTourDates></LlamaTourDates>
      </main>
    </>
  );
}

export default App;
