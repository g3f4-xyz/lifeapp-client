/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type TaskListFragment_data$ref = any;
export type TaskListPagination_data$ref = any;
export type TaskListPagination_data = {
    readonly id: string;
    readonly list: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": TaskListFragment_data$ref;
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
    } | null;
    readonly " $refType": TaskListPagination_data$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "TaskListPagination_data",
        "type": "TaskListType",
        "metadata": {
            "connection": [
                {
                    "count": "count",
                    "cursor": "after",
                    "direction": "forward",
                    "path": [
                        "list"
                    ]
                }
            ]
        },
        "argumentDefinitions": [
            {
                "kind": "RootArgument",
                "name": "count",
                "type": "Int"
            },
            {
                "kind": "RootArgument",
                "name": "after",
                "type": "String"
            }
        ],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": "list",
                "name": "__TaskList_list_connection",
                "storageKey": null,
                "args": null,
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
                                    (v0 /*: any*/),
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "__typename",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "FragmentSpread",
                                        "name": "TaskListFragment_data",
                                        "args": null
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
            }
        ]
    } as any;
})();
(node as any).hash = 'e64e97d9c72af0c9d58bf8b08bf86a77';
export default node;
