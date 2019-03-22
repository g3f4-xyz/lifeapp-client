/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type TaskFragment$ref = any;
export type TaskQueryVariables = {
    readonly id?: string | null;
    readonly type?: string | null;
};
export type TaskQueryResponse = {
    readonly app: {
        readonly task: ({
            readonly id: string;
            readonly " $fragmentRefs": TaskFragment$ref;
        }) | null;
        readonly taskList: {
            readonly id: string;
        };
    };
};
export type TaskQuery = {
    readonly response: TaskQueryResponse;
    readonly variables: TaskQueryVariables;
};



/*
query TaskQuery(
  $id: ID
  $type: String
) {
  app {
    task(id: $id, type: $type) {
      id
      ...TaskFragment
    }
    taskList {
      id
    }
    id
  }
}

fragment TaskFragment on TaskType {
  id
  fields {
    fieldId
    order
    ...FieldFragment
    id
  }
}

fragment FieldFragment on FieldType {
  fieldType
  ...SliderFieldFragment
  ...SwitchFieldFragment
  ...ChoiceFieldFragment
  ...TextFieldFragment
  ...NestedFieldFragment
}

fragment SliderFieldFragment on FieldType {
  id
  fieldId
  meta {
    __typename
    ... on SliderMetaType {
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
    ... on SliderValueType {
      progress
    }
  }
}

fragment SwitchFieldFragment on FieldType {
  id
  fieldId
  meta {
    __typename
    ... on SwitchMetaType {
      fieldType
      label
      disabled
      required
    }
  }
  value {
    __typename
    ... on SwitchValueType {
      enabled
    }
  }
}

fragment ChoiceFieldFragment on FieldType {
  id
  fieldId
  meta {
    __typename
    ... on ChoiceMetaType {
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
    ... on ChoiceValueType {
      id
    }
  }
}

fragment TextFieldFragment on FieldType {
  id
  fieldId
  meta {
    __typename
    ... on TextMetaType {
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
    ... on TextValueType {
      text
    }
  }
}

fragment NestedFieldFragment on FieldType {
  id
  fieldId
  meta {
    __typename
    ... on NestedMetaType {
      fieldType
      parentValue {
        __typename
        ... on SwitchValueType {
          enabled
        }
        ... on TextValueType {
          text
        }
        ... on ChoiceValueType {
          id
        }
      }
      ownMeta {
        __typename
        ... on ChoiceMetaType {
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
        ... on TextMetaType {
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
        ... on SwitchMetaType {
          fieldType
          label
          disabled
          required
        }
      }
      childrenMeta {
        fieldType
        parentValue {
          __typename
          ... on SwitchValueType {
            enabled
          }
          ... on TextValueType {
            text
          }
          ... on ChoiceValueType {
            id
          }
        }
        ownMeta {
          __typename
          ... on ChoiceMetaType {
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
          ... on TextMetaType {
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
          ... on SwitchMetaType {
            fieldType
            label
            disabled
            required
          }
          ... on NestedMetaType {
            parentValue {
              __typename
              ... on SwitchValueType {
                enabled
              }
              ... on TextValueType {
                text
              }
              ... on ChoiceValueType {
                id
              }
            }
            ownMeta {
              __typename
              ... on ChoiceMetaType {
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
              ... on TextMetaType {
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
              ... on SwitchMetaType {
                fieldType
                label
                disabled
                required
              }
            }
            childrenMeta {
              fieldType
              parentValue {
                __typename
                ... on SwitchValueType {
                  enabled
                }
                ... on TextValueType {
                  text
                }
                ... on ChoiceValueType {
                  id
                }
              }
              ownMeta {
                __typename
                ... on ChoiceMetaType {
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
                ... on TextMetaType {
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
                ... on SwitchMetaType {
                  fieldType
                  label
                  disabled
                  required
                }
              }
            }
          }
        }
        childrenMeta {
          fieldType
          parentValue {
            __typename
            ... on SwitchValueType {
              enabled
            }
            ... on TextValueType {
              text
            }
            ... on ChoiceValueType {
              id
            }
          }
          ownMeta {
            __typename
            ... on ChoiceMetaType {
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
            ... on TextMetaType {
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
            ... on SwitchMetaType {
              fieldType
              label
              disabled
              required
            }
            ... on NestedMetaType {
              parentValue {
                __typename
                ... on SwitchValueType {
                  enabled
                }
                ... on TextValueType {
                  text
                }
                ... on ChoiceValueType {
                  id
                }
              }
              ownMeta {
                __typename
                ... on ChoiceMetaType {
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
                ... on TextMetaType {
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
                ... on SwitchMetaType {
                  fieldType
                  label
                  disabled
                  required
                }
              }
              childrenMeta {
                fieldType
                parentValue {
                  __typename
                  ... on SwitchValueType {
                    enabled
                  }
                  ... on TextValueType {
                    text
                  }
                  ... on ChoiceValueType {
                    id
                  }
                }
                ownMeta {
                  __typename
                  ... on ChoiceMetaType {
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
                  ... on TextMetaType {
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
                  ... on SwitchMetaType {
                    fieldType
                    label
                    disabled
                    required
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  value {
    __typename
    ... on NestedValueType {
      ownValue {
        __typename
        ... on SwitchValueType {
          enabled
        }
        ... on TextValueType {
          text
        }
        ... on ChoiceValueType {
          id
        }
      }
      childrenValue {
        ownValue {
          __typename
          ... on SwitchValueType {
            enabled
          }
          ... on TextValueType {
            text
          }
          ... on ChoiceValueType {
            id
          }
        }
        childrenValue {
          ownValue {
            __typename
            ... on SwitchValueType {
              enabled
            }
            ... on TextValueType {
              text
            }
            ... on ChoiceValueType {
              id
            }
          }
        }
      }
    }
  }
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
            "name": "type",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID"
        } as any),
        ({
            "kind": "Variable",
            "name": "type",
            "variableName": "type",
            "type": "String"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = [
        (v2 /*: any*/)
    ], v4 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "taskList",
        "storageKey": null,
        "args": null,
        "concreteType": "TaskListType",
        "plural": false,
        "selections": (v3 /*: any*/)
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": [
            (v5 /*: any*/),
            (v7 /*: any*/),
            (v8 /*: any*/),
            (v9 /*: any*/)
        ]
    } as any), v13 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v14 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v15 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": [
            (v5 /*: any*/),
            (v13 /*: any*/),
            (v7 /*: any*/),
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
                    (v14 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "value",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            (v9 /*: any*/)
        ]
    } as any), v16 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": [
            (v5 /*: any*/),
            (v13 /*: any*/),
            (v7 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "inputType",
                "args": null,
                "storageKey": null
            },
            (v11 /*: any*/),
            (v10 /*: any*/),
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
            (v9 /*: any*/)
        ]
    } as any), v17 = ({
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
    } as any), v18 = ({
        "kind": "InlineFragment",
        "type": "TextValueType",
        "selections": [
            (v14 /*: any*/)
        ]
    } as any), v19 = ({
        "kind": "InlineFragment",
        "type": "ChoiceValueType",
        "selections": (v3 /*: any*/)
    } as any), v20 = [
        (v6 /*: any*/),
        (v17 /*: any*/),
        (v18 /*: any*/),
        (v19 /*: any*/)
    ], v21 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v20 /*: any*/)
    } as any), v22 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v6 /*: any*/),
            (v15 /*: any*/),
            (v16 /*: any*/),
            (v12 /*: any*/)
        ]
    } as any), v23 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v6 /*: any*/),
            (v15 /*: any*/),
            (v16 /*: any*/),
            (v12 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v21 /*: any*/),
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
                            (v5 /*: any*/),
                            (v21 /*: any*/),
                            (v22 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v24 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v20 /*: any*/)
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TaskQuery",
            "type": "QueryType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "task",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "TaskType",
                            "plural": false,
                            "selections": [
                                (v2 /*: any*/),
                                {
                                    "kind": "FragmentSpread",
                                    "name": "TaskFragment",
                                    "args": null
                                }
                            ]
                        },
                        (v4 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "TaskQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "task",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "TaskType",
                            "plural": false,
                            "selections": [
                                (v2 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "fields",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "FieldType",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "fieldId",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "order",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v5 /*: any*/),
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
                                                (v6 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "SliderMetaType",
                                                    "selections": [
                                                        (v5 /*: any*/),
                                                        (v7 /*: any*/),
                                                        (v8 /*: any*/),
                                                        (v9 /*: any*/),
                                                        (v10 /*: any*/),
                                                        (v11 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "step",
                                                            "args": null,
                                                            "storageKey": null
                                                        }
                                                    ]
                                                },
                                                (v12 /*: any*/),
                                                (v15 /*: any*/),
                                                (v16 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "NestedMetaType",
                                                    "selections": [
                                                        (v5 /*: any*/),
                                                        (v21 /*: any*/),
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
                                                                (v5 /*: any*/),
                                                                (v21 /*: any*/),
                                                                (v23 /*: any*/),
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "childrenMeta",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": "NestedMetaType",
                                                                    "plural": true,
                                                                    "selections": [
                                                                        (v5 /*: any*/),
                                                                        (v21 /*: any*/),
                                                                        (v23 /*: any*/)
                                                                    ]
                                                                }
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
                                            "concreteType": null,
                                            "plural": false,
                                            "selections": [
                                                (v6 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "SliderValueType",
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
                                                (v17 /*: any*/),
                                                (v19 /*: any*/),
                                                (v18 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "NestedValueType",
                                                    "selections": [
                                                        (v24 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "childrenValue",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": "NestedValueType",
                                                            "plural": false,
                                                            "selections": [
                                                                (v24 /*: any*/),
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "childrenValue",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": "NestedValueType",
                                                                    "plural": false,
                                                                    "selections": [
                                                                        (v24 /*: any*/)
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
                        },
                        (v4 /*: any*/),
                        (v2 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "TaskQuery",
            "id": null,
            "text": "query TaskQuery(\n  $id: ID\n  $type: String\n) {\n  app {\n    task(id: $id, type: $type) {\n      id\n      ...TaskFragment\n    }\n    taskList {\n      id\n    }\n    id\n  }\n}\n\nfragment TaskFragment on TaskType {\n  id\n  fields {\n    fieldId\n    order\n    ...FieldFragment\n    id\n  }\n}\n\nfragment FieldFragment on FieldType {\n  fieldType\n  ...SliderFieldFragment\n  ...SwitchFieldFragment\n  ...ChoiceFieldFragment\n  ...TextFieldFragment\n  ...NestedFieldFragment\n}\n\nfragment SliderFieldFragment on FieldType {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SliderMetaType {\n      fieldType\n      label\n      disabled\n      required\n      max\n      min\n      step\n    }\n  }\n  value {\n    __typename\n    ... on SliderValueType {\n      progress\n    }\n  }\n}\n\nfragment SwitchFieldFragment on FieldType {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on SwitchMetaType {\n      fieldType\n      label\n      disabled\n      required\n    }\n  }\n  value {\n    __typename\n    ... on SwitchValueType {\n      enabled\n    }\n  }\n}\n\nfragment ChoiceFieldFragment on FieldType {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on ChoiceMetaType {\n      fieldType\n      helperText\n      label\n      defaultValue\n      options {\n        text\n        value\n      }\n      required\n    }\n  }\n  value {\n    __typename\n    ... on ChoiceValueType {\n      id\n    }\n  }\n}\n\nfragment TextFieldFragment on FieldType {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on TextMetaType {\n      fieldType\n      helperText\n      label\n      inputType\n      min\n      max\n      maxLength\n      minLength\n      required\n    }\n  }\n  value {\n    __typename\n    ... on TextValueType {\n      text\n    }\n  }\n}\n\nfragment NestedFieldFragment on FieldType {\n  id\n  fieldId\n  meta {\n    __typename\n    ... on NestedMetaType {\n      fieldType\n      parentValue {\n        __typename\n        ... on SwitchValueType {\n          enabled\n        }\n        ... on TextValueType {\n          text\n        }\n        ... on ChoiceValueType {\n          id\n        }\n      }\n      ownMeta {\n        __typename\n        ... on ChoiceMetaType {\n          fieldType\n          helperText\n          label\n          defaultValue\n          options {\n            text\n            value\n          }\n          required\n        }\n        ... on TextMetaType {\n          fieldType\n          helperText\n          label\n          inputType\n          min\n          max\n          maxLength\n          minLength\n          required\n        }\n        ... on SwitchMetaType {\n          fieldType\n          label\n          disabled\n          required\n        }\n      }\n      childrenMeta {\n        fieldType\n        parentValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        ownMeta {\n          __typename\n          ... on ChoiceMetaType {\n            fieldType\n            helperText\n            label\n            defaultValue\n            options {\n              text\n              value\n            }\n            required\n          }\n          ... on TextMetaType {\n            fieldType\n            helperText\n            label\n            inputType\n            min\n            max\n            maxLength\n            minLength\n            required\n          }\n          ... on SwitchMetaType {\n            fieldType\n            label\n            disabled\n            required\n          }\n          ... on NestedMetaType {\n            parentValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n            ownMeta {\n              __typename\n              ... on ChoiceMetaType {\n                fieldType\n                helperText\n                label\n                defaultValue\n                options {\n                  text\n                  value\n                }\n                required\n              }\n              ... on TextMetaType {\n                fieldType\n                helperText\n                label\n                inputType\n                min\n                max\n                maxLength\n                minLength\n                required\n              }\n              ... on SwitchMetaType {\n                fieldType\n                label\n                disabled\n                required\n              }\n            }\n            childrenMeta {\n              fieldType\n              parentValue {\n                __typename\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n                ... on ChoiceValueType {\n                  id\n                }\n              }\n              ownMeta {\n                __typename\n                ... on ChoiceMetaType {\n                  fieldType\n                  helperText\n                  label\n                  defaultValue\n                  options {\n                    text\n                    value\n                  }\n                  required\n                }\n                ... on TextMetaType {\n                  fieldType\n                  helperText\n                  label\n                  inputType\n                  min\n                  max\n                  maxLength\n                  minLength\n                  required\n                }\n                ... on SwitchMetaType {\n                  fieldType\n                  label\n                  disabled\n                  required\n                }\n              }\n            }\n          }\n        }\n        childrenMeta {\n          fieldType\n          parentValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          ownMeta {\n            __typename\n            ... on ChoiceMetaType {\n              fieldType\n              helperText\n              label\n              defaultValue\n              options {\n                text\n                value\n              }\n              required\n            }\n            ... on TextMetaType {\n              fieldType\n              helperText\n              label\n              inputType\n              min\n              max\n              maxLength\n              minLength\n              required\n            }\n            ... on SwitchMetaType {\n              fieldType\n              label\n              disabled\n              required\n            }\n            ... on NestedMetaType {\n              parentValue {\n                __typename\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n                ... on ChoiceValueType {\n                  id\n                }\n              }\n              ownMeta {\n                __typename\n                ... on ChoiceMetaType {\n                  fieldType\n                  helperText\n                  label\n                  defaultValue\n                  options {\n                    text\n                    value\n                  }\n                  required\n                }\n                ... on TextMetaType {\n                  fieldType\n                  helperText\n                  label\n                  inputType\n                  min\n                  max\n                  maxLength\n                  minLength\n                  required\n                }\n                ... on SwitchMetaType {\n                  fieldType\n                  label\n                  disabled\n                  required\n                }\n              }\n              childrenMeta {\n                fieldType\n                parentValue {\n                  __typename\n                  ... on SwitchValueType {\n                    enabled\n                  }\n                  ... on TextValueType {\n                    text\n                  }\n                  ... on ChoiceValueType {\n                    id\n                  }\n                }\n                ownMeta {\n                  __typename\n                  ... on ChoiceMetaType {\n                    fieldType\n                    helperText\n                    label\n                    defaultValue\n                    options {\n                      text\n                      value\n                    }\n                    required\n                  }\n                  ... on TextMetaType {\n                    fieldType\n                    helperText\n                    label\n                    inputType\n                    min\n                    max\n                    maxLength\n                    minLength\n                    required\n                  }\n                  ... on SwitchMetaType {\n                    fieldType\n                    label\n                    disabled\n                    required\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  value {\n    __typename\n    ... on NestedValueType {\n      ownValue {\n        __typename\n        ... on SwitchValueType {\n          enabled\n        }\n        ... on TextValueType {\n          text\n        }\n        ... on ChoiceValueType {\n          id\n        }\n      }\n      childrenValue {\n        ownValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        childrenValue {\n          ownValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '8abbdc0335539ec53034468a551c619c';
export default node;
