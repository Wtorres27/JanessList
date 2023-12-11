//folder views/places file index.jsx
const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-4">
        <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className="text-left">{place.cuisines}</p>
        <div className="image-container">
          <img src={place.pic} alt={place.name} className="img-fluid" />
        </div>
        <p className="text-left">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
