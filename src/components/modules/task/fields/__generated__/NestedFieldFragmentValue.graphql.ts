/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NestedFieldFragmentValue$ref = any;
export type NestedFieldFragmentValue = {
    readonly ownValue: {
        readonly __typename: string;
    } | null;
    readonly " $refType": NestedFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "NestedFieldFragmentValue",
    "type": "NestedFieldValue",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "ownValue",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'af3f1e2e176f6f65a4a740d207b4cb71';
export default node;
