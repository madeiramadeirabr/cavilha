<p align="center">
  <img width="300px" src="./docs/logo.jpg">
</p>

<h1 align="center">Cavilha CSS</h1>

<p align="center">The CSS implementation of Cavilha Design System</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@madeiramadeira/cavilha">
    <img alt="" src="https://img.shields.io/npm/v/@madeiramadeirabr/cavilha/.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/madeiramadeirabr/cavilha/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/madeiramadeirabr/cavilha/.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/madeiramadeirabr/cavilha//commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/madeiramadeirabr/cavilha/.svg">
  </a>
  <a aria-label="license" href="https://github.com/madeiramadeirabr/cavilha//blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/madeiramadeirabr/cavilha/.svg" alt="">
  </a>
</p>

## Install
This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@madeiramadeira/cavilha` with this command:

```sh
$ npm install --save @madeiramadeira/cavilha
```

## Usage
The included source files are written and using [SASS] syntax. After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "@madeiramadeira/cavilha/sass/default.sass";
// or dark theme
@import "@madeiramadeira/cavilha/sass/dark.sass";
```

You can import individual Cavilha components directly from the `@madeiramadeira/cavilha` package:

```scss
@import "@madeiramadeira/cavilha/sass/components/grid/index.sass";
@import "@madeiramadeira/cavilha/sass/components/button/index.sass";
```

## Development
See [DEVELOP.md](./docs/DEVELOP.md) for development docs.

## License

[MIT](./LICENSE.txt) &copy; [GitHub](https://github.com/)


[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[cavilha]: https://www.npmjs.com/package/@madeiramadeira/cavilha
[sass]: http://sass-lang.com/
