/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSubscriptionsListFragment = {
    readonly subscriptions: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"useSubscriptionFragment">;
    }>;
    readonly " $refType": "useSubscriptionsListFragment";
};
export type useSubscriptionsListFragment$data = useSubscriptionsListFragment;
export type useSubscriptionsListFragment$key = {
    readonly " $data"?: useSubscriptionsListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSubscriptionsListFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSubscriptionsListFragment",
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
                    "name": "useSubscriptionFragment"
                }
            ],
            "storageKey": null
        }
    ],
    "type": "NotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = 'b9421f3705e32a5a78e9002fbe1b54ad';
export default node;
