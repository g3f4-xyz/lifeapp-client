/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskFieldInput = {
    taskId: string;
    fieldId: string;
    value: FieldValueInput;
};
export type FieldValueInput = {
    enabled?: boolean | null;
    progress?: number | null;
    id?: string | null;
    text?: string | null;
};
export type useUpdateTaskFieldMutationVariables = {
    input: UpdateTaskFieldInput;
};
export type useUpdateTaskFieldMutationResponse = {
    readonly updateTaskField: {
        readonly fieldId: string;
        readonly taskId: string;
        readonly updatedValue: {
            readonly progress?: number | null;
            readonly enabled?: boolean | null;
            readonly id?: string | null;
            readonly text?: string | null;
        };
    };
};
export type useUpdateTaskFieldMutation = {
    readonly response: useUpdateTaskFieldMutationResponse;
    readonly variables: useUpdateTaskFieldMutationVariables;
};



/*
mutation useUpdateTaskFieldMutation(
  $input: UpdateTaskFieldInput!
) {
  updateTaskField(input: $input) {
    fieldId
    taskId
    updatedValue {
      __typename
      ... on SliderFieldValue {
        progress
      }
      ... on SwitchFieldValue {
        enabled
      }
      ... on ChoiceFieldValue {
        id
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
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fieldId",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "taskId",
        "storageKey": null
    } as any, v4 = {
        "kind": "InlineFragment",
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "progress",
                "storageKey": null
            }
        ],
        "type": "SliderFieldValue",
        "abstractKey": null
    } as any, v5 = {
        "kind": "InlineFragment",
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "enabled",
                "storageKey": null
            }
        ],
        "type": "SwitchFieldValue",
        "abstractKey": null
    } as any, v6 = {
        "kind": "InlineFragment",
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
            }
        ],
        "type": "ChoiceFieldValue",
        "abstractKey": null
    } as any, v7 = {
        "kind": "InlineFragment",
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "text",
                "storageKey": null
            }
        ],
        "type": "TextFieldValue",
        "abstractKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useUpdateTaskFieldMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "UpdateTaskFieldOutput",
                    "kind": "LinkedField",
                    "name": "updateTaskField",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "updatedValue",
                            "plural": false,
                            "selections": [
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                (v6 /*: any*/),
                                (v7 /*: any*/)
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
            "name": "useUpdateTaskFieldMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "UpdateTaskFieldOutput",
                    "kind": "LinkedField",
                    "name": "updateTaskField",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "updatedValue",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                },
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                (v6 /*: any*/),
                                (v7 /*: any*/)
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "3cca6dfa139464066bb69011291c8e9f",
            "id": null,
            "metadata": {},
            "name": "useUpdateTaskFieldMutation",
            "operationKind": "mutation",
            "text": "mutation useUpdateTaskFieldMutation(\n  $input: UpdateTaskFieldInput!\n) {\n  updateTaskField(input: $input) {\n    fieldId\n    taskId\n    updatedValue {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'be2529d1208a2a0c5602d24944b54884';
export default node;
