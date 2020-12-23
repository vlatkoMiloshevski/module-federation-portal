const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared-lib', /* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "app1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/app1/src/app/app.component.ts',
        './FlightsModule': './projects/app1/src/app/flights/flights.module.ts',
        './BookingModule': './projects/app1/src/app/booking/booking.module.ts',
      },

      // For hosts (please adjust)
      remotes: {
        "shell": "shell@http://localhost:5000/remoteEntry.js",

      },

      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors()
      }

    }),
    sharedMappings.getPlugin(),
  ],
};
