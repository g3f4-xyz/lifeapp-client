/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type NestedFieldFragmentMeta$ref = any;
export type NestedFieldFragmentMeta = {
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
    readonly " $refType": NestedFieldFragmentMeta$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            {
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
            },
            {
                "kind": "InlineFragment",
                "type": "TextValueType",
                "selections": [
                    (v1 /*: any*/)
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "ChoiceValueType",
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": [
            (v0 /*: any*/),
            (v3 /*: any*/),
            (v4 /*: any*/),
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
                    (v1 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "value",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            (v5 /*: any*/)
        ]
    } as any), v7 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": [
            (v0 /*: any*/),
            (v3 /*: any*/),
            (v4 /*: any*/),
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
            (v5 /*: any*/)
        ]
    } as any), v8 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": [
            (v0 /*: any*/),
            (v4 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "disabled",
                "args": null,
                "storageKey": null
            },
            (v5 /*: any*/)
        ]
    } as any), v9 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v8 /*: any*/)
        ]
    } as any), v10 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v8 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v2 /*: any*/),
                    (v9 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v0 /*: any*/),
                            (v2 /*: any*/),
                            (v9 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any);
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragmentMeta",
        "type": "NestedMetaType",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            (v2 /*: any*/),
            (v9 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "childrenMeta",
                "storageKey": null,
                "args": null,
                "concreteType": "NestedMetaType",
                "plural": true,
                "selections": [
                    (v0 /*: any*/),
                    (v2 /*: any*/),
                    (v10 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v0 /*: any*/),
                            (v2 /*: any*/),
                            (v10 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'fa9433dfdc330f49d0c2f7cc33664d68';
export default node;
