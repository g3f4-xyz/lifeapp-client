/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type ChoiceFieldFragment_data$ref = any;
export type ChoiceFieldFragment_data = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: string | null;
        readonly helperText?: string | null;
        readonly label?: string | null;
        readonly defaultValue?: string | null;
        readonly options?: ReadonlyArray<{
            readonly text: string;
            readonly value: string;
        }>;
        readonly required?: boolean | null;
    };
    readonly value: {
        readonly id?: string | null;
    };
    readonly " $refType": ChoiceFieldFragment_data$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "ChoiceFieldFragment_data",
        "type": "Field",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
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
                        "type": "ChoiceFieldMeta",
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
                        "type": "ChoiceFieldValue",
                        "selections": [
                            (v0 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'ad7a111830af82a1f0673a2da9f4a3af';
export default node;
