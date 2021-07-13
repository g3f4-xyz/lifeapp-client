/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSliderFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly label: string | null;
    readonly disabled: boolean | null;
    readonly required: boolean | null;
    readonly max: number | null;
    readonly min: number | null;
    readonly step: number | null;
    readonly " $refType": "useSliderFieldFragmentMeta";
};
export type useSliderFieldFragmentMeta$data = useSliderFieldFragmentMeta;
export type useSliderFieldFragmentMeta$key = {
    readonly " $data"?: useSliderFieldFragmentMeta$data;
    readonly " $fragmentRefs": FragmentRefs<"useSliderFieldFragmentMeta">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSliderFieldFragmentMeta",
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
            "name": "label",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "disabled",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "required",
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
            "name": "min",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "step",
            "storageKey": null
        }
    ],
    "type": "SliderFieldMeta",
    "abstractKey": null
} as any;
(node as any).hash = 'ff6c8daa7e46a87fda2f73af78b8a5f6';
export default node;
