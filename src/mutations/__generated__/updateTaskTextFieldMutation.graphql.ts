/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type updateTaskTextFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: string;
    readonly fieldValue: TextValueInputType;
    readonly clientMutationId?: string | null;
};
export type TextValueInputType = {
    readonly text?: string | null;
};
export type updateTaskTextFieldMutationVariables = {
    readonly input: updateTaskTextFieldMutationInput;
};
export type updateTaskTextFieldMutationResponse = {
    readonly updateTaskTextField: ({
        readonly fieldId: string;
        readonly taskId: string;
        readonly updatedFieldValue: {
            readonly text: string;
        };
    }) | null;
};
export type updateTaskTextFieldMutation = {
    readonly response: updateTaskTextFieldMutationResponse;
    readonly variables: updateTaskTextFieldMutationVariables;
};



/*
mutation updateTaskTextFieldMutation(
  $input: updateTaskTextFieldMutationInput!
) {
  updateTaskTextField(input: $input) {
    fieldId
    taskId
    updatedFieldValue {
      text
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskTextFieldMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskTextField",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskTextFieldMutationInput!"
                }
            ],
            "concreteType": "updateTaskTextFieldMutationPayload",
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
                    "concreteType": "TextValueType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "text",
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
            "name": "updateTaskTextFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskTextFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskTextFieldMutation",
            "id": null,
            "text": "mutation updateTaskTextFieldMutation(\n  $input: updateTaskTextFieldMutationInput!\n) {\n  updateTaskTextField(input: $input) {\n    fieldId\n    taskId\n    updatedFieldValue {\n      text\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'ef50aded4f85a163f867ffc04595b9f3';
export default node;
