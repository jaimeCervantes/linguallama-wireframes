import cartagena from '../resources/images/cartagena.jpg';
import zoomMeetingColor from '../resources/images/zoom-meeting-color.jpg';
import plazaBolivar from '../resources/images/plaza-bolivar-bogota.jpg';
import trajineraMexico from '../resources/images/trajinera-mexico.jpg';
import zoomMeeting from '../resources/images/zoom-meeting.jpg';
import llama from '../resources/images/llama.jpg';

const masonryItems = [
  {
    title: 'Cartagena',
    img: cartagena,
    rows: 2,
    cols: 2,
  },
  {
    title: 'Llama',
    img: llama
  },
  {
    title: 'Zoom meeting color',
    img: zoomMeetingColor
  },
  {
    title: 'Plaza Bolivar',
    img: plazaBolivar,
    cols: 2
  },
  {
    title: 'Mexican Trajinera',
    img: trajineraMexico,
    cols: 2,
  },
  {
    title: 'Zoom Meeting [fecha]',
    img: zoomMeeting
  }
];

export default masonryItems;