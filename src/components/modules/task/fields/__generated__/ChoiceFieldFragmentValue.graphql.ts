/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ChoiceFieldFragmentValue$ref = any;
export type ChoiceFieldFragmentValue = {
    readonly id: string | null;
    readonly " $refType": ChoiceFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ChoiceFieldFragmentValue",
    "type": "ChoiceFieldValue",
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
(node as any).hash = 'de8f44f7cd970cdf5b26e46b60987e58';
export default node;
