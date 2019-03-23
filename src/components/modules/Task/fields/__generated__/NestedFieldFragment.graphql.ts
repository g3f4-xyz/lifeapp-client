/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type NestedFieldFragment$ref = any;
export type NestedFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldIdEnum;
    readonly meta: {
        readonly fieldType: FieldTypeEnum;
        readonly parentValue: ({
            readonly enabled?: boolean;
            readonly text?: string;
            readonly id?: string;
        }) | null;
        readonly ownMeta: ({
            readonly fieldType?: FieldTypeEnum;
            readonly helperText?: string;
            readonly label?: string;
            readonly defaultValue?: string | null;
            readonly options?: ReadonlyArray<({
                readonly text: string;
                readonly value: string;
            }) | null>;
            readonly required?: boolean;
            readonly inputType?: string | null;
            readonly min?: number | null;
            readonly max?: number | null;
            readonly maxLength?: number | null;
            readonly minLength?: number | null;
            readonly disabled?: boolean | null;
        }) | null;
        readonly childrenMeta: ReadonlyArray<({
            readonly fieldType: FieldTypeEnum;
            readonly parentValue: ({
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            }) | null;
            readonly ownMeta: ({
                readonly fieldType?: FieldTypeEnum;
                readonly helperText?: string;
                readonly label?: string;
                readonly defaultValue?: string | null;
                readonly options?: ReadonlyArray<({
                    readonly text: string;
                    readonly value: string;
                }) | null>;
                readonly required?: boolean;
                readonly inputType?: string | null;
                readonly min?: number | null;
                readonly max?: number | null;
                readonly maxLength?: number | null;
                readonly minLength?: number | null;
                readonly disabled?: boolean | null;
                readonly parentValue?: ({
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                }) | null;
                readonly ownMeta?: ({
                    readonly fieldType?: FieldTypeEnum;
                    readonly helperText?: string;
                    readonly label?: string;
                    readonly defaultValue?: string | null;
                    readonly options?: ReadonlyArray<({
                        readonly text: string;
                        readonly value: string;
                    }) | null>;
                    readonly required?: boolean;
                    readonly inputType?: string | null;
                    readonly min?: number | null;
                    readonly max?: number | null;
                    readonly maxLength?: number | null;
                    readonly minLength?: number | null;
                    readonly disabled?: boolean | null;
                }) | null;
                readonly childrenMeta?: ReadonlyArray<({
                    readonly fieldType: FieldTypeEnum;
                    readonly parentValue: ({
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    }) | null;
                    readonly ownMeta: ({
                        readonly fieldType?: FieldTypeEnum;
                        readonly helperText?: string;
                        readonly label?: string;
                        readonly defaultValue?: string | null;
                        readonly options?: ReadonlyArray<({
                            readonly text: string;
                            readonly value: string;
                        }) | null>;
                        readonly required?: boolean;
                        readonly inputType?: string | null;
                        readonly min?: number | null;
                        readonly max?: number | null;
                        readonly maxLength?: number | null;
                        readonly minLength?: number | null;
                        readonly disabled?: boolean | null;
                    }) | null;
                }) | null> | null;
            }) | null;
            readonly childrenMeta: ReadonlyArray<({
                readonly fieldType: FieldTypeEnum;
                readonly parentValue: ({
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                }) | null;
                readonly ownMeta: ({
                    readonly fieldType?: FieldTypeEnum;
                    readonly helperText?: string;
                    readonly label?: string;
                    readonly defaultValue?: string | null;
                    readonly options?: ReadonlyArray<({
                        readonly text: string;
                        readonly value: string;
                    }) | null>;
                    readonly required?: boolean;
                    readonly inputType?: string | null;
                    readonly min?: number | null;
                    readonly max?: number | null;
                    readonly maxLength?: number | null;
                    readonly minLength?: number | null;
                    readonly disabled?: boolean | null;
                    readonly parentValue?: ({
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    }) | null;
                    readonly ownMeta?: ({
                        readonly fieldType?: FieldTypeEnum;
                        readonly helperText?: string;
                        readonly label?: string;
                        readonly defaultValue?: string | null;
                        readonly options?: ReadonlyArray<({
                            readonly text: string;
                            readonly value: string;
                        }) | null>;
                        readonly required?: boolean;
                        readonly inputType?: string | null;
                        readonly min?: number | null;
                        readonly max?: number | null;
                        readonly maxLength?: number | null;
                        readonly minLength?: number | null;
                        readonly disabled?: boolean | null;
                    }) | null;
                    readonly childrenMeta?: ReadonlyArray<({
                        readonly fieldType: FieldTypeEnum;
                        readonly parentValue: ({
                            readonly enabled?: boolean;
                            readonly text?: string;
                            readonly id?: string;
                        }) | null;
                        readonly ownMeta: ({
                            readonly fieldType?: FieldTypeEnum;
                            readonly helperText?: string;
                            readonly label?: string;
                            readonly defaultValue?: string | null;
                            readonly options?: ReadonlyArray<({
                                readonly text: string;
                                readonly value: string;
                            }) | null>;
                            readonly required?: boolean;
                            readonly inputType?: string | null;
                            readonly min?: number | null;
                            readonly max?: number | null;
                            readonly maxLength?: number | null;
                            readonly minLength?: number | null;
                            readonly disabled?: boolean | null;
                        }) | null;
                    }) | null> | null;
                }) | null;
            }) | null> | null;
        }) | null> | null;
    };
    readonly value: {
        readonly ownValue: ({
            readonly enabled?: boolean;
            readonly text?: string;
            readonly id?: string;
        }) | null;
        readonly childrenValue: ({
            readonly ownValue: ({
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            }) | null;
            readonly childrenValue: ({
                readonly ownValue: ({
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                }) | null;
            }) | null;
        }) | null;
    };
    readonly " $refType": NestedFieldFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v3 = [
        ({
            "kind": "InlineFragment",
            "type": "SwitchValueType",
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "enabled",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "TextValueType",
            "selections": [
                (v2 /*: any*/)
            ]
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "ChoiceValueType",
            "selections": [
                (v0 /*: any*/)
            ]
        } as any)
    ], v4 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v3 /*: any*/)
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": [
            (v1 /*: any*/),
            (v5 /*: any*/),
            (v6 /*: any*/),
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
                    (v2 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "value",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            (v7 /*: any*/)
        ]
    } as any), v9 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": [
            (v1 /*: any*/),
            (v5 /*: any*/),
            (v6 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "inputType",
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
                "name": "max",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "maxLength",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "minLength",
                "args": null,
                "storageKey": null
            },
            (v7 /*: any*/)
        ]
    } as any), v10 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": [
            (v1 /*: any*/),
            (v6 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "disabled",
                "args": null,
                "storageKey": null
            },
            (v7 /*: any*/)
        ]
    } as any), v11 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v8 /*: any*/),
            (v9 /*: any*/),
            (v10 /*: any*/)
        ]
    } as any), v12 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v8 /*: any*/),
            (v9 /*: any*/),
            (v10 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v4 /*: any*/),
                    (v11 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v1 /*: any*/),
                            (v4 /*: any*/),
                            (v11 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v13 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v3 /*: any*/)
    } as any);
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragment",
        "type": "NestedFieldType",
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
                "concreteType": "NestedMetaType",
                "plural": false,
                "selections": [
                    (v1 /*: any*/),
                    (v4 /*: any*/),
                    (v11 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v1 /*: any*/),
                            (v4 /*: any*/),
                            (v12 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "childrenMeta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "NestedMetaType",
                                "plural": true,
                                "selections": [
                                    (v1 /*: any*/),
                                    (v4 /*: any*/),
                                    (v12 /*: any*/)
                                ]
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
                "concreteType": "NestedValueType",
                "plural": false,
                "selections": [
                    (v13 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenValue",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedValueType",
                        "plural": false,
                        "selections": [
                            (v13 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "childrenValue",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "NestedValueType",
                                "plural": false,
                                "selections": [
                                    (v13 /*: any*/)
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '97fd1fe6407473277c4ffb812c934a1b';
export default node;
