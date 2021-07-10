/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionFragment = {
    readonly id: string;
    readonly userAgent: string | null;
    readonly userDeviceType: string | null;
    readonly " $refType": "useSubscriptionFragment";
};
export type useSubscriptionFragment$data = useSubscriptionFragment;
export type useSubscriptionFragment$key = {
    readonly " $data"?: useSubscriptionFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSubscriptionFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSubscriptionFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userAgent",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userDeviceType",
            "storageKey": null
        }
    ],
    "type": "NotificationSubscription",
    "abstractKey": null
} as any;
(node as any).hash = '9a6ce5371f1b25cb0b7f19467b04e393';
export default node;
