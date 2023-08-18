import { CharStream, CommonTokenStream } from 'antlr4';
import * as fs from 'fs';
import * as path from 'path';
import { default as Lexer } from './RustLexer';
import { default as Parser } from './RustParser';

function main() {
  let content = fs.readFileSync(path.join(__dirname, './ssrust_ssserver.rs'), { encoding: 'utf-8' });
  const chars = new CharStream(content);
  const lexer = new Lexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new Parser(tokens) as Parser;
  console.time('run');
  const tree = (parser as any)['crate']();
  console.timeEnd('run'); // slow 23s
}
main();
