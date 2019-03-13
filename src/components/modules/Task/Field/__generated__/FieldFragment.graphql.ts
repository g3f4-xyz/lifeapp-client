/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type ChoiceFieldFragment$ref = any;
type NestedFieldFragment$ref = any;
type SwitchFieldFragment$ref = any;
type TextFieldFragment$ref = any;
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SWITCH" | "TEXT";
export type FieldFragment$ref = any;
export type FieldFragment = {
    readonly fieldType: FieldTypeEnum;
    readonly " $fragmentRefs": SwitchFieldFragment$ref & ChoiceFieldFragment$ref & TextFieldFragment$ref & NestedFieldFragment$ref;
    readonly " $refType": FieldFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "FieldFragment",
    "type": "FieldType",
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
            "kind": "FragmentSpread",
            "name": "SwitchFieldFragment",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "ChoiceFieldFragment",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "TextFieldFragment",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "NestedFieldFragment",
            "args": null
        }
    ]
} as any);
(node as any).hash = '55003f4e6ce5e3d01e55293d4a308bb4';
export default node;