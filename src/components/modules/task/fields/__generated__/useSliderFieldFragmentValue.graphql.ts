/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSliderFieldFragmentValue = {
    readonly progress: number | null;
    readonly " $refType": "useSliderFieldFragmentValue";
};
export type useSliderFieldFragmentValue$data = useSliderFieldFragmentValue;
export type useSliderFieldFragmentValue$key = {
    readonly " $data"?: useSliderFieldFragmentValue$data;
    readonly " $fragmentRefs": FragmentRefs<"useSliderFieldFragmentValue">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSliderFieldFragmentValue",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "progress",
            "storageKey": null
        }
    ],
    "type": "SliderFieldValue",
    "abstractKey": null
} as any;
(node as any).hash = '543cc7caa782c2f028b48b38af0c3ed5';
export default node;
