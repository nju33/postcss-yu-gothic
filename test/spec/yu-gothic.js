import fs from 'fs';
import path from 'path';
import test from 'ava';
import postcss from 'postcss';
import yuGothic,
  {readTemplate, isFontDecl, hasYuGothic} from '../../lib/yu-gothic';

test('`readTemplate` read the template file', t => {
  const mediumPath = path.resolve(__dirname, '../../template/medium.css');
  const medium = fs.readFileSync(mediumPath, 'utf-8');
  t.is(readTemplate('medium').source.input.css, medium);
});

test('`isFontDecl` is true', t => {
  t.true(isFontDecl('font'));
  t.true(isFontDecl('font-family'));
});

test('`isFontDecl` is false', t => {
  t.true(!isFontDecl('color'));
});

test('`hasYuGothic` is true', t => {
  t.true(hasYuGothic('font "Yu Gothic" font'));
});

test('`hasYuGothic` is false', t => {
  t.false(hasYuGothic('font "YuGothic" font'));
});

test('Transform with default option', t => {
  const css = fs.readFileSync(path.resolve(__dirname, '../fixtures/test.css'));
  postcss([yuGothic])
    .process(css)
    .then(result => {
      t.regex(result.css, /Yu Gothic Medium/);
      t.regex(result.css, /Yu Gothic Bold/);
    });
});

test('Transform with weight:[\'medium\'] option', t => {
  const css = fs.readFileSync(path.resolve(__dirname, '../fixtures/test.css'));
  postcss([yuGothic({weight: ['medium']})])
    .process(css)
    .then(result => {
      t.regex(result.css, /Yu Gothic Medium/);
      t.notRegex(result.css, /Yu Gothic Bold/);
    });
});
