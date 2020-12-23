const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared-lib', /* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "app2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/app2/src/app/app.component.ts',
        './CountryModule': './projects/app2/src/app/country/country.module.ts',
        './CityModule': './projects/app2/src/app/city/city.module.ts',
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
