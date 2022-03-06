import logo from './resources/red-logo_500.png';
import './App.css';
import { Stack, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import cartagena from './resources/masonryImages/cartagena.jpg';
import zoomMeetingColor from './resources/masonryImages/zoom-meeting-color.jpg';
import plazaBolivar from './resources/masonryImages/plaza-bolivar-bogota.jpg';
import trajineraMexico from './resources/masonryImages/trajinera-mexico.jpg';
import zoomMeeting from './resources/masonryImages/zoom-meeting.jpg';
import llama from './resources/masonryImages/llama.jpg';

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
      
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        <Card>
          <CardMedia
            component="img"
            image={cartagena}
          />
          <CardContent>
            <Typography>
              Cartagena
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={llama}
          />
          <CardContent>
            <Typography>
              Llama
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={plazaBolivar}
          />
          <CardContent>
            <Typography>
              Plaza Bolivar, Bogota
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={trajineraMexico}
          />
          <CardContent>
            <Typography>
              Mexican Trajinera
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={zoomMeeting}
          />
          <CardContent>
            <Typography>
              Zoom Meeting [fecha]
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={zoomMeetingColor}
          />
          <CardContent>
            <Typography>
              Zoom Meeting [fecha]
            </Typography>
          </CardContent>
        </Card>
      </Masonry>
    </>
  );
}

export default App;
