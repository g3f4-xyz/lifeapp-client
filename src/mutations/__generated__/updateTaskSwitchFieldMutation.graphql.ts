/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type updateTaskSwitchFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: FieldIdEnum;
    readonly fieldValue: SwitchValueInputType;
    readonly clientMutationId?: string | null;
};
export type SwitchValueInputType = {
    readonly enabled: boolean;
};
export type updateTaskSwitchFieldMutationVariables = {
    readonly input: updateTaskSwitchFieldMutationInput;
};
export type updateTaskSwitchFieldMutationResponse = {
    readonly updateTaskSwitchField: ({
        readonly fieldId: FieldIdEnum;
        readonly taskId: string;
        readonly updatedFieldValue: {
            readonly enabled: boolean;
        };
    }) | null;
};
export type updateTaskSwitchFieldMutation = {
    readonly response: updateTaskSwitchFieldMutationResponse;
    readonly variables: updateTaskSwitchFieldMutationVariables;
};



/*
mutation updateTaskSwitchFieldMutation(
  $input: updateTaskSwitchFieldMutationInput!
) {
  updateTaskSwitchField(input: $input) {
    fieldId
    taskId
    updatedFieldValue {
      enabled
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskSwitchFieldMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskSwitchField",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskSwitchFieldMutationInput!"
                }
            ],
            "concreteType": "updateTaskSwitchFieldMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fieldId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "taskId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updatedFieldValue",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SwitchValueType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "enabled",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskSwitchFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskSwitchFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskSwitchFieldMutation",
            "id": null,
            "text": "mutation updateTaskSwitchFieldMutation(\n  $input: updateTaskSwitchFieldMutationInput!\n) {\n  updateTaskSwitchField(input: $input) {\n    fieldId\n    taskId\n    updatedFieldValue {\n      enabled\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0b3a998de0a8fae9cd01aada9491f03a';
export default node;
