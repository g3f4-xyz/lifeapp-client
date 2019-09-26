/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SubscriptionFragment_data$ref = any;
export type SubscriptionFragment_data = {
    readonly id: string;
    readonly userAgent: string;
    readonly userDeviceType: string;
    readonly " $refType": SubscriptionFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SubscriptionFragment_data",
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
(node as any).hash = 'c072dc47b197d39aeeb70300eb7869c0';
export default node;
