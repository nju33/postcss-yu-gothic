import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

const template = {
  medium: readTemplate('medium'),
  bold: readTemplate('bold')
};

const defaultOpts = {
  weight: ['midium', 'bold']
};

let found = false;

export default postcss.plugin('postcss-yu-gothic', (opts = defaultOpts) => {
  opts = Object.assign({}, defaultOpts, opts);

  return root => {
    root.walkDecls(({parent, prop, value}) => {
      if (found) {
        return;
      }

      if (isFontDecl(prop) && hasYuGothic(value)) {
        if (opts.weight.indexOf('medium') > -1) {
          root.insertBefore(parent, template.medium);
        }

        if (opts.weight.indexOf('bold') > -1) {
          root.insertBefore(parent, template.bold);
        }

        found = true;
      }
    });
  };
});

export function readTemplate(basename) {
  const filepath = path.join(__dirname, `../template/${basename}.css`);
  const content = fs.readFileSync(filepath);
  return postcss.parse(content);
}

export function isFontDecl(prop) {
  return ['font', 'font-family'].indexOf(prop) > -1;
}

export function hasYuGothic(value) {
  return /Yu Gothic/.test(value);
}
