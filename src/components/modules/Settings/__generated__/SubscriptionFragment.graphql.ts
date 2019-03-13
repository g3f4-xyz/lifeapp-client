/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SubscriptionFragment$ref = any;
export type SubscriptionFragment = {
    readonly id: string;
    readonly userAgent: string;
    readonly userDeviceType: string;
    readonly " $refType": SubscriptionFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SubscriptionFragment",
    "type": "SubscriptionType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "userAgent",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "userDeviceType",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '1c0e44f400ec86f5d2ebde826c167c8e';
export default node;
