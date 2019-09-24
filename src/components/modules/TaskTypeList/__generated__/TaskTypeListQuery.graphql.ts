/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type TaskTypeListPagination_data$ref = any;
export type TaskTypeListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type TaskTypeListQueryResponse = {
    readonly app: {
        readonly taskTypeList: {
            readonly " $fragmentRefs": TaskTypeListPagination_data$ref;
        };
    };
};
export type TaskTypeListQuery = {
    readonly response: TaskTypeListQueryResponse;
    readonly variables: TaskTypeListQueryVariables;
};



/*
query TaskTypeListQuery(
  $count: Int!
  $after: String
) {
  app {
    taskTypeList {
      ...TaskTypeListPagination_data
      id
    }
    id
  }
}

fragment TaskTypeListPagination_data on TaskTypeListType {
  id
  list(first: $count, after: $after) {
    edges {
      node {
        id
        order
        ...TaskTypeFragment_data
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment TaskTypeFragment_data on TaskTypeType {
  id
  typeId
  label
  description
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
    } as any), v2 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TaskTypeListQuery",
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
                            "name": "taskTypeList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskTypeListType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "TaskTypeListPagination_data",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "TaskTypeListQuery",
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
                            "name": "taskTypeList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskTypeListType",
                            "plural": false,
                            "selections": [
                                (v1 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "list",
                                    "storageKey": null,
                                    "args": (v2 /*: any*/),
                                    "concreteType": "TaskTypeTypeConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TaskTypeTypeEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TaskTypeType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v1 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "order",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "typeId",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "label",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "description",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "__typename",
                                                            "args": null,
                                                            "storageKey": null
                                                        }
                                                    ]
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "cursor",
                                                    "args": null,
                                                    "storageKey": null
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
                                    "args": (v2 /*: any*/),
                                    "handle": "connection",
                                    "key": "TaskTypeList_list",
                                    "filters": null
                                }
                            ]
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "TaskTypeListQuery",
            "id": null,
            "text": "query TaskTypeListQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    taskTypeList {\n      ...TaskTypeListPagination_data\n      id\n    }\n    id\n  }\n}\n\nfragment TaskTypeListPagination_data on TaskTypeListType {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        order\n        ...TaskTypeFragment_data\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TaskTypeFragment_data on TaskTypeType {\n  id\n  typeId\n  label\n  description\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a5359964ccbe171f21379af5b27f2b5f';
export default node;
