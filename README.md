# TUFTS HCI LAB Website


## Folder structure

```
|- docs             // The final Tufts HCI Lab website built by Vuepress
|- examples         // Vuepress source code of Tufts HCI Lab  
| |- .vuepress      // Vuepress settings
| | |- theme        // The local theme files of Ououe
|
|- blog-multidir    // The source code of package, just for reference.
                    // Not used for building anything
```

## Usage (defined in package.json)
1. Install the node packages
```sh
yarn
```

1. Run the server locally
```sh
yarn dev
```

1. Build the website to the target folder `docs`
```sh
yarn build
```

## License

[MIT](http://opensource.org/licenses/MIT)
