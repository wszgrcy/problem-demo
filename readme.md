- main.ts test entry
- `RustParserBase.ts` `RustLexerBase.ts`  write with Java implementation
- other use `java -Xmx500M -cp "/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=TypeScript ~/xxx/grammars-v4/rust/xxx.g4 -o ~/xxx/grammars-v4/rust` to generate

# run
- npm i 
- npm start