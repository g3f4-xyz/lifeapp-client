/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSwitchFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly label: string | null;
    readonly disabled: boolean | null;
    readonly required: boolean | null;
    readonly " $refType": "useSwitchFieldFragmentMeta";
};
export type useSwitchFieldFragmentMeta$data = useSwitchFieldFragmentMeta;
export type useSwitchFieldFragmentMeta$key = {
    readonly " $data"?: useSwitchFieldFragmentMeta$data;
    readonly " $fragmentRefs": FragmentRefs<"useSwitchFieldFragmentMeta">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSwitchFieldFragmentMeta",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldType",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "disabled",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "required",
            "storageKey": null
        }
    ],
    "type": "SwitchFieldMeta",
    "abstractKey": null
} as any;
(node as any).hash = '2a71197eefc18a4403a264a2168c9305';
export default node;
