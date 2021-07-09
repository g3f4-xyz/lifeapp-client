/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskFragment$ref = any;
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskQueryVariables = {
    readonly id?: string | null;
    readonly typeId?: TaskTypeId | null;
};
export type useTaskQueryResponse = {
    readonly task: {
        readonly " $fragmentRefs": useTaskFragment$ref;
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

fragment useNestedFieldFragment on Field {
  id
  fieldId
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "id",
            "type": "ID",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "typeId",
            "type": "TaskTypeId",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
        } as any),
        ({
            "kind": "Variable",
            "name": "typeId",
            "variableName": "typeId"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
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
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "useTaskQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "task",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Task",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "useTaskFragment",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "useTaskQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "task",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Task",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "fields",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Field",
                            "plural": true,
                            "selections": [
                                (v3 /*: any*/),
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "fieldId",
                                    "args": null,
                                    "storageKey": null
                                },
                                (v4 /*: any*/),
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "order",
                                    "args": null,
                                    "storageKey": null
                                },
                                (v2 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "meta",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/),
                                        {
                                            "kind": "InlineFragment",
                                            "type": "SliderFieldMeta",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                (v9 /*: any*/),
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
                                            "kind": "InlineFragment",
                                            "type": "SwitchFieldMeta",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v5 /*: any*/),
                                                (v6 /*: any*/),
                                                (v7 /*: any*/)
                                            ]
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "ChoiceFieldMeta",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v10 /*: any*/),
                                                (v5 /*: any*/),
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
                                                        (v11 /*: any*/),
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
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "TextFieldMeta",
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v10 /*: any*/),
                                                (v5 /*: any*/),
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "inputType",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                (v9 /*: any*/),
                                                (v8 /*: any*/),
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
                                        (v3 /*: any*/),
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
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "SwitchFieldValue",
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
                                            "type": "ChoiceFieldValue",
                                            "selections": [
                                                (v2 /*: any*/)
                                            ]
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "TextFieldValue",
                                            "selections": [
                                                (v11 /*: any*/)
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskQuery",
            "id": null,
            "text": "query useTaskQuery(\n  $id: ID\n  $typeId: TaskTypeId\n) {\n  task(id: $id, typeId: $typeId) {\n    ...useTaskFragment\n    id\n  }\n}\n\nfragment useTaskFragment on Task {\n  id\n  fields {\n    __typename\n    fieldId\n    fieldType\n    order\n    ...useSliderFieldFragment\n    ...useSwitchFieldFragment\n    ...useChoiceFieldFragment\n    ...useTextFieldFragment\n    ...useNestedFieldFragment\n  }\n}\n\nfragment useSliderFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SliderFieldMeta {\n      fieldType\n      label\n      disabled\n      required\n      max\n      min\n      step\n    }\n  }\n  value {\n    __typename\n    ... on SliderFieldValue {\n      progress\n    }\n  }\n}\n\nfragment useSwitchFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SwitchFieldMeta {\n      fieldType\n      label\n      disabled\n      required\n    }\n  }\n  value {\n    __typename\n    ... on SwitchFieldValue {\n      enabled\n    }\n  }\n}\n\nfragment useChoiceFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on ChoiceFieldMeta {\n      fieldType\n      helperText\n      label\n      defaultValue\n      options {\n        text\n        value\n      }\n      required\n    }\n  }\n  value {\n    __typename\n    ... on ChoiceFieldValue {\n      id\n    }\n  }\n}\n\nfragment useTextFieldFragment on Field {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on TextFieldMeta {\n      fieldType\n      helperText\n      label\n      inputType\n      min\n      max\n      maxLength\n      minLength\n      required\n    }\n  }\n  value {\n    __typename\n    ... on TextFieldValue {\n      text\n    }\n  }\n}\n\nfragment useNestedFieldFragment on Field {\n  id\n  fieldId\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '300be6612367bc684f87dc3718c9bf66';
export default node;
