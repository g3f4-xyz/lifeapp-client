/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO";
export type useTaskListPagination = {
    readonly tasks: {
        readonly id: string;
        readonly list: {
            readonly edges: ReadonlyArray<{
                readonly cursor: string;
                readonly node: {
                    readonly id: string;
                    readonly " $fragmentRefs": FragmentRefs<"useTaskListItemFragment">;
                } | null;
            } | null> | null;
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly endCursor: string | null;
            };
        } | null;
    };
    readonly settings: {
        readonly id: string;
        readonly taskList: {
            readonly filters: {
                readonly title: string;
                readonly taskType: ReadonlyArray<string>;
                readonly taskStatus: ReadonlyArray<TaskStatus>;
            };
        };
    };
    readonly " $refType": "useTaskListPagination";
};
export type useTaskListPagination$data = useTaskListPagination;
export type useTaskListPagination$key = {
    readonly " $data"?: useTaskListPagination$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        "tasks",
        "list"
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "argumentDefinitions": [
            {
                "defaultValue": 10,
                "kind": "LocalArgument",
                "name": "count"
            },
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "cursor"
            }
        ],
        "kind": "Fragment",
        "metadata": {
            "connection": [
                {
                    "count": "count",
                    "cursor": "cursor",
                    "direction": "forward",
                    "path": (v0 /*: any*/)
                }
            ],
            "refetch": {
                "connection": {
                    "forward": {
                        "count": "count",
                        "cursor": "cursor"
                    },
                    "backward": null,
                    "path": (v0 /*: any*/)
                },
                "fragmentPathInResult": [],
                "operation": require('./TaskListPaginationRefetchQuery.graphql.ts')
            }
        },
        "name": "useTaskListPagination",
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
                        "alias": "list",
                        "args": null,
                        "concreteType": "TaskConnection",
                        "kind": "LinkedField",
                        "name": "__TaskConnection_list_connection",
                        "plural": false,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "TaskEdge",
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
                                                "name": "__typename",
                                                "storageKey": null
                                            },
                                            {
                                                "args": null,
                                                "kind": "FragmentSpread",
                                                "name": "useTaskListItemFragment"
                                            }
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
                                "concreteType": "TaskListFiltersSettings",
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
                                        "name": "taskStatus",
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
        ],
        "type": "Query",
        "abstractKey": null
    } as any;
})();
(node as any).hash = 'a51ba125ad69a37b82a229ddad8ed943';
export default node;
