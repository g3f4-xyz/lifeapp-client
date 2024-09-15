/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypeListFragment = {
    readonly list: ReadonlyArray<{
        readonly typeId: string;
        readonly " $fragmentRefs": FragmentRefs<"useTaskTypeFragment">;
    } | null>;
    readonly " $refType": "useTaskTypeListFragment";
};
export type useTaskTypeListFragment$data = useTaskTypeListFragment;
export type useTaskTypeListFragment$key = {
    readonly " $data"?: useTaskTypeListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskTypeListFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTaskTypeListFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "TaskType",
            "kind": "LinkedField",
            "name": "list",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "typeId",
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
(node as any).hash = '848d907cf3df62451db13d1fed07e159';
export default node;
