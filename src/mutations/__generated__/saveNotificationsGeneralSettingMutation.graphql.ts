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
export type saveNotificationsGeneralSettingMutationVariables = {
    readonly input: SaveNotificationsGeneralSettingInput;
};
export type saveNotificationsGeneralSettingMutationResponse = {
    readonly saveNotificationsGeneralSetting: {
        readonly clientMutationId: string | null;
        readonly savedGeneral: {
            readonly " $fragmentRefs": useNotificationsGeneralFragment$ref;
        } | null;
    };
};
export type saveNotificationsGeneralSettingMutation = {
    readonly response: saveNotificationsGeneralSettingMutationResponse;
    readonly variables: saveNotificationsGeneralSettingMutationVariables;
};



/*
mutation saveNotificationsGeneralSettingMutation(
  $input: SaveNotificationsGeneralSettingInput!
) {
  saveNotificationsGeneralSetting(input: $input) {
    clientMutationId
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
                        (v2 /*: any*/),
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
            "name": "saveNotificationsGeneralSettingMutation",
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
                        (v2 /*: any*/),
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
            "name": "saveNotificationsGeneralSettingMutation",
            "id": null,
            "text": "mutation saveNotificationsGeneralSettingMutation(\n  $input: SaveNotificationsGeneralSettingInput!\n) {\n  saveNotificationsGeneralSetting(input: $input) {\n    clientMutationId\n    savedGeneral {\n      ...useNotificationsGeneralFragment\n    }\n  }\n}\n\nfragment useNotificationsGeneralFragment on GeneralNotificationsSettings {\n  show\n  vibrate\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5230e5030c316f0b82ce7d957e939fb8';
export default node;
