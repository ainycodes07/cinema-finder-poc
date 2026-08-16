import { Chip, IconButton, ListItem, ListItemText } from "@mui/material";
import { MdCall, MdOutlineLocationOn } from 'react-icons/md';
import { format } from 'd3-format';

const dispatchMapSnapTo = (lat, lng) => {
  // This will dispatch the `map.snapTo` event which will trigger a listener on the
  // respective active map component to zoom to the latitude and longitude passed
  console.log('triggering `map.snapTo` event with args: ', `lat: ${lat}, lng: ${lng}`)
  dispatchEvent(new CustomEvent('map.snapTo', { detail: { lat, lng } }))
}

//Add cinema-red or white styling to the list item icons

const CinemaListItem = ({ name, lat, lng, phoneNumber, distance, ...otherProps }) => {
  return (
    <ListItem>
      <ListItemText>
        {name}
        {distance && (<Chip size="small" sx={{ ml: 1 }} label={`${format(',.1f')(distance)} km`} />)}
      </ListItemText>
      {
        phoneNumber && (
          <IconButton component='a' href={`tel:${phoneNumber}`} sx={{ color: '#e50914' }} >
            <MdCall />
          </IconButton>
        )
      }
      <IconButton sx={{ color: "#ffffff" }} onClick={() => dispatchMapSnapTo(lat, lng)} target="_blank">
        <MdOutlineLocationOn />
      </IconButton>
    </ListItem>
  );
};
export default CinemaListItem;