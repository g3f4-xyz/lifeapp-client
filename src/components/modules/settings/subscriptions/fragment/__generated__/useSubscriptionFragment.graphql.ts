/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useSubscriptionFragment$ref = any;
export type useSubscriptionFragment = {
    readonly id: string;
    readonly userAgent: string | null;
    readonly userDeviceType: string | null;
    readonly " $refType": useSubscriptionFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSubscriptionFragment",
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
(node as any).hash = '9a6ce5371f1b25cb0b7f19467b04e393';
export default node;
