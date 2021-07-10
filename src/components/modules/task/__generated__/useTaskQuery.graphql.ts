/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskQueryVariables = {
    id?: string | null;
    typeId?: TaskTypeId | null;
};
export type useTaskQueryResponse = {
    readonly task: {
        readonly " $fragmentRefs": FragmentRefs<"useTaskFragment">;
    };
};
export type useTaskQuery = {
    readonly response: useTaskQueryResponse;
    readonly variables: useTaskQueryVariables;
};



/*
query useTaskQuery(
  $id: ID
  $typeId: TaskTypeId
) {
  task(id: $id, typeId: $typeId) {
    ...useTaskFragment
    id
  }
}

fragment useChoiceFieldFragment on Field {
  id
  fieldId
  meta {
    __typename
    ... on ChoiceFieldMeta {
      fieldType
      helperText
      label
      defaultValue
      options {
        text
        value
      }
      required
    }
  }
  value {
    __typename
    ... on ChoiceFieldValue {
      id
    }
  }
}

fragment useNestedFieldFragment on Field {
  id
  fieldId
}

fragment useSliderFieldFragment on Field {
  id
  fieldId
  meta {
    __typename
    ... on SliderFieldMeta {
      fieldType
      label
      disabled
      required
      max
      min
      step
    }
  }
  value {
    __typename
    ... on SliderFieldValue {
      progress
    }
  }
}

fragment useSwitchFieldFragment on Field {
  id
  fieldId
  meta {
    __typename
    ... on SwitchFieldMeta {
      fieldType
      label
      disabled
      required
    }
  }
  value {
    __typename
    ... on SwitchFieldValue {
      enabled
    }
  }
}

fragment useTaskFragment on Task {
  id
  fields {
    __typename
    fieldId
    fieldType
    order
    ...useSliderFieldFragment
    ...useSwitchFieldFragment
    ...useChoiceFieldFragment
    ...useTextFieldFragment
    ...useNestedFieldFragment
  }
}

fragment useTextFieldFragment on Field {
  id
  fieldId
  meta {
    __typename
    ... on TextFieldMeta {
      fieldType
      helperText
      label
      inputType
      min
      max
      maxLength
      minLength
      required
    }
  }
  value {
    __typename
    ... on TextFieldValue {
      text
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "id"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "typeId"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
        } as any,
        {
            "kind": "Variable",
            "name": "typeId",
            "variableName": "typeId"
        } as any
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fieldType",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "required",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "max",
        "storageKey": null
    } as any, v9 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "min",
        "storageKey": null
    } as any, v10 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "helperText",
        "storageKey": null
    } as any, v11 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Task",
                    "kind": "LinkedField",
                    "name": "task",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useTaskFragment"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useTaskQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Task",
                    "kind": "LinkedField",
                    "name": "task",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Field",
                            "kind": "LinkedField",
                            "name": "fields",
                            "plural": true,
                            "selections": [
                                (v3 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "fieldId",
                                    "storageKey": null
                                },
                                (v4 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "order",
                                    "storageKey": null
                                },
                                (v2 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "meta",
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/),
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                (v9 /*: any*/),
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
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/)
                                            ],
                                            "type": "SwitchFieldMeta",
                                            "abstractKey": null
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v10 /*: any*/),
                                                (v5 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "defaultValue",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "FieldMetaOptions",
                                                    "kind": "LinkedField",
                                                    "name": "options",
                                                    "plural": true,
                                                    "selections": [
                                                        (v11 /*: any*/),
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "value",
                                                            "storageKey": null
                                                        }
                                                    ],
                                                    "storageKey": null
                                                },
                                                (v7 /*: any*/)
                                            ],
                                            "type": "ChoiceFieldMeta",
                                            "abstractKey": null
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v10 /*: any*/),
                                                (v5 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "inputType",
                                                    "storageKey": null
                                                },
                                                (v9 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "maxLength",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "minLength",
                                                    "storageKey": null
                                                },
                                                (v7 /*: any*/)
                                            ],
                                            "type": "TextFieldMeta",
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
                                        (v3 /*: any*/),
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
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "enabled",
                                                    "storageKey": null
                                                }
                                            ],
                                            "type": "SwitchFieldValue",
                                            "abstractKey": null
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v2 /*: any*/)
                                            ],
                                            "type": "ChoiceFieldValue",
                                            "abstractKey": null
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v11 /*: any*/)
                                            ],
                                            "type": "TextFieldValue",
                                            "abstractKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "ce78620fcbb29c6968967d2ffe992c3f",
            "id": null,
            "metadata": {},
            "name": "useTaskQuery",
            "operationKind": "query",
            "text": "query useTaskQuery(\n  $id: ID\n  $typeId: TaskTypeId\n) {\n  task(id: $id, typeId: $typeId) {\n    ...useTaskFragment\n    id\n  }\n}\n\nfragment useChoiceFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on ChoiceFieldMeta {\n      fieldType\n      helperText\n      label\n      defaultValue\n      options {\n        text\n        value\n      }\n      required\n    }\n  }\n  value {\n    __typename\n    ... on ChoiceFieldValue {\n      id\n    }\n  }\n}\n\nfragment useNestedFieldFragment on Field {\n  id\n  fieldId\n}\n\nfragment useSliderFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SliderFieldMeta {\n      fieldType\n      label\n      disabled\n      required\n      max\n      min\n      step\n    }\n  }\n  value {\n    __typename\n    ... on SliderFieldValue {\n      progress\n    }\n  }\n}\n\nfragment useSwitchFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SwitchFieldMeta {\n      fieldType\n      label\n      disabled\n      required\n    }\n  }\n  value {\n    __typename\n    ... on SwitchFieldValue {\n      enabled\n    }\n  }\n}\n\nfragment useTaskFragment on Task {\n  id\n  fields {\n    __typename\n    fieldId\n    fieldType\n    order\n    ...useSliderFieldFragment\n    ...useSwitchFieldFragment\n    ...useChoiceFieldFragment\n    ...useTextFieldFragment\n    ...useNestedFieldFragment\n  }\n}\n\nfragment useTextFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on TextFieldMeta {\n      fieldType\n      helperText\n      label\n      inputType\n      min\n      max\n      maxLength\n      minLength\n      required\n    }\n  }\n  value {\n    __typename\n    ... on TextFieldValue {\n      text\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '300be6612367bc684f87dc3718c9bf66';
export default node;
