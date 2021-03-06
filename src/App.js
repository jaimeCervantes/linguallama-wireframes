import logo from './resources/red-logo_500.png';
import './App.css';
import { Stack } from '@mui/material';
import LlamaImageList from './LlamaImageList/LlamaImageList';
import LlamaTourDates from './LlamaTourDates/LlamaTourDates';

function App() {
  return (
    <>
      <header style={{ padding: '16px'}}>
        <Stack>
          <img src={logo} alt="Logo" className="logo backInDown"/>
        </Stack>
      </header>
      
      <main style={{ padding: '16px', paddingTop: 0 }}>
        
        <div className="fadeIn">
          <LlamaImageList></LlamaImageList>
        </div>

        
      </main>

      <div className="fadeIn">
        <LlamaTourDates></LlamaTourDates>
      </div>
      
      <footer className="footer fadeIn">
         Copyright ©{new Date().getFullYear()} Lingua. All rights reserved
      </footer>
    </>
  );
}

export default App;
