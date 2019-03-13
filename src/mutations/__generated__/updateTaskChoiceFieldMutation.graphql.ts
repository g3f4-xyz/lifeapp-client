/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "STATUS" | "TITLE";
export type updateTaskChoiceFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: FieldIdEnum;
    readonly fieldValue: ChoiceValueInputType;
    readonly clientMutationId?: string | null;
};
export type ChoiceValueInputType = {
    readonly id?: string | null;
};
export type updateTaskChoiceFieldMutationVariables = {
    readonly input: updateTaskChoiceFieldMutationInput;
};
export type updateTaskChoiceFieldMutationResponse = {
    readonly updateTaskChoiceField: ({
        readonly fieldId: FieldIdEnum;
        readonly taskId: string;
        readonly updatedFieldValue: {
            readonly id: string;
        };
    }) | null;
};
export type updateTaskChoiceFieldMutation = {
    readonly response: updateTaskChoiceFieldMutationResponse;
    readonly variables: updateTaskChoiceFieldMutationVariables;
};



/*
mutation updateTaskChoiceFieldMutation(
  $input: updateTaskChoiceFieldMutationInput!
) {
  updateTaskChoiceField(input: $input) {
    fieldId
    taskId
    updatedFieldValue {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskChoiceFieldMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskChoiceField",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskChoiceFieldMutationInput!"
                }
            ],
            "concreteType": "updateTaskChoiceFieldMutationPayload",
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
                    "concreteType": "ChoiceValueType",
                    "plural": false,
                    "selections": [
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
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskChoiceFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskChoiceFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskChoiceFieldMutation",
            "id": null,
            "text": "mutation updateTaskChoiceFieldMutation(\n  $input: updateTaskChoiceFieldMutationInput!\n) {\n  updateTaskChoiceField(input: $input) {\n    fieldId\n    taskId\n    updatedFieldValue {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '975ec80f5e83aec1951e78b4cbb6faad';
export default node;
