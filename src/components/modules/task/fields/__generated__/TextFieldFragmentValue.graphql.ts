/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TextFieldFragmentValue$ref = any;
export type TextFieldFragmentValue = {
    readonly text: string | null;
    readonly " $refType": TextFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TextFieldFragmentValue",
    "type": "TextFieldValue",
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
(node as any).hash = '49086ec67a12e6d1c2d5f8af2e738b26';
export default node;
