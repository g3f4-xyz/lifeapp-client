/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type useNestedFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly " $refType": "useNestedFieldFragment";
};
export type useNestedFieldFragment$data = useNestedFieldFragment;
export type useNestedFieldFragment$key = {
    readonly " $data"?: useNestedFieldFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useNestedFieldFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useNestedFieldFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldId",
            "storageKey": null
        }
    ],
    "type": "Field",
    "abstractKey": null
} as any;
(node as any).hash = '425111a7dc7b972455ee3913306d5a49';
export default node;
