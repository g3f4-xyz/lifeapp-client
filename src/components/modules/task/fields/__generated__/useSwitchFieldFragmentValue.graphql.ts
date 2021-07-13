/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSwitchFieldFragmentValue = {
    readonly enabled: boolean | null;
    readonly " $refType": "useSwitchFieldFragmentValue";
};
export type useSwitchFieldFragmentValue$data = useSwitchFieldFragmentValue;
export type useSwitchFieldFragmentValue$key = {
    readonly " $data"?: useSwitchFieldFragmentValue$data;
    readonly " $fragmentRefs": FragmentRefs<"useSwitchFieldFragmentValue">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSwitchFieldFragmentValue",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enabled",
            "storageKey": null
        }
    ],
    "type": "SwitchFieldValue",
    "abstractKey": null
} as any;
(node as any).hash = 'a1edeb019ab7304b6a6a439bcb267408';
export default node;
