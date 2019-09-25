/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type updateTaskFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: FieldIdEnum;
    readonly value: ValueInputType;
    readonly clientMutationId?: string | null;
};
export type ValueInputType = {
    readonly enabled?: boolean | null;
    readonly id?: string | null;
    readonly text?: string | null;
    readonly progress?: number | null;
    readonly ownValue?: ValueInputType | null;
    readonly childrenValue?: NestedValueInputType | null;
};
export type NestedValueInputType = {
    readonly ownValue?: ValueInputType | null;
    readonly childrenValue?: NestedValueInputType | null;
};
export type updateTaskFieldMutationVariables = {
    readonly input: updateTaskFieldMutationInput;
};
export type updateTaskFieldMutationResponse = {
    readonly updateTaskField: {
        readonly fieldId: FieldIdEnum;
        readonly taskId: string;
        readonly updatedValue: {
            readonly id?: string;
            readonly ownValue?: {
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            } | null;
            readonly childrenValue?: {
                readonly ownValue: {
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                } | null;
                readonly childrenValue: {
                    readonly ownValue: {
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    } | null;
                } | null;
            } | null;
            readonly enabled?: boolean;
            readonly progress?: number;
            readonly text?: string;
        };
    } | null;
};
export type updateTaskFieldMutation = {
    readonly response: updateTaskFieldMutationResponse;
    readonly variables: updateTaskFieldMutationVariables;
};



/*
mutation updateTaskFieldMutation(
  $input: updateTaskFieldMutationInput!
) {
  updateTaskField(input: $input) {
    fieldId
    taskId
    updatedValue {
      __typename
      ... on ChoiceValueType {
        id
      }
      ... on NestedValueType {
        ownValue {
          __typename
          ... on SwitchValueType {
            enabled
          }
          ... on TextValueType {
            text
          }
          ... on ChoiceValueType {
            id
          }
        }
        childrenValue {
          ownValue {
            __typename
            ... on SwitchValueType {
              enabled
            }
            ... on TextValueType {
              text
            }
            ... on ChoiceValueType {
              id
            }
          }
          childrenValue {
            ownValue {
              __typename
              ... on SwitchValueType {
                enabled
              }
              ... on TextValueType {
                text
              }
              ... on ChoiceValueType {
                id
              }
            }
          }
        }
      }
      ... on SwitchValueType {
        enabled
      }
      ... on SliderValueType {
        progress
      }
      ... on TextValueType {
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
            "type": "updateTaskFieldMutationInput!",
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
        "type": "ChoiceValueType",
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
        "kind": "InlineFragment",
        "type": "SwitchValueType",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "enabled",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v6 = ({
        "kind": "InlineFragment",
        "type": "TextValueType",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v7 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v5 /*: any*/),
            (v6 /*: any*/),
            (v4 /*: any*/)
        ]
    } as any), v8 = ({
        "kind": "InlineFragment",
        "type": "SliderValueType",
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
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v9 /*: any*/),
            (v5 /*: any*/),
            (v6 /*: any*/),
            (v4 /*: any*/)
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTaskField",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "updateTaskFieldMutationPayload",
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
                                {
                                    "kind": "InlineFragment",
                                    "type": "NestedValueType",
                                    "selections": [
                                        (v7 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "childrenValue",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "NestedValueType",
                                            "plural": false,
                                            "selections": [
                                                (v7 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "childrenValue",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "NestedValueType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v7 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                (v5 /*: any*/),
                                (v8 /*: any*/),
                                (v6 /*: any*/)
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
                    "concreteType": "updateTaskFieldMutationPayload",
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
                                (v9 /*: any*/),
                                (v4 /*: any*/),
                                {
                                    "kind": "InlineFragment",
                                    "type": "NestedValueType",
                                    "selections": [
                                        (v10 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "childrenValue",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "NestedValueType",
                                            "plural": false,
                                            "selections": [
                                                (v10 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "childrenValue",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "NestedValueType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v10 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                (v5 /*: any*/),
                                (v8 /*: any*/),
                                (v6 /*: any*/)
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
            "text": "mutation updateTaskFieldMutation(\n  $input: updateTaskFieldMutationInput!\n) {\n  updateTaskField(input: $input) {\n    fieldId\n    taskId\n    updatedValue {\n      __typename\n      ... on ChoiceValueType {\n        id\n      }\n      ... on NestedValueType {\n        ownValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        childrenValue {\n          ownValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          childrenValue {\n            ownValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n          }\n        }\n      }\n      ... on SwitchValueType {\n        enabled\n      }\n      ... on SliderValueType {\n        progress\n      }\n      ... on TextValueType {\n        text\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '17ae42212d680ce1965021030a774083';
export default node;
