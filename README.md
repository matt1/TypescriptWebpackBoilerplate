# TS Boiler Plate

Simple boiler-plate project that contains all of the required bits and pieces to
get a basic Typescript + Webpack project started for serving as a compiled
javascript bundle file.

## Features:
* Compile all Typescript files & modules (and their dependencies) into a single
`bundle.js` file.
* Copy all static resources from `src/**` into `dist/`
  * Ignores `script/` since this will be bundled.
  * This means any and all `*.html` (index.html, about.html etc) files and any
  sub directories (e.g. `style/`, `images/` etc) will be copied over as-is.

## Using this boiler plate for a new project

Simplest way to get a clean slate to start from is just to clone the existing
repo, delete the `.git/` dir and then re-initialise git in the new project.

- `git clone https://github.com/matt1/TsBoilerPlate.git MyNewProject`
- `cd MyNewProject`
- `rm -rf .git/`
- `git init`

## Set up

You'll need to install the dependencies for this project with the following
command (dependencies are specified in package.json).

`npm install`

## Building the compiled bundle

`npx webpack`

This will build the compiled bundle and move everything to `dist/`. Everything
in this directory could then be uploaded to a server for instance.

## Live Reload

`webpack-dev-server --open`

This will run a live-reload server available on `localhost:8080` for local
development.

## Testing

To regenerate the MD5 hashes for the files run

`npx webpack && find dist -type f -exec md5sum {} + > hashes.md5`

You can then check that generation still happens correctly with

`md5sum -c hashes.md5`
