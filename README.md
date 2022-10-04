# README

## chargingapp example project for ev.energy

This is a small sample project, built with expo for React/ReactNative.

The app displays a welcome screen and a screen that lists charging stations in an area for a given location.

### To run the app in a web browser, in a terminal window:

1. Check out the Git repo locally.
1. Run `yarn install`.
1. Run `npx expo start`.
1. Select `w` to `Run on web`.
1. Access the app in a browser at http://localhost:19006

### Given the scope and timeframe, there are a few caveats with this application:

1. Rather than using the device Location functionality, the selected location for finding charging stations is hard-coded to the geolocation of my home address, in the constant `DEFAULT_GEOLOCATION`.
1. Errors from API requests are caught and thrown, rather than displaying a user-friendly error message, using a Toast component or something similar.
1. There is no application routing implemented, and a simple toggle between two screens is done using a top-level state variable.
1. There is no unit or feature-level testing.
