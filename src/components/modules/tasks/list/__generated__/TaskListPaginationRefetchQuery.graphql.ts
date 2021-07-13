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

fragment useTaskListItemFragment on Task {
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

fragment useTaskListPagination_1G22uz on Query {
  tasks {
    id
    list(first: $count, after: $cursor) {
      edges {
        cursor
        node {
          id
          ...useTaskListItemFragment
          __typename
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
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
                                                                        (v1 /*: any*/)
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
                },
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Settings",
                    "kind": "LinkedField",
                    "name": "settings",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
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
                }
            ]
        },
        "params": {
            "cacheID": "965933f2e91cecd50f18bbc8643cab09",
            "id": null,
            "metadata": {},
            "name": "TaskListPaginationRefetchQuery",
            "operationKind": "query",
            "text": "query TaskListPaginationRefetchQuery(\n  $count: Int = 10\n  $cursor: String\n) {\n  ...useTaskListPagination_1G22uz\n}\n\nfragment useTaskListItemFragment on Task {\n  id\n  typeId\n  fields {\n    fieldId\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination_1G22uz on Query {\n  tasks {\n    id\n    list(first: $count, after: $cursor) {\n      edges {\n        cursor\n        node {\n          id\n          ...useTaskListItemFragment\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n  settings {\n    id\n    taskList {\n      filters {\n        title\n        taskType\n        status\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9d8c0d25cf7c98f7065429a67e62aa36';
export default node;
