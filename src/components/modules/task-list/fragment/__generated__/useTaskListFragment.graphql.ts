/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskListFragment$ref = any;
export type useTaskListFragment = {
    readonly id: string;
    readonly taskType: TaskTypeEnum;
    readonly fields: ReadonlyArray<{
        readonly id?: string;
        readonly fieldId?: FieldIdEnum;
        readonly meta?: {
            readonly fieldType: FieldTypeEnum;
            readonly label: string;
            readonly disabled: boolean | null;
            readonly required: boolean;
            readonly max: number | null;
            readonly min: number | null;
            readonly step: number | null;
            readonly helperText: string;
            readonly defaultValue?: string | null;
            readonly options?: ReadonlyArray<{
                readonly text: string;
                readonly value: string;
            } | null>;
            readonly inputType?: string | null;
            readonly maxLength?: number | null;
            readonly minLength?: number | null;
            readonly parentValue?: {
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            } | null;
            readonly ownMeta?: {
                readonly fieldType?: FieldTypeEnum;
                readonly helperText?: string;
                readonly label?: string;
                readonly defaultValue?: string | null;
                readonly options?: ReadonlyArray<{
                    readonly text: string;
                    readonly value: string;
                } | null>;
                readonly required?: boolean;
                readonly inputType?: string | null;
                readonly min?: number | null;
                readonly max?: number | null;
                readonly maxLength?: number | null;
                readonly minLength?: number | null;
                readonly disabled?: boolean | null;
            } | null;
            readonly childrenMeta?: ReadonlyArray<{
                readonly fieldType: FieldTypeEnum;
                readonly parentValue: {
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                } | null;
                readonly ownMeta: {
                    readonly fieldType?: FieldTypeEnum;
                    readonly helperText?: string;
                    readonly label?: string;
                    readonly defaultValue?: string | null;
                    readonly options?: ReadonlyArray<{
                        readonly text: string;
                        readonly value: string;
                    } | null>;
                    readonly required?: boolean;
                    readonly inputType?: string | null;
                    readonly min?: number | null;
                    readonly max?: number | null;
                    readonly maxLength?: number | null;
                    readonly minLength?: number | null;
                    readonly disabled?: boolean | null;
                    readonly parentValue?: {
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    } | null;
                    readonly ownMeta?: {
                        readonly fieldType?: FieldTypeEnum;
                        readonly helperText?: string;
                        readonly label?: string;
                        readonly defaultValue?: string | null;
                        readonly options?: ReadonlyArray<{
                            readonly text: string;
                            readonly value: string;
                        } | null>;
                        readonly required?: boolean;
                        readonly inputType?: string | null;
                        readonly min?: number | null;
                        readonly max?: number | null;
                        readonly maxLength?: number | null;
                        readonly minLength?: number | null;
                        readonly disabled?: boolean | null;
                    } | null;
                    readonly childrenMeta?: ReadonlyArray<{
                        readonly fieldType: FieldTypeEnum;
                        readonly parentValue: {
                            readonly enabled?: boolean;
                            readonly text?: string;
                            readonly id?: string;
                        } | null;
                        readonly ownMeta: {
                            readonly fieldType?: FieldTypeEnum;
                            readonly helperText?: string;
                            readonly label?: string;
                            readonly defaultValue?: string | null;
                            readonly options?: ReadonlyArray<{
                                readonly text: string;
                                readonly value: string;
                            } | null>;
                            readonly required?: boolean;
                            readonly inputType?: string | null;
                            readonly min?: number | null;
                            readonly max?: number | null;
                            readonly maxLength?: number | null;
                            readonly minLength?: number | null;
                            readonly disabled?: boolean | null;
                        } | null;
                    } | null> | null;
                } | null;
                readonly childrenMeta: ReadonlyArray<{
                    readonly fieldType: FieldTypeEnum;
                    readonly parentValue: {
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    } | null;
                    readonly ownMeta: {
                        readonly fieldType?: FieldTypeEnum;
                        readonly helperText?: string;
                        readonly label?: string;
                        readonly defaultValue?: string | null;
                        readonly options?: ReadonlyArray<{
                            readonly text: string;
                            readonly value: string;
                        } | null>;
                        readonly required?: boolean;
                        readonly inputType?: string | null;
                        readonly min?: number | null;
                        readonly max?: number | null;
                        readonly maxLength?: number | null;
                        readonly minLength?: number | null;
                        readonly disabled?: boolean | null;
                        readonly parentValue?: {
                            readonly enabled?: boolean;
                            readonly text?: string;
                            readonly id?: string;
                        } | null;
                        readonly ownMeta?: {
                            readonly fieldType?: FieldTypeEnum;
                            readonly helperText?: string;
                            readonly label?: string;
                            readonly defaultValue?: string | null;
                            readonly options?: ReadonlyArray<{
                                readonly text: string;
                                readonly value: string;
                            } | null>;
                            readonly required?: boolean;
                            readonly inputType?: string | null;
                            readonly min?: number | null;
                            readonly max?: number | null;
                            readonly maxLength?: number | null;
                            readonly minLength?: number | null;
                            readonly disabled?: boolean | null;
                        } | null;
                        readonly childrenMeta?: ReadonlyArray<{
                            readonly fieldType: FieldTypeEnum;
                            readonly parentValue: {
                                readonly enabled?: boolean;
                                readonly text?: string;
                                readonly id?: string;
                            } | null;
                            readonly ownMeta: {
                                readonly fieldType?: FieldTypeEnum;
                                readonly helperText?: string;
                                readonly label?: string;
                                readonly defaultValue?: string | null;
                                readonly options?: ReadonlyArray<{
                                    readonly text: string;
                                    readonly value: string;
                                } | null>;
                                readonly required?: boolean;
                                readonly inputType?: string | null;
                                readonly min?: number | null;
                                readonly max?: number | null;
                                readonly maxLength?: number | null;
                                readonly minLength?: number | null;
                                readonly disabled?: boolean | null;
                            } | null;
                        } | null> | null;
                    } | null;
                } | null> | null;
            } | null> | null;
        };
        readonly value?: {
            readonly progress: number;
            readonly enabled?: boolean;
            readonly id?: string;
            readonly text?: string;
            readonly ownValue?: {
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            } | null;
            readonly childrenValue?: {
                readonly ownValue: {
                    readonly enabled?: boolean;
                    readonly text?: string;
                    readonly id?: string;
                } | null;
                readonly childrenValue: {
                    readonly ownValue: {
                        readonly enabled?: boolean;
                        readonly text?: string;
                        readonly id?: string;
                    } | null;
                } | null;
            } | null;
        };
    }>;
    readonly " $refType": useTaskListFragment$ref;
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
        "name": "fieldId",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v8 = [
        (v2 /*: any*/),
        (v3 /*: any*/),
        (v4 /*: any*/),
        (v5 /*: any*/)
    ], v9 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "enabled",
            "args": null,
            "storageKey": null
        } as any)
    ], v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v12 = [
        (v2 /*: any*/),
        (v10 /*: any*/),
        (v3 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "defaultValue",
            "args": null,
            "storageKey": null
        } as any),
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "options",
            "storageKey": null,
            "args": null,
            "concreteType": "ChoiceOptionsMetaType",
            "plural": true,
            "selections": [
                (v11 /*: any*/),
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any),
        (v5 /*: any*/)
    ], v13 = [
        (v0 /*: any*/)
    ], v14 = [
        (v2 /*: any*/),
        (v10 /*: any*/),
        (v3 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "inputType",
            "args": null,
            "storageKey": null
        } as any),
        (v7 /*: any*/),
        (v6 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "maxLength",
            "args": null,
            "storageKey": null
        } as any),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "minLength",
            "args": null,
            "storageKey": null
        } as any),
        (v5 /*: any*/)
    ], v15 = [
        (v11 /*: any*/)
    ], v16 = [
        ({
            "kind": "InlineFragment",
            "type": "SwitchValueType",
            "selections": (v9 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "TextValueType",
            "selections": (v15 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "ChoiceValueType",
            "selections": (v13 /*: any*/)
        } as any)
    ], v17 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v16 /*: any*/)
    } as any), v18 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": (v12 /*: any*/)
    } as any), v19 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": (v14 /*: any*/)
    } as any), v20 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": (v8 /*: any*/)
    } as any), v21 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v18 /*: any*/),
            (v19 /*: any*/),
            (v20 /*: any*/)
        ]
    } as any), v22 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v18 /*: any*/),
            (v19 /*: any*/),
            (v20 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v17 /*: any*/),
                    (v21 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v2 /*: any*/),
                            (v17 /*: any*/),
                            (v21 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v23 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v16 /*: any*/)
    } as any);
    return {
        "kind": "Fragment",
        "name": "useTaskListFragment",
        "type": "TaskType",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "taskType",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "fields",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": true,
                "selections": [
                    {
                        "kind": "InlineFragment",
                        "type": "SliderFieldType",
                        "selections": [
                            (v0 /*: any*/),
                            (v1 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "meta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SliderMetaType",
                                "plural": false,
                                "selections": [
                                    (v2 /*: any*/),
                                    (v3 /*: any*/),
                                    (v4 /*: any*/),
                                    (v5 /*: any*/),
                                    (v6 /*: any*/),
                                    (v7 /*: any*/),
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "step",
                                        "args": null,
                                        "storageKey": null
                                    }
                                ]
                            },
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "value",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SliderValueType",
                                "plural": false,
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
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "SwitchFieldType",
                        "selections": [
                            (v0 /*: any*/),
                            (v1 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "meta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SwitchMetaType",
                                "plural": false,
                                "selections": (v8 /*: any*/)
                            },
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "value",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SwitchValueType",
                                "plural": false,
                                "selections": (v9 /*: any*/)
                            }
                        ]
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "ChoiceFieldType",
                        "selections": [
                            (v0 /*: any*/),
                            (v1 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "meta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ChoiceMetaType",
                                "plural": false,
                                "selections": (v12 /*: any*/)
                            },
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "value",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ChoiceValueType",
                                "plural": false,
                                "selections": (v13 /*: any*/)
                            }
                        ]
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "TextFieldType",
                        "selections": [
                            (v0 /*: any*/),
                            (v1 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "meta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TextMetaType",
                                "plural": false,
                                "selections": (v14 /*: any*/)
                            },
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "value",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TextValueType",
                                "plural": false,
                                "selections": (v15 /*: any*/)
                            }
                        ]
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "NestedFieldType",
                        "selections": [
                            (v0 /*: any*/),
                            (v1 /*: any*/),
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "meta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "NestedMetaType",
                                "plural": false,
                                "selections": [
                                    (v2 /*: any*/),
                                    (v17 /*: any*/),
                                    (v21 /*: any*/),
                                    {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "childrenMeta",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "NestedMetaType",
                                        "plural": true,
                                        "selections": [
                                            (v2 /*: any*/),
                                            (v17 /*: any*/),
                                            (v22 /*: any*/),
                                            {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "childrenMeta",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "NestedMetaType",
                                                "plural": true,
                                                "selections": [
                                                    (v2 /*: any*/),
                                                    (v17 /*: any*/),
                                                    (v22 /*: any*/)
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
                                    (v23 /*: any*/),
                                    {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "childrenValue",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "NestedValueType",
                                        "plural": false,
                                        "selections": [
                                            (v23 /*: any*/),
                                            {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "childrenValue",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "NestedValueType",
                                                "plural": false,
                                                "selections": [
                                                    (v23 /*: any*/)
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'b78a91f58ff36b3b80bd2af11dc8fa9e';
export default node;
