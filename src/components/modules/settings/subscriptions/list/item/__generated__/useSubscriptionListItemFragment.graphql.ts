/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionListItemFragment = {
    readonly id: string;
    readonly userAgent: string | null;
    readonly userDeviceType: string | null;
    readonly " $refType": "useSubscriptionListItemFragment";
};
export type useSubscriptionListItemFragment$data = useSubscriptionListItemFragment;
export type useSubscriptionListItemFragment$key = {
    readonly " $data"?: useSubscriptionListItemFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSubscriptionListItemFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSubscriptionListItemFragment",
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
(node as any).hash = '7505517e8baf367c6fd69a74fd2d69e5';
export default node;
