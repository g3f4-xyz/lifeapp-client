/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypeListFragment = {
    readonly id: string;
    readonly list: ReadonlyArray<{
        readonly id: string;
        readonly order: number;
        readonly " $fragmentRefs": FragmentRefs<"useTaskTypeFragment">;
    }>;
    readonly " $refType": "useTaskTypeListFragment";
};
export type useTaskTypeListFragment$data = useTaskTypeListFragment;
export type useTaskTypeListFragment$key = {
    readonly " $data"?: useTaskTypeListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskTypeListFragment">;
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
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "useTaskTypeListFragment",
        "selections": [
            (v0 /*: any*/),
            {
                "alias": null,
                "args": null,
                "concreteType": "TaskType",
                "kind": "LinkedField",
                "name": "list",
                "plural": true,
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
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "useTaskTypeFragment"
                    }
                ],
                "storageKey": null
            }
        ],
        "type": "TaskTypes",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '8b68a64c5e8ec36653b9d3bade1401d5';
export default node;
