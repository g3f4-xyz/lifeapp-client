/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NestedFieldFragmentSimpleMetasFragment$ref = any;
export type NestedFieldFragmentSimpleMetasFragment = {
    readonly label?: string | null;
    readonly fieldType?: string | null;
    readonly disabled?: boolean | null;
    readonly required?: boolean | null;
    readonly helperText?: string | null;
    readonly minLength?: number | null;
    readonly maxLength?: number | null;
    readonly defaultValue?: string | null;
    readonly inputType?: string | null;
    readonly defaultOption?: string | null;
    readonly options?: ReadonlyArray<{
        readonly text: string;
        readonly value: string;
    }>;
    readonly min?: number | null;
    readonly max?: number | null;
    readonly step?: number | null;
    readonly " $refType": NestedFieldFragmentSimpleMetasFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
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
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "defaultValue",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragmentSimpleMetasFragment",
        "type": "FieldMeta",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "InlineFragment",
                "type": "TextFieldMeta",
                "selections": [
                    (v0 /*: any*/),
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    (v3 /*: any*/),
                    (v4 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "minLength",
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
                    (v5 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "inputType",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "ChoiceFieldMeta",
                "selections": [
                    (v0 /*: any*/),
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    (v3 /*: any*/),
                    (v4 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "defaultOption",
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
                    (v5 /*: any*/)
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "SwitchFieldMeta",
                "selections": [
                    (v0 /*: any*/),
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    (v3 /*: any*/),
                    (v4 /*: any*/)
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "SliderFieldMeta",
                "selections": [
                    (v0 /*: any*/),
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    (v3 /*: any*/),
                    (v4 /*: any*/),
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
                        "name": "step",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '004ecf436c51b1dc6ebc259b0fa6c44a';
export default node;
