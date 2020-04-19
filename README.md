# TS Boiler Plate

Simple boiler-plate project that contains all of the required bits and pieces to
get a basic Typescript + Webpack project started for serving as a compiled
javascript bundle file.

## Installation

`npm install copy-webpack-plugin ts-loader typescript`

## Building the compiled bundle

`npx webpack`

This will build the compiled bundle and move everything to `dist/`. Everything
in this directory could then be uploaded to a server for instance.

## Live Reload

`webpack-dev-server --open`

This will run a live-reload server available on `localhost:8080` for local
development.
