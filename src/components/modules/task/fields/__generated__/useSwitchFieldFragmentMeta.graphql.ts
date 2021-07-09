/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useSwitchFieldFragmentMeta$ref = any;
export type useSwitchFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly label: string | null;
    readonly disabled: boolean | null;
    readonly required: boolean | null;
    readonly " $refType": useSwitchFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSwitchFieldFragmentMeta",
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
(node as any).hash = '2a71197eefc18a4403a264a2168c9305';
export default node;
