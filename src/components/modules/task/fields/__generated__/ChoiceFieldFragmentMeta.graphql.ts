/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ChoiceFieldFragmentMeta$ref = any;
export type ChoiceFieldFragmentMeta = {
    readonly fieldType: string | null;
    readonly helperText: string | null;
    readonly label: string | null;
    readonly defaultValue: string | null;
    readonly options: ReadonlyArray<{
        readonly text: string;
        readonly value: string;
    }>;
    readonly required: boolean | null;
    readonly " $refType": ChoiceFieldFragmentMeta$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ChoiceFieldFragmentMeta",
    "type": "ChoiceFieldMeta",
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
            "concreteType": "FieldMetaOptions",
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
(node as any).hash = 'cb7eda6e689191e9ab6c083ddc6f5c50';
export default node;
