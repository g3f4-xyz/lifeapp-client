/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SwitchFieldFragmentValue$ref = any;
export type SwitchFieldFragmentValue = {
    readonly enabled: boolean | null;
    readonly " $refType": SwitchFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SwitchFieldFragmentValue",
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
(node as any).hash = 'ae6fad281c1a4b738f4a0088ae295025';
export default node;
