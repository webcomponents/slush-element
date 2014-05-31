# &lt;<%= repository %>&gt;

> A bare minimum custom element starter-kit using [X-Tag](http://x-tags.org/).
>
> Looking for a working example? Check [hello-world-xtag](https://github.com/webcomponents/hello-world-xtag).

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install <%= repository %> --save
```

Or [download as ZIP](https://github.com/<%= username %>/<%= repository %>/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/<%= repository %>/dist/<%= element %>.html">
    ```

3. Start using it!

    ```html
    <<%= element %>></<%= element %>>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`unicorn()`   | None.        | Nothing.    | Magic stuff appears.

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ gulp server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ gulp build
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/<%= username %>/<%= repository %>/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
