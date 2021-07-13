/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type useTaskListQueryVariables = {};
export type useTaskListQueryResponse = {
    readonly settings: {
        readonly id: string;
        readonly taskList: {
            readonly filters: {
                readonly title: string | null;
                readonly taskType: ReadonlyArray<TaskTypeId>;
                readonly status: TaskStatus | null;
            };
        };
    };
    readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
};
export type useTaskListQuery = {
    readonly response: useTaskListQueryResponse;
    readonly variables: useTaskListQueryVariables;
};



/*
query useTaskListQuery {
  ...useTaskListPagination
  settings {
    id
    taskList {
      filters {
        title
        taskType
        status
      }
    }
  }
}

fragment useTaskListFragment on Task {
  id
  typeId
  fields {
    fieldId
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

fragment useTaskListPagination on Query {
  tasks {
    id
    list(first: 10) {
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
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v1 = {
        "alias": null,
        "args": null,
        "concreteType": "Settings",
        "kind": "LinkedField",
        "name": "settings",
        "plural": false,
        "selections": [
            (v0 /*: any*/),
            {
                "alias": null,
                "args": null,
                "concreteType": "TaskListSettings",
                "kind": "LinkedField",
                "name": "taskList",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "FiltersTaskListSettings",
                        "kind": "LinkedField",
                        "name": "filters",
                        "plural": false,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "taskType",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "status",
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "storageKey": null
    } as any, v2 = [
        {
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskListQuery",
            "selections": [
                (v1 /*: any*/),
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useTaskListPagination"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "useTaskListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tasks",
                    "kind": "LinkedField",
                    "name": "tasks",
                    "plural": false,
                    "selections": [
                        (v0 /*: any*/),
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
                                                (v0 /*: any*/),
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
                                                                        (v0 /*: any*/)
                                                                    ],
                                                                    "type": "ChoiceFieldValue",
                                                                    "abstractKey": null
                                                                },
                                                                {
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
                            "storageKey": "list(first:10)"
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
                },
                (v1 /*: any*/)
            ]
        },
        "params": {
            "cacheID": "eab9cdc4323cc5d4d557eb2e0fbe2cd7",
            "id": null,
            "metadata": {},
            "name": "useTaskListQuery",
            "operationKind": "query",
            "text": "query useTaskListQuery {\n  ...useTaskListPagination\n  settings {\n    id\n    taskList {\n      filters {\n        title\n        taskType\n        status\n      }\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    fieldId\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination on Query {\n  tasks {\n    id\n    list(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          ...useTaskListFragment\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '593fc42bcd00c32b10ada998970594f7';
export default node;
