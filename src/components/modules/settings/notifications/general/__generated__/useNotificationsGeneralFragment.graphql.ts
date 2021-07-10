/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useNotificationsGeneralFragment = {
    readonly show: boolean;
    readonly vibrate: boolean;
    readonly " $refType": "useNotificationsGeneralFragment";
};
export type useNotificationsGeneralFragment$data = useNotificationsGeneralFragment;
export type useNotificationsGeneralFragment$key = {
    readonly " $data"?: useNotificationsGeneralFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useNotificationsGeneralFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useNotificationsGeneralFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "show",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vibrate",
            "storageKey": null
        }
    ],
    "type": "GeneralNotificationsSettings",
    "abstractKey": null
} as any;
(node as any).hash = '0c59e354b576093661a5efd3cf2c2390';
export default node;
