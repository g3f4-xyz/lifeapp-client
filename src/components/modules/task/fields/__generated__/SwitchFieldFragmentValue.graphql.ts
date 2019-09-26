/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SwitchFieldFragmentValue$ref = any;
export type SwitchFieldFragmentValue = {
    readonly enabled: boolean;
    readonly " $refType": SwitchFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SwitchFieldFragmentValue",
    "type": "SwitchValueType",
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
(node as any).hash = '17b2b5f676ec23834c8e625601aa96b6';
export default node;
