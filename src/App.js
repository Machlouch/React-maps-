import  L from  "leaflet" ;
import test from './test.jpg' ; 
import './App.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css" ;
import "leaflet-control-geocoder/dist/Control.Geocoder.js" ;
import GeoCoder  from "./GeoCoder";
function App() {
  const position = [36.8065, 10.1815];
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
        
        <GeoCoder></GeoCoder>
  </MapContainer>
       
  
    </div> 
  );
}
let DefaultIcon = L.icon({
  iconUrl: "/location.png" ,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
 
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
