/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type ChoiceFieldFragment$ref = any;
export type ChoiceFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldIdEnum;
    readonly meta: {
        readonly fieldType?: FieldTypeEnum;
        readonly helperText?: string;
        readonly label?: string;
        readonly defaultValue?: string | null;
        readonly options?: ReadonlyArray<({
            readonly text: string;
            readonly value: string;
        }) | null>;
        readonly required?: boolean;
    };
    readonly value: {
        readonly id?: string;
    };
    readonly " $refType": ChoiceFieldFragment$ref;
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
        "name": "ChoiceFieldFragment",
        "type": "FieldType",
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
                        "type": "ChoiceMetaType",
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
                        "type": "ChoiceValueType",
                        "selections": [
                            (v0 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'ca19801ab22d43d0fbcd730397eb1884';
export default node;
