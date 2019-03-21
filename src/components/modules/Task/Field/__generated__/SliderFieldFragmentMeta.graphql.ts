/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type SliderFieldFragmentMeta$ref = any;
export type SliderFieldFragmentMeta = {
    readonly fieldType: FieldTypeEnum;
    readonly label: string;
    readonly disabled: boolean | null;
    readonly required: boolean;
    readonly max: number | null;
    readonly min: number | null;
    readonly step: number | null;
    readonly " $refType": SliderFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SliderFieldFragmentMeta",
    "type": "SliderMetaType",
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
            "name": "label",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "disabled",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "required",
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
            "name": "min",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "step",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '36b66358d3aea5cc5a05f342f1021d78';
export default node;
