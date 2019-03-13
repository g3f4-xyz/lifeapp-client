/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type TaskListPagination$ref = any;
export type TaskTypeEnum = "EVENT" | "MEETING" | "ROUTINE" | "TODO";
export type TaskListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type TaskListQueryResponse = {
    readonly app: {
        readonly taskList: {
            readonly " $fragmentRefs": TaskListPagination$ref;
        };
        readonly settings: {
            readonly id: string;
            readonly taskList: {
                readonly filters: {
                    readonly title: string;
                    readonly taskType: ReadonlyArray<TaskTypeEnum>;
                    readonly status: string | null;
                };
            };
        };
    };
};
export type TaskListQuery = {
    readonly response: TaskListQueryResponse;
    readonly variables: TaskListQueryVariables;
};



/*
query TaskListQuery(
  $count: Int!
  $after: String
) {
  app {
    taskList {
      ...TaskListPagination
      id
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
    id
  }
}

fragment TaskListPagination on TaskListType {
  id
  list(first: $count, after: $after) {
    edges {
      cursor
      node {
        id
        ...TaskListFragment
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment TaskListFragment on TaskType {
  id
  taskType
  note
  title
  priority
  status
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "count",
            "type": "Int!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "taskType",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "settings",
        "storageKey": null,
        "args": null,
        "concreteType": "SettingsType",
        "plural": false,
        "selections": [
            (v1 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "taskList",
                "storageKey": null,
                "args": null,
                "concreteType": "TaskListSettingsType",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "filters",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TaskListFiltersSettingsType",
                        "plural": false,
                        "selections": [
                            (v2 /*: any*/),
                            (v3 /*: any*/),
                            (v4 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v6 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TaskListQuery",
            "type": "QueryType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "taskList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskListType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "TaskListPagination",
                                    "args": null
                                }
                            ]
                        },
                        (v5 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "TaskListQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "taskList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskListType",
                            "plural": false,
                            "selections": [
                                (v1 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "list",
                                    "storageKey": null,
                                    "args": (v6 /*: any*/),
                                    "concreteType": "TaskTypeConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TaskTypeEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "cursor",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TaskType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v1 /*: any*/),
                                                        (v3 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "note",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        (v2 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "priority",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        (v4 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "__typename",
                                                            "args": null,
                                                            "storageKey": null
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "pageInfo",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "PageInfo",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "hasNextPage",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "endCursor",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "LinkedHandle",
                                    "alias": null,
                                    "name": "list",
                                    "args": (v6 /*: any*/),
                                    "handle": "connection",
                                    "key": "TaskList_list",
                                    "filters": null
                                }
                            ]
                        },
                        (v5 /*: any*/),
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "TaskListQuery",
            "id": null,
            "text": "query TaskListQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    taskList {\n      ...TaskListPagination\n      id\n    }\n    settings {\n      id\n      taskList {\n        filters {\n          title\n          taskType\n          status\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment TaskListPagination on TaskListType {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...TaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TaskListFragment on TaskType {\n  id\n  taskType\n  note\n  title\n  priority\n  status\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5b068eb156bdf513de8fb6250449b322';
export default node;
