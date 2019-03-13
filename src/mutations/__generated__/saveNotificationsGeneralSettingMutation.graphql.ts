/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NotificationsGeneralFragment$ref = any;
export type saveNotificationsGeneralSettingMutationInput = {
    readonly general?: SettingsNotificationsGeneralInputType | null;
    readonly clientMutationId?: string | null;
};
export type SettingsNotificationsGeneralInputType = {
    readonly show: boolean;
    readonly vibrate: boolean;
};
export type saveNotificationsGeneralSettingMutationVariables = {
    readonly input: saveNotificationsGeneralSettingMutationInput;
};
export type saveNotificationsGeneralSettingMutationResponse = {
    readonly saveNotificationsGeneralSetting: ({
        readonly clientMutationId: string | null;
        readonly savedGeneral: {
            readonly " $fragmentRefs": NotificationsGeneralFragment$ref;
        };
    }) | null;
};
export type saveNotificationsGeneralSettingMutation = {
    readonly response: saveNotificationsGeneralSettingMutationResponse;
    readonly variables: saveNotificationsGeneralSettingMutationVariables;
};



/*
mutation saveNotificationsGeneralSettingMutation(
  $input: saveNotificationsGeneralSettingMutationInput!
) {
  saveNotificationsGeneralSetting(input: $input) {
    clientMutationId
    savedGeneral {
      ...NotificationsGeneralFragment
      id
    }
  }
}

fragment NotificationsGeneralFragment on NotificationsGeneralSettingType {
  show
  vibrate
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "saveNotificationsGeneralSettingMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "saveNotificationsGeneralSettingMutationInput!"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "saveNotificationsGeneralSettingMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsGeneralSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "saveNotificationsGeneralSettingMutationPayload",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedGeneral",
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
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "saveNotificationsGeneralSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsGeneralSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "saveNotificationsGeneralSettingMutationPayload",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedGeneral",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NotificationsGeneralSettingType",
                            "plural": false,
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
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "saveNotificationsGeneralSettingMutation",
            "id": null,
            "text": "mutation saveNotificationsGeneralSettingMutation(\n  $input: saveNotificationsGeneralSettingMutationInput!\n) {\n  saveNotificationsGeneralSetting(input: $input) {\n    clientMutationId\n    savedGeneral {\n      ...NotificationsGeneralFragment\n      id\n    }\n  }\n}\n\nfragment NotificationsGeneralFragment on NotificationsGeneralSettingType {\n  show\n  vibrate\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '20b31067b15de5920fa7f5342c26be7c';
export default node;
