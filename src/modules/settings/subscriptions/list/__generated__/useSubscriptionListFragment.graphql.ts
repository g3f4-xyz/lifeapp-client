/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionListFragment = {
    readonly subscriptions: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"useSubscriptionListItemFragment">;
    }>;
    readonly " $refType": "useSubscriptionListFragment";
};
export type useSubscriptionListFragment$data = useSubscriptionListFragment;
export type useSubscriptionListFragment$key = {
    readonly " $data"?: useSubscriptionListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSubscriptionListFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSubscriptionListFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "NotificationSubscription",
            "kind": "LinkedField",
            "name": "subscriptions",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useSubscriptionListItemFragment"
                }
            ],
            "storageKey": null
        }
    ],
    "type": "NotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = '8cc91f0115cf316a7c677547e9ffc121';
export default node;
