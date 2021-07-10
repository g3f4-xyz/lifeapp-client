/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskListPagination = {
    readonly tasks: {
        readonly id: string;
        readonly list: {
            readonly edges: ReadonlyArray<{
                readonly cursor: string | null;
                readonly node: {
                    readonly id: string;
                    readonly " $fragmentRefs": FragmentRefs<"useTaskListFragment">;
                } | null;
            } | null> | null;
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly endCursor: string | null;
            } | null;
        };
    } | null;
    readonly " $refType": "useTaskListPagination";
};
export type useTaskListPagination$data = useTaskListPagination;
export type useTaskListPagination$key = {
    readonly " $data"?: useTaskListPagination$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
};



const node: ReaderFragment = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "argumentDefinitions": [
            {
                "kind": "RootArgument",
                "name": "after"
            },
            {
                "kind": "RootArgument",
                "name": "count"
            }
        ],
        "kind": "Fragment",
        "metadata": {
            "connection": [
                {
                    "count": "count",
                    "cursor": "after",
                    "direction": "forward",
                    "path": [
                        "tasks",
                        "list"
                    ]
                }
            ]
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
                    (v0 /*: any*/),
                    {
                        "alias": "list",
                        "args": null,
                        "concreteType": "TaskConnection_list",
                        "kind": "LinkedField",
                        "name": "__TaskConnection_list_connection",
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
                                                "name": "__typename",
                                                "storageKey": null
                                            },
                                            {
                                                "args": null,
                                                "kind": "FragmentSpread",
                                                "name": "useTaskListFragment"
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
            }
        ],
        "type": "Query",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '8b85e54e3ca78ddaa148304496b78666';
export default node;
