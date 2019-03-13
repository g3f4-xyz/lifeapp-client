/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SWITCH" | "TEXT";
export type ChoiceFieldFragmentMeta$ref = any;
export type ChoiceFieldFragmentMeta = {
    readonly fieldType: FieldTypeEnum;
    readonly helperText: string;
    readonly label: string;
    readonly defaultValue: string | null;
    readonly options: ReadonlyArray<({
        readonly text: string;
        readonly value: string;
    }) | null>;
    readonly required: boolean;
    readonly " $refType": ChoiceFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ChoiceFieldFragmentMeta",
    "type": "ChoiceMetaType",
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
            "name": "helperText",
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
            "name": "defaultValue",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "options",
            "storageKey": null,
            "args": null,
            "concreteType": "ChoiceOptionsMetaType",
            "plural": true,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                }
            ]
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
(node as any).hash = '67aefad39d8993dd090362047881e34b';
export default node;
