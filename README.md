# TUFTS HCI LAB Website


## Folder structure

```
|- docs             // The final Tufts HCI Lab website built by Vuepress
|- examples         // Vuepress source code of Tufts HCI Lab  
| |- .vuepress      // Vuepress settings
| | |- theme        // The local theme files of Ououe
| |- * (all other folders)  // All folders other than .vuepress contain the markdown files for each page.

```

## Usage (defined in package.json)
1. Install the node packages
```sh
yarn
```

1. Use local npm package (**Do this everytime after `yarn`**)
Use the source code of some node packages from this git repo instead of installing from npm
```sh
git checkout node_modules/vuepress-plugin-blog-multidir
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
