# vue-test-loader example

Example project demonstrating vue-test-loader

## Usage

```
npm install
```

Run the webpack test build.

```
npm run build:test
```

This runs webpack in watch mode, which extracts code from <test> blocks into .spec.js files.

Then run Jest in watch mode:

```
npm run unit:watch
```

Now you can edit the test blocks inside your single file components, and they'll be extracted to `.spec.js` files and run by Jest.
