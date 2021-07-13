/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type useSliderFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: string | null;
        readonly label?: string | null;
        readonly disabled?: boolean | null;
        readonly required?: boolean | null;
        readonly max?: number | null;
        readonly min?: number | null;
        readonly step?: number | null;
    };
    readonly value: {
        readonly progress?: number | null;
    };
    readonly " $refType": "useSliderFieldFragment";
};
export type useSliderFieldFragment$data = useSliderFieldFragment;
export type useSliderFieldFragment$key = {
    readonly " $data"?: useSliderFieldFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSliderFieldFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSliderFieldFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldId",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "meta",
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
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
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "max",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "min",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "step",
                            "storageKey": null
                        }
                    ],
                    "type": "SliderFieldMeta",
                    "abstractKey": null
                }
            ],
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "value",
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "progress",
                            "storageKey": null
                        }
                    ],
                    "type": "SliderFieldValue",
                    "abstractKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Field",
    "abstractKey": null
} as any;
(node as any).hash = 'e60a2e11b978f65cc2f835944ecbf7cc';
export default node;
