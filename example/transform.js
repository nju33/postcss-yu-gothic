import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import yuGothic from '../lib/yu-gothic';

const cssPath = path.resolve(__dirname, '../test/fixtures/test.css');
const css = fs.readFileSync(cssPath);

postcss([yuGothic])
  .process(css)
  .then(result => {
    console.log(result.css);
  });
