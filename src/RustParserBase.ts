import { Parser, TokenStream } from "antlr4";

export default abstract class RustParserBase extends Parser {
    constructor(input: TokenStream) {
        super(input);
    }

    public next(expect: string) {
        return String.fromCharCode(this._input.LA(1)) == expect;
    }
}
