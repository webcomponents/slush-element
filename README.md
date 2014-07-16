# Slush Generator<br> for Custom Elements<br>

[![NPM version](https://badge.fury.io/js/slush-custom-element.svg)](http://badge.fury.io/js/slush-custom-element) [![Dependency Status](https://david-dm.org/obetomuniz/slush-custom-element.svg?theme=shields.io)](https://david-dm.org/obetomuniz/slush-custom-element)

> A Slush Generator that provides a functional boilerplate to easily create Custom Elements using [Polymer](http://www.polymer-project.org/), [X-Tag](http://x-tags.org/) or [VanillaJS](http://vanilla-js.com/).

> All templates are based in the boilerplates authored by the [WebComponent.org team](https://github.com/webcomponents/):

> * [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate)
> * [X-Tag Boilerplate](https://github.com/webcomponents/x-tag-boilerplate)
> * [VanillaJS Boilerplate](https://github.com/webcomponents/element-boilerplate)

## Install

Install this generator using NPM:

```sh
$ [sudo] npm install -g slush-custom-element
```

## Getting Started

There are two different generators available.

* The first one used to scaffold out new **individual elements**:

    ```sh
$ slush custom-element
    ```

    ```
[?] What do you want to use?
[?] What's the name of your element?
[?] Do you want to include lifecycle callbacks?
    ```

    Which will generate the following file::

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

* The second one is used to scaffold an **entire project**:

    ```sh
$ slush custom-element:repo
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


## License

[MIT License](http://webcomponentsorg.mit-license.org/) © WebComponents.org