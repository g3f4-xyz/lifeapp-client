/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypePagination = {
    readonly id: string;
    readonly list: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly order: number;
                readonly " $fragmentRefs": FragmentRefs<"useTaskTypeFragment">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "useTaskTypePagination";
};
export type useTaskTypePagination$data = useTaskTypePagination;
export type useTaskTypePagination$key = {
    readonly " $data"?: useTaskTypePagination$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskTypePagination">;
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
                        "list"
                    ]
                }
            ]
        },
        "name": "useTaskTypePagination",
        "selections": [
            (v0 /*: any*/),
            {
                "alias": "list",
                "args": null,
                "concreteType": "TaskTypeConnection_list",
                "kind": "LinkedField",
                "name": "__TaskTypeConnection_list_connection",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "TaskTypeConnection_listEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "TaskType",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                    (v0 /*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "order",
                                        "storageKey": null
                                    },
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
                                        "name": "useTaskTypeFragment"
                                    }
                                ],
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cursor",
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
                                "name": "endCursor",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "hasNextPage",
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "type": "TaskTypes",
        "abstractKey": null
    } as any;
})();
(node as any).hash = 'd8a346b0a0d08dbd3a1bad4cf98cc998';
export default node;
