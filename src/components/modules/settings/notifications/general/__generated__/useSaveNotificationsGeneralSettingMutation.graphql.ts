/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useNotificationsGeneralFragment$ref = any;
export type SaveNotificationsGeneralSettingInput = {
    readonly clientMutationId?: string | null;
    readonly general?: SaveNotificationsGeneralSettingGeneralInput | null;
};
export type SaveNotificationsGeneralSettingGeneralInput = {
    readonly show: boolean;
    readonly vibrate: boolean;
};
export type useSaveNotificationsGeneralSettingMutationVariables = {
    readonly input: SaveNotificationsGeneralSettingInput;
};
export type useSaveNotificationsGeneralSettingMutationResponse = {
    readonly saveNotificationsGeneralSetting: {
        readonly savedGeneral: {
            readonly " $fragmentRefs": useNotificationsGeneralFragment$ref;
        } | null;
    };
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
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "SaveNotificationsGeneralSettingInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "useSaveNotificationsGeneralSettingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsGeneralSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsGeneralSettingOutput",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedGeneral",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "GeneralNotificationsSettings",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "useNotificationsGeneralFragment",
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
            "name": "useSaveNotificationsGeneralSettingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "saveNotificationsGeneralSetting",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SaveNotificationsGeneralSettingOutput",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "savedGeneral",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "GeneralNotificationsSettings",
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
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "useSaveNotificationsGeneralSettingMutation",
            "id": null,
            "text": "mutation useSaveNotificationsGeneralSettingMutation(\n  $input: SaveNotificationsGeneralSettingInput!\n) {\n  saveNotificationsGeneralSetting(input: $input) {\n    savedGeneral {\n      ...useNotificationsGeneralFragment\n    }\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'dd14412dbae95c9372db6d49e6263594';
export default node;
