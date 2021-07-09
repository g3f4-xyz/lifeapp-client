/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useSliderFieldFragmentValue$ref = any;
export type useSliderFieldFragmentValue = {
    readonly progress: number | null;
    readonly " $refType": useSliderFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSliderFieldFragmentValue",
    "type": "SliderFieldValue",
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
(node as any).hash = '543cc7caa782c2f028b48b38af0c3ed5';
export default node;
