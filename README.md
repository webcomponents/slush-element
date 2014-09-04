# Slush Generator<br> for Custom Elements<br>

[![NPM version](http://img.shields.io/npm/v/slush-element.svg?style=flat)](http://npmjs.org/slush-element)
[![NPM downloads](http://img.shields.io/npm/dm/slush-element.svg?style=flat)](http://npmjs.org/slush-element)
[![Build Status](http://img.shields.io/travis/webcomponents/slush-element/master.svg?style=flat)](https://travis-ci.org/webcomponents/slush-element)
[![Dependency Status](http://img.shields.io/david/webcomponents/slush-element.svg?style=flat)](https://david-dm.org/webcomponents/slush-element)

![Web Components + Slush](https://cloud.githubusercontent.com/assets/1680157/3633653/b7ba9750-0eed-11e4-848f-3d4eb7e2ea08.png)

> A Slush Generator that provides a functional boilerplate to easily create Custom Elements using [Polymer](http://www.polymer-project.org/), [X-Tag](http://x-tags.org/) or [VanillaJS](http://vanilla-js.com/).

> All templates are based in the boilerplates authored by the [WebComponents.org team](https://github.com/webcomponents/):

> * [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate)
> * [X-Tag Boilerplate](https://github.com/webcomponents/x-tag-boilerplate)
> * [VanillaJS Boilerplate](https://github.com/webcomponents/element-boilerplate)

## Install

Install this generator using NPM:

```sh
$ [sudo] npm install -g slush-element
```

## Getting Started

There are two different generators available.

* The first one used to scaffold out new **individual elements**:

    ```sh
$ slush element
    ```

    ```
[?] What do you want to use?
[?] What's the name of your element?
[?] Do you want to include lifecycle callbacks?
    ```

    Which will generate the following file::

    ```
.
└── my-element.html
    ```

* The second one is used to scaffold an **entire project**:

    ```sh
$ slush element:repo
    ```

    ```
[?] What do you want to use?
[?] What's the GitHub repository?
[?] What's your GitHub username?
[?] What's the name of your element?
[?] How would you describe the element?
[?] Do you want to include lifecycle callbacks?
[?] Do you want to include some useful Gulp tasks?
    ```

    Which will generate the following project structure with npm and bower dependencies installed:

    ```
.
├── .editorconfig
├── .gitignore
├── bower.json
├── bower_components/
├── package.json
├── index.html
├── node_modules/
├── gulpfile.js
├── src/my-element.html
└── README.md
    ```

> _**Note**: files will be generated in the current directory, so be sure to change to a new directory before running those commands if you don't want to overwrite existing files._

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Team

This project is maintained by these people and a bunch of awesome [contributors](https://github.com/webcomponents/generator-element/graphs/contributors).

[![Beto Muniz](https://2.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd)](https://github.com/obetomuniz) | [![Zeno Rocha](https://2.gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93)](https://github.com/zenorocha)
--- | --- | --- | --- | ---
[Beto Muniz](https://github.com/obetomuniz) | [Zeno Rocha](https://github.com/zenorocha)

## License

[MIT License](http://webcomponentsorg.mit-license.org/) © WebComponents.org
