/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SWITCH" | "TEXT";
export type SwitchFieldFragmentMeta$ref = any;
export type SwitchFieldFragmentMeta = {
    readonly fieldType: FieldTypeEnum;
    readonly label: string;
    readonly disabled: boolean | null;
    readonly required: boolean;
    readonly " $refType": SwitchFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SwitchFieldFragmentMeta",
    "type": "SwitchMetaType",
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
(node as any).hash = '749b930d69930046f29aa01f911d63b6';
export default node;
