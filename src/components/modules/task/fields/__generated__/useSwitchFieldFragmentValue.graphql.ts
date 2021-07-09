/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useSwitchFieldFragmentValue$ref = any;
export type useSwitchFieldFragmentValue = {
    readonly enabled: boolean | null;
    readonly " $refType": useSwitchFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSwitchFieldFragmentValue",
    "type": "SwitchFieldValue",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "enabled",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'a1edeb019ab7304b6a6a439bcb267408';
export default node;
