import logo from './resources/red-logo_500.png';
import './App.css';
import { Stack } from '@mui/material';
import LlamaImageList from './LlamaImageList/LlamaImageList';
import LlamaMasonry from './LlamaMasonry/LlamaMasonry';

function App() {
  return (
    <>
      <Stack>
        <img src={logo} alt="Logo"
          style={{
            display: 'block',
            maxInlineSize: '100%',
            alignSelf: 'center'
          }}/>
      </Stack>

      <div style={{marginTop: '16px', marginBottom: '16px', height: '1px'}}></div>

      <LlamaImageList></LlamaImageList>

      <h1>Another way to show photos</h1>
      <LlamaMasonry></LlamaMasonry>
    </>
  );
}

export default App;
