/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NotificationsGeneralFragment$ref = any;
type NotificationsTypesFragment$ref = any;
type SubscriptionsPagination$ref = any;
export type SettingsFragment$ref = any;
export type SettingsFragment = {
    readonly id: string;
    readonly ownerId: string;
    readonly notifications: {
        readonly id: string;
        readonly general: {
            readonly " $fragmentRefs": NotificationsGeneralFragment$ref;
        };
        readonly types: {
            readonly " $fragmentRefs": NotificationsTypesFragment$ref;
        };
        readonly " $fragmentRefs": SubscriptionsPagination$ref;
    };
    readonly " $refType": SettingsFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "SettingsFragment",
        "type": "SettingsType",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "ownerId",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "notifications",
                "storageKey": null,
                "args": null,
                "concreteType": "NotificationsType",
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "general",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NotificationsGeneralSettingType",
                        "plural": false,
                        "selections": [
                            {
                                "kind": "FragmentSpread",
                                "name": "NotificationsGeneralFragment",
                                "args": null
                            }
                        ]
                    },
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "types",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NotificationsTypesSettingType",
                        "plural": false,
                        "selections": [
                            {
                                "kind": "FragmentSpread",
                                "name": "NotificationsTypesFragment",
                                "args": null
                            }
                        ]
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SubscriptionsPagination",
                        "args": null
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '3d57379225a214a1872a433ef396b429';
export default node;
