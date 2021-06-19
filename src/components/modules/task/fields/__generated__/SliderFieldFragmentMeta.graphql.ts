/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SliderFieldFragmentMeta$ref = any;
export type SliderFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly label: string | null;
    readonly disabled: boolean | null;
    readonly required: boolean | null;
    readonly max: number | null;
    readonly min: number | null;
    readonly step: number | null;
    readonly " $refType": SliderFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SliderFieldFragmentMeta",
    "type": "SliderFieldMeta",
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
(node as any).hash = '96643ed0c35884ec9be0393887fb6b7a';
export default node;
