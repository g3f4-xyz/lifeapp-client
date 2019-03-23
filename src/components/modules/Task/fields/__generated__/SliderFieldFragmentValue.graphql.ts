/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SliderFieldFragmentValue$ref = any;
export type SliderFieldFragmentValue = {
    readonly progress: number;
    readonly " $refType": SliderFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SliderFieldFragmentValue",
    "type": "SliderValueType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "progress",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'a5f3b7c0b50f8cb3f6b1099b426417dd';
export default node;
