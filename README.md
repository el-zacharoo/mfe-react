# Microfrontends using Vite

A simple example of Module Federate using Vite, React, Material UI, and React Router.

## Quick Start

### Start the remote module

```bash
cd remote
yarn build
yarn preview
```

N.B. While remote modules can be run dynamically (`yarn start`), they can only be accessed when served from the `/dist` folder using `yarn preview`.

### Run the host module

```bash
cd host
yarn start
```

N.B. Unlike the remote module, the `host` module can be run dynamically (`yarn start` command).

## Development

Each module should be developed and tested independently to take advantage of Vite's development features.

Local integration testing can be undertaken by following the steps above for each remote module included in the the build.

