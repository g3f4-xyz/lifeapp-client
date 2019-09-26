/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TextFieldFragmentValue$ref = any;
export type TextFieldFragmentValue = {
    readonly text: string;
    readonly " $refType": TextFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TextFieldFragmentValue",
    "type": "TextValueType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '4aea032a5f6e70fe4d383564ab0496e7';
export default node;
