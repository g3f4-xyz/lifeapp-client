/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTextFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly helperText: string | null;
    readonly label: string | null;
    readonly inputType: string | null;
    readonly min: number | null;
    readonly max: number | null;
    readonly maxLength: number | null;
    readonly minLength: number | null;
    readonly required: boolean | null;
    readonly " $refType": "useTextFieldFragmentMeta";
};
export type useTextFieldFragmentMeta$data = useTextFieldFragmentMeta;
export type useTextFieldFragmentMeta$key = {
    readonly " $data"?: useTextFieldFragmentMeta$data;
    readonly " $fragmentRefs": FragmentRefs<"useTextFieldFragmentMeta">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTextFieldFragmentMeta",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldType",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "helperText",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "inputType",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "min",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "max",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "maxLength",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "minLength",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "required",
            "storageKey": null
        }
    ],
    "type": "TextFieldMeta",
    "abstractKey": null
} as any;
(node as any).hash = 'df971d4cd0c6bc588ecefa0e4597c2cc';
export default node;
