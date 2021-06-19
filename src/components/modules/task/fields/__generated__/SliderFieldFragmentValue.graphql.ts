/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SliderFieldFragmentValue$ref = any;
export type SliderFieldFragmentValue = {
    readonly progress: number | null;
    readonly " $refType": SliderFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SliderFieldFragmentValue",
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
(node as any).hash = 'cd4d2d4d1ff9a44f2c358669444a0ea3';
export default node;
