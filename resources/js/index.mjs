import "/resources/css/styles.css";

const rive = require("@rive-app/canvas");

// ----
// LOCAL RIVE EXAMPLE
// ----

// const layout = new rive.Layout({
//   fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
//   alignment: rive.Alignment.Center,
// });

const canvas = document.getElementById("canvas")

const riveInstance = new rive.Rive({
  src: "/files/lyft_tap_to_add.riv",
  stateMachines: "portfolio",
  canvas: canvas,
  autoplay: true,
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
});

// Resize the drawing surface if the window resizes
// window.addEventListener(
//   "resize",
//   () => {
//     riveInstance.resizeDrawingSurfaceToCanvas();
//   },
//   false
// );

// ---------------------------------

// ----
// HOSTED RIVE EXAMPLE
// Comment out the code above and uncomment the code below.
// ----

// const riveHostedInstance = new rive.Rive({
//   // Hosted .riv asset.
//   src: "https://cdn.rive.app/animations/vehicles.riv",
//   stateMachines: "bumpy",
//   canvas: riveCanvas,
//   autoplay: true,
//   onLoad: () => {
//     riveHostedInstance.resizeDrawingSurfaceToCanvas();
//   }
// });