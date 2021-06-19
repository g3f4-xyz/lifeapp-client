/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NotificationsGeneralFragment_data$ref = any;
export type NotificationsGeneralFragment_data = {
    readonly show: boolean;
    readonly vibrate: boolean;
    readonly " $refType": NotificationsGeneralFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "NotificationsGeneralFragment_data",
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
(node as any).hash = '08a623e3ce75fd9c9fea9a49fe4ad7eb';
export default node;
