/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type updateTaskNestedFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: string;
    readonly fieldValue: NestedValueInputType;
    readonly clientMutationId?: string | null;
};
export type NestedValueInputType = {
    readonly ownValue?: LeafFieldValueInputType | null;
    readonly childrenValue?: NestedValueInputType | null;
};
export type LeafFieldValueInputType = {
    readonly enabled?: boolean | null;
    readonly id?: string | null;
    readonly text?: string | null;
};
export type updateTaskNestedFieldMutationVariables = {
    readonly input: updateTaskNestedFieldMutationInput;
};
export type updateTaskNestedFieldMutationResponse = {
    readonly updateTaskNestedField: ({
        readonly clientMutationId: string | null;
        readonly fieldId: string;
        readonly taskId: string;
        readonly updatedFieldValue: {
            readonly ownValue: ({
                readonly id?: string;
                readonly enabled?: boolean;
                readonly text?: string;
            }) | null;
            readonly childrenValue: ({
                readonly ownValue: ({
                    readonly ownValue?: ({
                        readonly id?: string;
                        readonly enabled?: boolean;
                        readonly text?: string;
                    }) | null;
                    readonly childrenValue?: ({
                        readonly ownValue: ({
                            readonly id?: string;
                            readonly enabled?: boolean;
                            readonly text?: string;
                        }) | null;
                    }) | null;
                    readonly id?: string;
                    readonly enabled?: boolean;
                    readonly text?: string;
                }) | null;
                readonly childrenValue: ({
                    readonly ownValue: ({
                        readonly id?: string;
                        readonly enabled?: boolean;
                        readonly text?: string;
                    }) | null;
                }) | null;
            }) | null;
        };
    }) | null;
};
export type updateTaskNestedFieldMutation = {
    readonly response: updateTaskNestedFieldMutationResponse;
    readonly variables: updateTaskNestedFieldMutationVariables;
};



/*
mutation updateTaskNestedFieldMutation(
  $input: updateTaskNestedFieldMutationInput!
) {
  updateTaskNestedField(input: $input) {
    clientMutationId
    fieldId
    taskId
    updatedFieldValue {
      ownValue {
        __typename
        ... on ChoiceValueType {
          id
        }
        ... on SwitchValueType {
          enabled
        }
        ... on TextValueType {
          text
        }
      }
      childrenValue {
        ownValue {
          __typename
          ... on NestedValueType {
            ownValue {
              __typename
              ... on ChoiceValueType {
                id
              }
              ... on SwitchValueType {
                enabled
              }
              ... on TextValueType {
                text
              }
            }
            childrenValue {
              ownValue {
                __typename
                ... on ChoiceValueType {
                  id
                }
                ... on SwitchValueType {
                  enabled
                }
                ... on TextValueType {
                  text
                }
              }
            }
          }
          ... on ChoiceValueType {
            id
          }
          ... on SwitchValueType {
            enabled
          }
          ... on TextValueType {
            text
          }
        }
        childrenValue {
          ownValue {
            __typename
            ... on ChoiceValueType {
              id
            }
            ... on SwitchValueType {
              enabled
            }
            ... on TextValueType {
              text
            }
          }
        }
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
            "type": "updateTaskNestedFieldMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "updateTaskNestedFieldMutationInput!"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldId",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "taskId",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
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
    } as any), v6 = ({
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
    } as any), v7 = ({
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
    } as any), v8 = ({
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
            (v7 /*: any*/)
        ]
    } as any), v9 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "childrenValue",
        "storageKey": null,
        "args": null,
        "concreteType": "NestedValueType",
        "plural": false,
        "selections": [
            (v8 /*: any*/)
        ]
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v10 /*: any*/),
            (v5 /*: any*/),
            (v6 /*: any*/),
            (v7 /*: any*/)
        ]
    } as any), v12 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "childrenValue",
        "storageKey": null,
        "args": null,
        "concreteType": "NestedValueType",
        "plural": false,
        "selections": [
            (v11 /*: any*/)
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskNestedFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTaskNestedField",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "updateTaskNestedFieldMutationPayload",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "updatedFieldValue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NestedValueType",
                            "plural": false,
                            "selections": [
                                (v8 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "childrenValue",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "NestedValueType",
                                    "plural": false,
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
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "NestedValueType",
                                                    "selections": [
                                                        (v8 /*: any*/),
                                                        (v9 /*: any*/)
                                                    ]
                                                },
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/)
                                            ]
                                        },
                                        (v9 /*: any*/)
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskNestedFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTaskNestedField",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "updateTaskNestedFieldMutationPayload",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "updatedFieldValue",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NestedValueType",
                            "plural": false,
                            "selections": [
                                (v11 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "childrenValue",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "NestedValueType",
                                    "plural": false,
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
                                                (v10 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "NestedValueType",
                                                    "selections": [
                                                        (v11 /*: any*/),
                                                        (v12 /*: any*/)
                                                    ]
                                                },
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/)
                                            ]
                                        },
                                        (v12 /*: any*/)
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskNestedFieldMutation",
            "id": null,
            "text": "mutation updateTaskNestedFieldMutation(\n  $input: updateTaskNestedFieldMutationInput!\n) {\n  updateTaskNestedField(input: $input) {\n    clientMutationId\n    fieldId\n    taskId\n    updatedFieldValue {\n      ownValue {\n        __typename\n        ... on ChoiceValueType {\n          id\n        }\n        ... on SwitchValueType {\n          enabled\n        }\n        ... on TextValueType {\n          text\n        }\n      }\n      childrenValue {\n        ownValue {\n          __typename\n          ... on NestedValueType {\n            ownValue {\n              __typename\n              ... on ChoiceValueType {\n                id\n              }\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n            }\n            childrenValue {\n              ownValue {\n                __typename\n                ... on ChoiceValueType {\n                  id\n                }\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n              }\n            }\n          }\n          ... on ChoiceValueType {\n            id\n          }\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n        }\n        childrenValue {\n          ownValue {\n            __typename\n            ... on ChoiceValueType {\n              id\n            }\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'd4be336447253fd50a38d096bc847e20';
export default node;
