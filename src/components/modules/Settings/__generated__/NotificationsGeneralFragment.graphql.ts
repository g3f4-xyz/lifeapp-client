/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NotificationsGeneralFragment$ref = any;
export type NotificationsGeneralFragment = {
    readonly show: boolean;
    readonly vibrate: boolean;
    readonly " $refType": NotificationsGeneralFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "NotificationsGeneralFragment",
    "type": "NotificationsGeneralSettingType",
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
(node as any).hash = '7949b416ae87cbeff7e571c6def1a4de';
export default node;
