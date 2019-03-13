/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ChoiceFieldFragmentValue$ref = any;
export type ChoiceFieldFragmentValue = {
    readonly id: string;
    readonly " $refType": ChoiceFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ChoiceFieldFragmentValue",
    "type": "ChoiceValueType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '3d615c0ba97941ad82833ff5ccf4f3f8';
export default node;
