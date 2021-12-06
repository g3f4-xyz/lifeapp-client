/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SaveNotificationsGeneralSettingInput = {
    general?: SettingsNotificationsGeneralInput | null;
    clientMutationId?: string | null;
};
export type SettingsNotificationsGeneralInput = {
    show: boolean;
    vibrate: boolean;
};
export type useSaveNotificationsGeneralSettingMutationVariables = {
    input: SaveNotificationsGeneralSettingInput;
};
export type useSaveNotificationsGeneralSettingMutationResponse = {
    readonly saveNotificationsGeneralSetting: {
        readonly savedGeneral: {
            readonly " $fragmentRefs": FragmentRefs<"useNotificationsGeneralFragment">;
        };
    } | null;
};
export type useSaveNotificationsGeneralSettingMutation = {
    readonly response: useSaveNotificationsGeneralSettingMutationResponse;
    readonly variables: useSaveNotificationsGeneralSettingMutationVariables;
};



/*
mutation useSaveNotificationsGeneralSettingMutation(
  $input: SaveNotificationsGeneralSettingInput!
) {
  saveNotificationsGeneralSetting(input: $input) {
    savedGeneral {
      ...useNotificationsGeneralFragment
    }
  }
}

fragment useNotificationsGeneralFragment on GeneralNotificationsSettings {
  show
  vibrate
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useSaveNotificationsGeneralSettingMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsGeneralSettingPayload",
                    "kind": "LinkedField",
                    "name": "saveNotificationsGeneralSetting",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "GeneralNotificationsSettings",
                            "kind": "LinkedField",
                            "name": "savedGeneral",
                            "plural": false,
                            "selections": [
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "useNotificationsGeneralFragment"
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useSaveNotificationsGeneralSettingMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsGeneralSettingPayload",
                    "kind": "LinkedField",
                    "name": "saveNotificationsGeneralSetting",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "GeneralNotificationsSettings",
                            "kind": "LinkedField",
                            "name": "savedGeneral",
                            "plural": false,
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
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "d2a826afb9d02c8101821814c334d16c",
            "id": null,
            "metadata": {},
            "name": "useSaveNotificationsGeneralSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useSaveNotificationsGeneralSettingMutation(\n  $input: SaveNotificationsGeneralSettingInput!\n) {\n  saveNotificationsGeneralSetting(input: $input) {\n    savedGeneral {\n      ...useNotificationsGeneralFragment\n    }\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n"
        }
    } as any;
})();
(node as any).hash = 'dd14412dbae95c9372db6d49e6263594';
export default node;
