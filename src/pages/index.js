import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import HotelOutsideSm from "../images/hotel-outside-sm.jpg"
import HotelOutside from "../images/hotel-outside.jpg"
import HotelDog from "../images/hotel-dog.jpg"
import HotelLounge from "../images/hotel-lounge.jpg"

import Pin from "../components/pin"

import GoogleMapReact from 'google-map-react';

const places = [
  { lat: 64.8231767, lng: -23.3846827, label: "Hotel Búðir" },
  { lat: 64.1405833, lng: -21.9407392, label: "Reykjavík" }
]

const createMapOptions = (maps) => {
  return {
    styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}],
    disableDefaultUI: true,
  }
}

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.lat,
      place.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

const IndexPage = () => (
  <Layout>  
    <div className="centred">
      <p>Eighteenth of July<br/>Two Thousand And Twenty One</p>
      <p>B&uacute;&eth;ir, Iceland</p>
    </div>
    <div className="ratio ratio--image">
      <div className="ratio__container">
        <div className="ratio__padding"></div>
      </div>
    </div>
    <div className="centred bordered">
      <p>If you haven’t already been in touch<br/>please let us know if you can attend</p>
      <p>
        <Link to="/rsvp" className="button">RSVP</Link>
      </p>
    </div>

    <div className="section">
      <h2>The Day</h2>
      <p>While it is a little too soon to have detailed timings, we&rsquo;d like to give you an overview of the day.</p>
      <p>The ceremony will be conducted outside, within a short distance of the venue. Please plan your outfit accordingly. The temperature in Iceland in July averages 14&deg;C (57&deg;F), and being on the coast it may be windy. There will plenty of daylight, as the sun will not set until gone 11pm.</p>
      <p>After the ceremony we will return to the venue. There will be a toast, followed by a meal and drinks. The remainder of the day will be spent in and around the venue and its bar. You are welcome to stay and celebrate with us as long as you like!</p>
    </div>

    <div className="section section--wide">
      <div className="gallery">
        <div className="gallery__item">
          <picture>
            <source srcSet={HotelOutside} media="(min-width: 37.5em)" />
            <img src={HotelOutsideSm} alt="" className="gallery__image" />
          </picture>
        </div>
        <div className="gallery__item">
          <picture>
            <img src={HotelDog} alt="" className="gallery__image" />
          </picture>
        </div>
        <div className="gallery__item">
          <picture>
            <img src={HotelLounge} alt="" className="gallery__image" />
          </picture>
        </div>
      </div>
    </div>

    <div className="section">
      <h2>The Venue</h2>
      <p>Hotel B&uacute;&eth;ir is located around a two hour drive from Reykjavik. Set on a beach on the edge of a lava field near the Sn&aelig;fellsj&ouml;kull glacier, extinct volcanoes tower over the road, herds of shaggy Icelandic ponies roam the hills and seals bob in the estuary.</p>
      <p>The restaurant is renowned for its local gourmet fish and lamb dishes, original starters and heavenly desserts. There is a well stocked bar with an extensive wine list and cocktail menu and plenty of lounge areas to relax with views of the stunning landscape.</p>
      <p>There are 28 double bedrooms with views that really steal the show, so we recommend requesting a room looking out to the inlet and mountains.</p>
      <p className="button-group">
        <a href="https://hotelbudir.is/" className="button">Hotel B&uacute;&eth;ir website</a>
        <a href="https://www.google.com/maps/place/Hotel+B%C3%BAdir/@64.8231767,-23.3868714,17z/data=!3m1!4b1!4m11!1m2!3m1!2sHotel+B%C3%BAdir!3m7!1s0x48d57f03ce3a45eb:0xef77b6fb0e9e3f1f!5m2!4m1!1i2!8m2!3d64.8231768!4d-23.3846824" className="button">View on Google Maps</a>
      </p>
    </div>

    
    <div className="ratio">
      <div className="ratio__container">
        <div className="ratio__padding"></div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD_LAu2sMxAhoWXemHEqSoeBEVpt3_1Loc' }}
        defaultCenter={{
          lat: 64.8542331,
          lng: -19.1079098
        }}
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
        options={createMapOptions}
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
        zoom={6}
      >
        {places.map(place => <Pin lat={place.lat} lng={place.lng} label={place.label} />)}
      </GoogleMapReact>
    </div>

    <div className="section">
      <h2>Travel</h2>
      <p>The main airport in Iceland is Keflav&iacute;k, which is about 45 minutes drive from Reykjav&iacute;k. Flights will be available to book from the middle of July 2020. We are planning on arriving at least a day before the wedding and staying in Reykjav&iacute;k prior to travelling to the venue.</p>
      <p>You are of course free to arrive whenever you like, if you plan on exploring Iceland before the celebration or indeed after. We will coordinate travel plans once we can book flights.</p>
      <p>Travel to and from the venue has been taken care of. We will depart from Reykjav&iacute;k on the morning of Sunday 18th July, 2021 and return to Reykjav&iacute;k the next day. If you are hiring your own car or would otherwise like to make your own travel arrangements, then please let us know.</p>
    </div>

    <div className="section">
      <h2>Accommodation</h2>
      <p>Hotel B&uacute;&eth;ir is the venue for the celebration, and is also where we will be staying for the night. There are a limited number of rooms at the hotel, so we would recommend booking as soon as possible if you would like to stay there. Reservations are not yet available via the website this far in advance, but you can get in contact with the hotel via email and mention our names to make a booking.</p>
      <p>There are a number of other guesthouses and cottages nearby, but due to the rural location you will need to your own transport to get to them as there is no taxi service available.</p>
      <p>We will be staying in Reykjav&iacute;k the night before the celebration, and will be selecting a hotel in due course. </p>
      <p className="button-group">
        <a href="mailto:budir@hotelbudir.is" className="button">Email Hotel B&uacute;&eth;ir</a>
      </p>
    </div>

    
  </Layout>
)

export default IndexPage
