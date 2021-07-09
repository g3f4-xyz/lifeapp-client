/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useTextFieldFragmentValue$ref = any;
export type useTextFieldFragmentValue = {
    readonly text: string | null;
    readonly " $refType": useTextFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useTextFieldFragmentValue",
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
(node as any).hash = '33decd95f675984586ff8b41b8567747';
export default node;
