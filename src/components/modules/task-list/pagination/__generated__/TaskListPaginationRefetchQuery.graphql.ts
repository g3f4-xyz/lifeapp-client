/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskListPaginationRefetchQueryVariables = {
    count?: number | null;
    cursor?: string | null;
};
export type TaskListPaginationRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
};
export type TaskListPaginationRefetchQuery = {
    readonly response: TaskListPaginationRefetchQueryResponse;
    readonly variables: TaskListPaginationRefetchQueryVariables;
};



/*
query TaskListPaginationRefetchQuery(
  $count: Int = 10
  $cursor: String
) {
  ...useTaskListPagination_1G22uz
}

fragment useTaskListFragment on Task {
  id
  typeId
  fields {
    id
    fieldId
    meta {
      __typename
      ... on SliderFieldMeta {
        fieldType
        label
        disabled
        required
        max
        min
        step
      }
      ... on SwitchFieldMeta {
        fieldType
        label
        disabled
        required
      }
      ... on ChoiceFieldMeta {
        fieldType
        helperText
        label
        defaultValue
        options {
          text
          value
        }
        required
      }
      ... on TextFieldMeta {
        fieldType
        helperText
        label
        inputType
        min
        max
        maxLength
        minLength
        required
      }
    }
    value {
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

fragment useTaskListPagination_1G22uz on Query {
  tasks {
    id
    list(first: $count, after: $cursor) {
      edges {
        cursor
        node {
          id
          ...useTaskListFragment
          __typename
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": 10,
            "kind": "LocalArgument",
            "name": "count"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "cursor"
        } as any
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v2 = [
        {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor"
        } as any,
        {
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fieldType",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "required",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "max",
        "storageKey": null
    } as any, v9 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "min",
        "storageKey": null
    } as any, v10 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "helperText",
        "storageKey": null
    } as any, v11 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "TaskListPaginationRefetchQuery",
            "selections": [
                {
                    "args": [
                        {
                            "kind": "Variable",
                            "name": "count",
                            "variableName": "count"
                        },
                        {
                            "kind": "Variable",
                            "name": "cursor",
                            "variableName": "cursor"
                        }
                    ],
                    "kind": "FragmentSpread",
                    "name": "useTaskListPagination"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "TaskListPaginationRefetchQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tasks",
                    "kind": "LinkedField",
                    "name": "tasks",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "TaskConnection_list",
                            "kind": "LinkedField",
                            "name": "list",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "TaskConnection_listEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "cursor",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Task",
                                            "kind": "LinkedField",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                                (v1 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "typeId",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "Field",
                                                    "kind": "LinkedField",
                                                    "name": "fields",
                                                    "plural": true,
                                                    "selections": [
                                                        (v1 /*: any*/),
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "fieldId",
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "kind": "LinkedField",
                                                            "name": "meta",
                                                            "plural": false,
                                                            "selections": [
                                                                (v3 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        (v6 /*: any*/),
                                                                        (v7 /*: any*/),
                                                                        (v8 /*: any*/),
                                                                        (v9 /*: any*/),
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "step",
                                                                            "storageKey": null
                                                                        }
                                                                    ],
                                                                    "type": "SliderFieldMeta",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        (v6 /*: any*/),
                                                                        (v7 /*: any*/)
                                                                    ],
                                                                    "type": "SwitchFieldMeta",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        (v10 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "defaultValue",
                                                                            "storageKey": null
                                                                        },
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "concreteType": "FieldMetaOptions",
                                                                            "kind": "LinkedField",
                                                                            "name": "options",
                                                                            "plural": true,
                                                                            "selections": [
                                                                                (v11 /*: any*/),
                                                                                {
                                                                                    "alias": null,
                                                                                    "args": null,
                                                                                    "kind": "ScalarField",
                                                                                    "name": "value",
                                                                                    "storageKey": null
                                                                                }
                                                                            ],
                                                                            "storageKey": null
                                                                        },
                                                                        (v7 /*: any*/)
                                                                    ],
                                                                    "type": "ChoiceFieldMeta",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        (v10 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "inputType",
                                                                            "storageKey": null
                                                                        },
                                                                        (v9 /*: any*/),
                                                                        (v8 /*: any*/),
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "maxLength",
                                                                            "storageKey": null
                                                                        },
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "minLength",
                                                                            "storageKey": null
                                                                        },
                                                                        (v7 /*: any*/)
                                                                    ],
                                                                    "type": "TextFieldMeta",
                                                                    "abstractKey": null
                                                                }
                                                            ],
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "kind": "LinkedField",
                                                            "name": "value",
                                                            "plural": false,
                                                            "selections": [
                                                                (v3 /*: any*/),
                                                                {
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
                                                                },
                                                                {
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
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v1 /*: any*/)
                                                                    ],
                                                                    "type": "ChoiceFieldValue",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v11 /*: any*/)
                                                                    ],
                                                                    "type": "TextFieldValue",
                                                                    "abstractKey": null
                                                                }
                                                            ],
                                                            "storageKey": null
                                                        }
                                                    ],
                                                    "storageKey": null
                                                },
                                                (v3 /*: any*/)
                                            ],
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "PageInfo",
                                    "kind": "LinkedField",
                                    "name": "pageInfo",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "hasNextPage",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "endCursor",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "TaskConnection_list",
                            "kind": "LinkedHandle",
                            "name": "list"
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "c60311df35949d563d5c9188e151fa8d",
            "id": null,
            "metadata": {},
            "name": "TaskListPaginationRefetchQuery",
            "operationKind": "query",
            "text": "query TaskListPaginationRefetchQuery(\n  $count: Int = 10\n  $cursor: String\n) {\n  ...useTaskListPagination_1G22uz\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination_1G22uz on Query {\n  tasks {\n    id\n    list(first: $count, after: $cursor) {\n      edges {\n        cursor\n        node {\n          id\n          ...useTaskListFragment\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b828664532301d7df323880d0e7ade56';
export default node;
