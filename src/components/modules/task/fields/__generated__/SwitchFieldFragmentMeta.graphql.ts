/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SwitchFieldFragmentMeta$ref = any;
export type SwitchFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly label: string | null;
    readonly disabled: boolean | null;
    readonly required: boolean | null;
    readonly " $refType": SwitchFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SwitchFieldFragmentMeta",
    "type": "SwitchFieldMeta",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "fieldType",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "label",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "disabled",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "required",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'e42b1ba9acb914f4a73b97dd46c87265';
export default node;
