/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SubscriptionFragment_data$ref = any;
export type SubscriptionFragment_data = {
    readonly id: string;
    readonly userAgent: string | null;
    readonly userDeviceType: string | null;
    readonly " $refType": SubscriptionFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SubscriptionFragment_data",
    "type": "NotificationSubscription",
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
(node as any).hash = 'f39a0b5923f15f5f7237d8031924a906';
export default node;
