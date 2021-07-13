/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTextFieldFragmentValue = {
    readonly text: string | null;
    readonly " $refType": "useTextFieldFragmentValue";
};
export type useTextFieldFragmentValue$data = useTextFieldFragmentValue;
export type useTextFieldFragmentValue$key = {
    readonly " $data"?: useTextFieldFragmentValue$data;
    readonly " $fragmentRefs": FragmentRefs<"useTextFieldFragmentValue">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTextFieldFragmentValue",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
        }
    ],
    "type": "TextFieldValue",
    "abstractKey": null
} as any;
(node as any).hash = '33decd95f675984586ff8b41b8567747';
export default node;
