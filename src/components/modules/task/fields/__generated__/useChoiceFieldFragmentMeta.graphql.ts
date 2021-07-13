/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useChoiceFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly helperText: string | null;
    readonly label: string | null;
    readonly defaultValue: string | null;
    readonly options: ReadonlyArray<{
        readonly text: string;
        readonly value: string;
    }>;
    readonly required: boolean | null;
    readonly " $refType": "useChoiceFieldFragmentMeta";
};
export type useChoiceFieldFragmentMeta$data = useChoiceFieldFragmentMeta;
export type useChoiceFieldFragmentMeta$key = {
    readonly " $data"?: useChoiceFieldFragmentMeta$data;
    readonly " $fragmentRefs": FragmentRefs<"useChoiceFieldFragmentMeta">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useChoiceFieldFragmentMeta",
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
            "name": "defaultValue",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": "FieldMetaOptions",
            "kind": "LinkedField",
            "name": "options",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                }
            ],
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
    "type": "ChoiceFieldMeta",
    "abstractKey": null
} as any;
(node as any).hash = '006846a262bfc86b978f03fb63c39d2d';
export default node;
