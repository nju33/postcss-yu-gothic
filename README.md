# Postcss Yu Gothic

[![npm version](https://badge.fury.io/js/postcss-yu-gothic.svg)](https://badge.fury.io/js/postcss-yu-gothic)[![Build Status](https://travis-ci.org/nju33/postcss-yu-gothic.svg?branch=master)](https://travis-ci.org/nju33/postcss-yu-gothic)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Motivation

わざわざ游ゴシックについてグーグル検索しなくても、楽に使いたい  
Do not bother to use Google Search for Gothic but want to use it comfortably

このプラグインは[Chromeでも読みやすい游ゴシックを指定する方法](http://qiita.com/RinoTsuka/items/1e7b3ca1325e704bbc41)を参照して作られました。  
This plugin was created with reference to [link](http://qiita.com/RinoTsuka/items/1e7b3ca1325e704bbc41).

## Example

最初に現れた`Yu Gothic`を値に持ったセレクタの前に`@font-face`が挿入されます。  
`@Font-face` is inserted before the selector whose value is` Yu Gothic` which first appeared.

前...  
Before...

```css
body {
  font: 16px / 1.5 "Yu Gothic";
}

.class {
  font-family: "Yu Gothic";
}


```

後!!!  
After!!!

```css
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: normal;
}

@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Bold");
  font-weight: bold;
}

body {
  font: 16px / 1.5 "Yu Gothic";
}

.class {
  font-family: "Yu Gothic";
}

```

## Install

```bash
$ npm i --save-dev postcss-yu-gothic
# or `yarn add --dev postcss-yu-gothic`
```

## Transform with The [Postcss](https://github.com/postcss/postcss)

```js
import yuGothic from 'postcss-yu-gothic';
postcss([yuGothic])
  .process(cssContent)
  .then(result => {
    console.log(result.css);
  });

```

## Option

- `weight`: default:`['medium', 'bold']`  
  出力する`font-weight`を指定  
  Specify output `font-weight`

## License

MIT © nju33 <nju33.ki@gmail.com>
