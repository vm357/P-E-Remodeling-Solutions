// slot-images.js — maps an image-slot id to its baked-in asset file.
// Generated from the photos dropped into the live preview so the images
// travel with the project (downloads, share links) instead of living only
// in the .image-slots.state.json sidecar.
(function () {
  var AVAILABLE = {
    "hero-home": 1,
    "about-story": 1,
    "svc-hero": 1,
    "svc-kitchen": 1,
    "svc-bathroom": 1,
    "svc-basement": 1,
    "svc-flooring": 1,
    "svc-painting": 1,
    "svc-lighting": 1,
    "svc-patios": 1,
    "svc-sunrooms": 1,
    "svc-fencing": 1,
    "svc-outdoor-kitchens": 1,
    "svc-fireplaces": 1,
    "pf-kitchen": 1,
    "pf-bath": 1,
    "pf-basement": 1,
    "pf-patio": 1,
    "pp-sunroom": 1,
    "pp-flooring": 1,
    "pp-mudroom": 1,
    "pp-fencing": 1,
    "pp-fireplace": 1
  };
  // Returns the asset path when a baked file exists for this id, else "" so
  // the slot falls back to its empty placeholder rather than a broken image.
  window.PE_SLOT_SRC = function (id) {
    return AVAILABLE[id] ? "assets/slot-images/" + id + ".webp" : "";
  };
})();
