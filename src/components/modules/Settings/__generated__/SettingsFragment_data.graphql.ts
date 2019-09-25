/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NotificationsGeneralFragment_data$ref = any;
type NotificationsTypesFragment_data$ref = any;
type SubscriptionsPagination_data$ref = any;
export type SettingsFragment_data$ref = any;
export type SettingsFragment_data = {
    readonly id: string;
    readonly ownerId: string;
    readonly notifications: {
        readonly id: string;
        readonly general: {
            readonly " $fragmentRefs": NotificationsGeneralFragment_data$ref;
        };
        readonly types: {
            readonly " $fragmentRefs": NotificationsTypesFragment_data$ref;
        };
        readonly " $fragmentRefs": SubscriptionsPagination_data$ref;
    };
    readonly " $refType": SettingsFragment_data$ref;
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
        "name": "SettingsFragment_data",
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
                                "name": "NotificationsGeneralFragment_data",
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
                                "name": "NotificationsTypesFragment_data",
                                "args": null
                            }
                        ]
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SubscriptionsPagination_data",
                        "args": null
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '8396c260cc1f87aac2230ec64782dae8';
export default node;
