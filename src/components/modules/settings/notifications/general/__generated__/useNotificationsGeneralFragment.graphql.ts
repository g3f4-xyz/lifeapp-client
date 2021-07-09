/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useNotificationsGeneralFragment$ref = any;
export type useNotificationsGeneralFragment = {
    readonly show: boolean;
    readonly vibrate: boolean;
    readonly " $refType": useNotificationsGeneralFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useNotificationsGeneralFragment",
    "type": "GeneralNotificationsSettings",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "show",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "vibrate",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '0c59e354b576093661a5efd3cf2c2390';
export default node;
