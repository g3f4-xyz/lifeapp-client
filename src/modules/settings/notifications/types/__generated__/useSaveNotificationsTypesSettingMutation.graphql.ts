/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SaveNotificationsTypesSettingInput = {
    types?: Array<SaveNotificationsTypesSettingTypesInput> | null;
    clientMutationId?: string | null;
};
export type SaveNotificationsTypesSettingTypesInput = {
    enabled: boolean;
    taskTypeId: string;
};
export type useSaveNotificationsTypesSettingMutationVariables = {
    input: SaveNotificationsTypesSettingInput;
};
export type useSaveNotificationsTypesSettingMutationResponse = {
    readonly saveNotificationsTypesSetting: {
        readonly savedTypes: ReadonlyArray<{
            readonly enabled: boolean;
            readonly taskTypeId: string;
        }> | null;
    } | null;
};
export type useSaveNotificationsTypesSettingMutation = {
    readonly response: useSaveNotificationsTypesSettingMutationResponse;
    readonly variables: useSaveNotificationsTypesSettingMutationVariables;
};



/*
mutation useSaveNotificationsTypesSettingMutation(
  $input: SaveNotificationsTypesSettingInput!
) {
  saveNotificationsTypesSetting(input: $input) {
    savedTypes {
      enabled
      taskTypeId
    }
  }
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
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "SaveNotificationsTypesSettingPayload",
            "kind": "LinkedField",
            "name": "saveNotificationsTypesSetting",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaveNotificationsTypesSettingTypesOutput",
                    "kind": "LinkedField",
                    "name": "savedTypes",
                    "plural": true,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "enabled",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "taskTypeId",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useSaveNotificationsTypesSettingMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useSaveNotificationsTypesSettingMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "3f94a7fd7975542abee25b6573141c2e",
            "id": null,
            "metadata": {},
            "name": "useSaveNotificationsTypesSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useSaveNotificationsTypesSettingMutation(\n  $input: SaveNotificationsTypesSettingInput!\n) {\n  saveNotificationsTypesSetting(input: $input) {\n    savedTypes {\n      enabled\n      taskTypeId\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '06c078f529c8c943142959c8d244a796';
export default node;
