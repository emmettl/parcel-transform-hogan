import { Transformer } from '@parcel/plugin';
import { compile } from "hogan.js";
const transformer = new Transformer({

    async transform({ asset }) {
        const code = await asset.getCode();
        const output = `
        import { Template } from "hogan.js";
        export default new Template(${compile(code, { asString: true })});
        `;
        asset.setCode(output);
        asset.type = "js";
        return [asset];
    }
});
export default transformer;
exports = transformer;