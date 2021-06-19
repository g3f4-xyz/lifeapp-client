/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type SliderFieldFragment_data$ref = any;
export type SliderFieldFragment_data = {
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
    readonly " $refType": SliderFieldFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SliderFieldFragment_data",
    "type": "Field",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "fieldId",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "meta",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
                    "type": "SliderFieldMeta",
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
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "max",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "min",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "step",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        },
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "value",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
                    "type": "SliderFieldValue",
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "progress",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = '649ebd28155e828f83e8c3aac7ff1a43';
export default node;
