/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SWITCH" | "TEXT";
export type TextFieldFragmentMeta$ref = any;
export type TextFieldFragmentMeta = {
    readonly fieldType: FieldTypeEnum;
    readonly helperText: string;
    readonly label: string;
    readonly inputType: string | null;
    readonly min: number | null;
    readonly max: number | null;
    readonly maxLength: number | null;
    readonly minLength: number | null;
    readonly required: boolean;
    readonly " $refType": TextFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TextFieldFragmentMeta",
    "type": "TextMetaType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "fieldType",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "helperText",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "label",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "inputType",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "min",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "max",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "maxLength",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "minLength",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "required",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'b79748c916fe0880fad9817ca83f6371';
export default node;
