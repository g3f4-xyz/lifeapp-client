/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskFieldInput = {
    readonly taskId: string;
    readonly fieldId: string;
    readonly value: FieldValueInput;
};
export type FieldValueInput = {
    readonly enabled?: boolean | null;
    readonly progress?: number | null;
    readonly id?: string | null;
    readonly text?: string | null;
};
export type updateTaskFieldMutationVariables = {
    readonly input: UpdateTaskFieldInput;
};
export type updateTaskFieldMutationResponse = {
    readonly updateTaskField: {
        readonly fieldId: string;
        readonly taskId: string;
        readonly updatedValue: {
            readonly id?: string | null;
            readonly ownValue?: {
                readonly __typename: string;
            } | null;
            readonly enabled?: boolean | null;
            readonly progress?: number | null;
            readonly text?: string | null;
        };
    };
};
export type updateTaskFieldMutation = {
    readonly response: updateTaskFieldMutationResponse;
    readonly variables: updateTaskFieldMutationVariables;
};



/*
mutation updateTaskFieldMutation(
  $input: UpdateTaskFieldInput!
) {
  updateTaskField(input: $input) {
    fieldId
    taskId
    updatedValue {
      __typename
      ... on ChoiceFieldValue {
        id
      }
      ... on NestedFieldValue {
        ownValue {
          __typename
        }
      }
      ... on SwitchFieldValue {
        enabled
      }
      ... on SliderFieldValue {
        progress
      }
      ... on TextFieldValue {
        text
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "UpdateTaskFieldInput!",
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
        "name": "fieldId",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "taskId",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "InlineFragment",
        "type": "ChoiceFieldValue",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "InlineFragment",
        "type": "NestedFieldValue",
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "ownValue",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v5 /*: any*/)
                ]
            }
        ]
    } as any), v7 = ({
        "kind": "InlineFragment",
        "type": "SwitchFieldValue",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "enabled",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v8 = ({
        "kind": "InlineFragment",
        "type": "SliderFieldValue",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "progress",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v9 = ({
        "kind": "InlineFragment",
        "type": "TextFieldValue",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
            }
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskFieldMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTaskField",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "UpdateTaskFieldOutput",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "updatedValue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                                (v4 /*: any*/),
                                (v6 /*: any*/),
                                (v7 /*: any*/),
                                (v8 /*: any*/),
                                (v9 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTaskField",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "UpdateTaskFieldOutput",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "updatedValue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                                (v5 /*: any*/),
                                (v4 /*: any*/),
                                (v6 /*: any*/),
                                (v7 /*: any*/),
                                (v8 /*: any*/),
                                (v9 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskFieldMutation",
            "id": null,
            "text": "mutation updateTaskFieldMutation(\n  $input: UpdateTaskFieldInput!\n) {\n  updateTaskField(input: $input) {\n    fieldId\n    taskId\n    updatedValue {\n      __typename\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on NestedFieldValue {\n        ownValue {\n          __typename\n        }\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '652625da9184415be567746c9ed82a3f';
export default node;
