/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useChoiceFieldFragmentValue = {
    readonly id: string | null;
    readonly " $refType": "useChoiceFieldFragmentValue";
};
export type useChoiceFieldFragmentValue$data = useChoiceFieldFragmentValue;
export type useChoiceFieldFragmentValue$key = {
    readonly " $data"?: useChoiceFieldFragmentValue$data;
    readonly " $fragmentRefs": FragmentRefs<"useChoiceFieldFragmentValue">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useChoiceFieldFragmentValue",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        }
    ],
    "type": "ChoiceFieldValue",
    "abstractKey": null
} as any;
(node as any).hash = '71dcbb150284e3c57fd2c94bd4db8e99';
export default node;
