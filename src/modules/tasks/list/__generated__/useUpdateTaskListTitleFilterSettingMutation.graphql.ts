/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskListTitleFilterSettingInput = {
    title?: string | null;
    clientMutationId?: string | null;
};
export type useUpdateTaskListTitleFilterSettingMutationVariables = {
    input: UpdateTaskListTitleFilterSettingInput;
};
export type useUpdateTaskListTitleFilterSettingMutationResponse = {
    readonly updateTaskListTitleFilterSetting: {
        readonly clientMutationId: string | null;
        readonly title: string | null;
    } | null;
};
export type useUpdateTaskListTitleFilterSettingMutation = {
    readonly response: useUpdateTaskListTitleFilterSettingMutationResponse;
    readonly variables: useUpdateTaskListTitleFilterSettingMutationVariables;
};



/*
mutation useUpdateTaskListTitleFilterSettingMutation(
  $input: UpdateTaskListTitleFilterSettingInput!
) {
  updateTaskListTitleFilterSetting(input: $input) {
    clientMutationId
    title
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
            "concreteType": "UpdateTaskListTitleFilterSettingPayload",
            "kind": "LinkedField",
            "name": "updateTaskListTitleFilterSetting",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clientMutationId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
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
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "fe11ac7f1e3080eee8f1beba374598dc",
            "id": null,
            "metadata": {},
            "name": "useUpdateTaskListTitleFilterSettingMutation",
            "operationKind": "mutation",
            "text": "mutation useUpdateTaskListTitleFilterSettingMutation(\n  $input: UpdateTaskListTitleFilterSettingInput!\n) {\n  updateTaskListTitleFilterSetting(input: $input) {\n    clientMutationId\n    title\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b523952ec4a78b524557525e7b02d4e4';
export default node;
