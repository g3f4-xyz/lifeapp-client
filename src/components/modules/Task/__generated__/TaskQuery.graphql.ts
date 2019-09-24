/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type TaskFragment_data$ref = any;
export type TaskQueryVariables = {
    readonly id?: string | null;
    readonly type?: string | null;
};
export type TaskQueryResponse = {
    readonly app: {
        readonly task: {
            readonly id: string;
            readonly " $fragmentRefs": TaskFragment_data$ref;
        } | null;
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
      ...TaskFragment_data
    }
    taskList {
      id
    }
    id
  }
}

fragment TaskFragment_data on TaskType {
  id
  fields {
    __typename
    ... on ChoiceFieldType {
      fieldId
      fieldType
      order
    }
    ... on SwitchFieldType {
      fieldId
      fieldType
      order
    }
    ... on SliderFieldType {
      fieldId
      fieldType
      order
    }
    ... on NestedFieldType {
      fieldId
      fieldType
      order
    }
    ... on TextFieldType {
      fieldId
      fieldType
      order
    }
    ...SliderFieldFragment_data
    ...SwitchFieldFragment_data
    ...ChoiceFieldFragment_data
    ...TextFieldFragment_data
    ...NestedFieldFragment_data
    ... on Node {
      id
    }
  }
}

fragment SliderFieldFragment_data on SliderFieldType {
  id
  fieldId
  meta {
    fieldType
    label
    disabled
    required
    max
    min
    step
  }
  value {
    progress
  }
}

fragment SwitchFieldFragment_data on SwitchFieldType {
  id
  fieldId
  meta {
    fieldType
    label
    disabled
    required
  }
  value {
    enabled
  }
}

fragment ChoiceFieldFragment_data on ChoiceFieldType {
  id
  fieldId
  meta {
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
  value {
    id
  }
}

fragment TextFieldFragment_data on TextFieldType {
  id
  fieldId
  meta {
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
  value {
    text
  }
}

fragment NestedFieldFragment_data on NestedFieldType {
  id
  fieldId
  meta {
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
  value {
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
            "variableName": "id"
        } as any),
        ({
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
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
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldId",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "order",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v13 = [
        (v7 /*: any*/),
        (v9 /*: any*/),
        (v10 /*: any*/),
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
        (v12 /*: any*/)
    ], v14 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v15 = [
        (v7 /*: any*/),
        (v10 /*: any*/),
        (v14 /*: any*/),
        (v12 /*: any*/)
    ], v16 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "enabled",
            "args": null,
            "storageKey": null
        } as any)
    ], v17 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v18 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v19 = [
        (v11 /*: any*/)
    ], v20 = [
        (v5 /*: any*/),
        ({
            "kind": "InlineFragment",
            "type": "SwitchValueType",
            "selections": (v16 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "TextValueType",
            "selections": (v19 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "ChoiceValueType",
            "selections": (v3 /*: any*/)
        } as any)
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
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": (v13 /*: any*/)
    } as any), v23 = [
        (v7 /*: any*/),
        (v9 /*: any*/),
        (v10 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "inputType",
            "args": null,
            "storageKey": null
        } as any),
        (v18 /*: any*/),
        (v17 /*: any*/),
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
        (v12 /*: any*/)
    ], v24 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": (v23 /*: any*/)
    } as any), v25 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": (v15 /*: any*/)
    } as any), v26 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v5 /*: any*/),
            (v22 /*: any*/),
            (v24 /*: any*/),
            (v25 /*: any*/)
        ]
    } as any), v27 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v5 /*: any*/),
            (v22 /*: any*/),
            (v24 /*: any*/),
            (v25 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v21 /*: any*/),
                    (v26 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedMetaType",
                        "plural": true,
                        "selections": [
                            (v7 /*: any*/),
                            (v21 /*: any*/),
                            (v26 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v28 = ({
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
                                    "name": "TaskFragment_data",
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
                                    "concreteType": null,
                                    "plural": true,
                                    "selections": [
                                        (v5 /*: any*/),
                                        (v2 /*: any*/),
                                        {
                                            "kind": "InlineFragment",
                                            "type": "ChoiceFieldType",
                                            "selections": [
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "meta",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "ChoiceMetaType",
                                                    "plural": false,
                                                    "selections": (v13 /*: any*/)
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "value",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "ChoiceValueType",
                                                    "plural": false,
                                                    "selections": (v3 /*: any*/)
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "SwitchFieldType",
                                            "selections": [
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "meta",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "SwitchMetaType",
                                                    "plural": false,
                                                    "selections": (v15 /*: any*/)
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "value",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "SwitchValueType",
                                                    "plural": false,
                                                    "selections": (v16 /*: any*/)
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "SliderFieldType",
                                            "selections": [
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "meta",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "SliderMetaType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v7 /*: any*/),
                                                        (v10 /*: any*/),
                                                        (v14 /*: any*/),
                                                        (v12 /*: any*/),
                                                        (v17 /*: any*/),
                                                        (v18 /*: any*/),
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
                                            "type": "NestedFieldType",
                                            "selections": [
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "meta",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "NestedMetaType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v7 /*: any*/),
                                                        (v21 /*: any*/),
                                                        (v26 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "childrenMeta",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": "NestedMetaType",
                                                            "plural": true,
                                                            "selections": [
                                                                (v7 /*: any*/),
                                                                (v21 /*: any*/),
                                                                (v27 /*: any*/),
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "childrenMeta",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": "NestedMetaType",
                                                                    "plural": true,
                                                                    "selections": [
                                                                        (v7 /*: any*/),
                                                                        (v21 /*: any*/),
                                                                        (v27 /*: any*/)
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
                                                        (v28 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "childrenValue",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": "NestedValueType",
                                                            "plural": false,
                                                            "selections": [
                                                                (v28 /*: any*/),
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "childrenValue",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": "NestedValueType",
                                                                    "plural": false,
                                                                    "selections": [
                                                                        (v28 /*: any*/)
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "InlineFragment",
                                            "type": "TextFieldType",
                                            "selections": [
                                                (v6 /*: any*/),
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "meta",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TextMetaType",
                                                    "plural": false,
                                                    "selections": (v23 /*: any*/)
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "value",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TextValueType",
                                                    "plural": false,
                                                    "selections": (v19 /*: any*/)
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
            "text": "query TaskQuery(\n  $id: ID\n  $type: String\n) {\n  app {\n    task(id: $id, type: $type) {\n      id\n      ...TaskFragment_data\n    }\n    taskList {\n      id\n    }\n    id\n  }\n}\n\nfragment TaskFragment_data on TaskType {\n  id\n  fields {\n    __typename\n    ... on ChoiceFieldType {\n      fieldId\n      fieldType\n      order\n    }\n    ... on SwitchFieldType {\n      fieldId\n      fieldType\n      order\n    }\n    ... on SliderFieldType {\n      fieldId\n      fieldType\n      order\n    }\n    ... on NestedFieldType {\n      fieldId\n      fieldType\n      order\n    }\n    ... on TextFieldType {\n      fieldId\n      fieldType\n      order\n    }\n    ...SliderFieldFragment_data\n    ...SwitchFieldFragment_data\n    ...ChoiceFieldFragment_data\n    ...TextFieldFragment_data\n    ...NestedFieldFragment_data\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment SliderFieldFragment_data on SliderFieldType {\n  id\n  fieldId\n  meta {\n    fieldType\n    label\n    disabled\n    required\n    max\n    min\n    step\n  }\n  value {\n    progress\n  }\n}\n\nfragment SwitchFieldFragment_data on SwitchFieldType {\n  id\n  fieldId\n  meta {\n    fieldType\n    label\n    disabled\n    required\n  }\n  value {\n    enabled\n  }\n}\n\nfragment ChoiceFieldFragment_data on ChoiceFieldType {\n  id\n  fieldId\n  meta {\n    fieldType\n    helperText\n    label\n    defaultValue\n    options {\n      text\n      value\n    }\n    required\n  }\n  value {\n    id\n  }\n}\n\nfragment TextFieldFragment_data on TextFieldType {\n  id\n  fieldId\n  meta {\n    fieldType\n    helperText\n    label\n    inputType\n    min\n    max\n    maxLength\n    minLength\n    required\n  }\n  value {\n    text\n  }\n}\n\nfragment NestedFieldFragment_data on NestedFieldType {\n  id\n  fieldId\n  meta {\n    fieldType\n    parentValue {\n      __typename\n      ... on SwitchValueType {\n        enabled\n      }\n      ... on TextValueType {\n        text\n      }\n      ... on ChoiceValueType {\n        id\n      }\n    }\n    ownMeta {\n      __typename\n      ... on ChoiceMetaType {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextMetaType {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n      ... on SwitchMetaType {\n        fieldType\n        label\n        disabled\n        required\n      }\n    }\n    childrenMeta {\n      fieldType\n      parentValue {\n        __typename\n        ... on SwitchValueType {\n          enabled\n        }\n        ... on TextValueType {\n          text\n        }\n        ... on ChoiceValueType {\n          id\n        }\n      }\n      ownMeta {\n        __typename\n        ... on ChoiceMetaType {\n          fieldType\n          helperText\n          label\n          defaultValue\n          options {\n            text\n            value\n          }\n          required\n        }\n        ... on TextMetaType {\n          fieldType\n          helperText\n          label\n          inputType\n          min\n          max\n          maxLength\n          minLength\n          required\n        }\n        ... on SwitchMetaType {\n          fieldType\n          label\n          disabled\n          required\n        }\n        ... on NestedMetaType {\n          parentValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          ownMeta {\n            __typename\n            ... on ChoiceMetaType {\n              fieldType\n              helperText\n              label\n              defaultValue\n              options {\n                text\n                value\n              }\n              required\n            }\n            ... on TextMetaType {\n              fieldType\n              helperText\n              label\n              inputType\n              min\n              max\n              maxLength\n              minLength\n              required\n            }\n            ... on SwitchMetaType {\n              fieldType\n              label\n              disabled\n              required\n            }\n          }\n          childrenMeta {\n            fieldType\n            parentValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n            ownMeta {\n              __typename\n              ... on ChoiceMetaType {\n                fieldType\n                helperText\n                label\n                defaultValue\n                options {\n                  text\n                  value\n                }\n                required\n              }\n              ... on TextMetaType {\n                fieldType\n                helperText\n                label\n                inputType\n                min\n                max\n                maxLength\n                minLength\n                required\n              }\n              ... on SwitchMetaType {\n                fieldType\n                label\n                disabled\n                required\n              }\n            }\n          }\n        }\n      }\n      childrenMeta {\n        fieldType\n        parentValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        ownMeta {\n          __typename\n          ... on ChoiceMetaType {\n            fieldType\n            helperText\n            label\n            defaultValue\n            options {\n              text\n              value\n            }\n            required\n          }\n          ... on TextMetaType {\n            fieldType\n            helperText\n            label\n            inputType\n            min\n            max\n            maxLength\n            minLength\n            required\n          }\n          ... on SwitchMetaType {\n            fieldType\n            label\n            disabled\n            required\n          }\n          ... on NestedMetaType {\n            parentValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n            ownMeta {\n              __typename\n              ... on ChoiceMetaType {\n                fieldType\n                helperText\n                label\n                defaultValue\n                options {\n                  text\n                  value\n                }\n                required\n              }\n              ... on TextMetaType {\n                fieldType\n                helperText\n                label\n                inputType\n                min\n                max\n                maxLength\n                minLength\n                required\n              }\n              ... on SwitchMetaType {\n                fieldType\n                label\n                disabled\n                required\n              }\n            }\n            childrenMeta {\n              fieldType\n              parentValue {\n                __typename\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n                ... on ChoiceValueType {\n                  id\n                }\n              }\n              ownMeta {\n                __typename\n                ... on ChoiceMetaType {\n                  fieldType\n                  helperText\n                  label\n                  defaultValue\n                  options {\n                    text\n                    value\n                  }\n                  required\n                }\n                ... on TextMetaType {\n                  fieldType\n                  helperText\n                  label\n                  inputType\n                  min\n                  max\n                  maxLength\n                  minLength\n                  required\n                }\n                ... on SwitchMetaType {\n                  fieldType\n                  label\n                  disabled\n                  required\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  value {\n    ownValue {\n      __typename\n      ... on SwitchValueType {\n        enabled\n      }\n      ... on TextValueType {\n        text\n      }\n      ... on ChoiceValueType {\n        id\n      }\n    }\n    childrenValue {\n      ownValue {\n        __typename\n        ... on SwitchValueType {\n          enabled\n        }\n        ... on TextValueType {\n          text\n        }\n        ... on ChoiceValueType {\n          id\n        }\n      }\n      childrenValue {\n        ownValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '55512bcfa475cdaa0ea0432d0d81a4e3';
export default node;
