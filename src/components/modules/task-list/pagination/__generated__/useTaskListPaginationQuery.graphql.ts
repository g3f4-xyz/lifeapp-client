/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskListPagination$ref = any;
export type useTaskListPaginationQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useTaskListPaginationQueryResponse = {
    readonly app: {
        readonly taskList: {
            readonly " $fragmentRefs": useTaskListPagination$ref;
        };
    };
};
export type useTaskListPaginationQuery = {
    readonly response: useTaskListPaginationQueryResponse;
    readonly variables: useTaskListPaginationQueryVariables;
};



/*
query useTaskListPaginationQuery(
  $count: Int!
  $after: String
) {
  app {
    taskList {
      ...useTaskListPagination
      id
    }
    id
  }
}

fragment useTaskListPagination on TaskListType {
  id
  list(first: $count, after: $after) {
    edges {
      cursor
      node {
        id
        ...useTaskListFragment
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment useTaskListFragment on TaskType {
  id
  taskType
  fields {
    __typename
    ... on SliderFieldType {
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
    ... on SwitchFieldType {
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
    ... on ChoiceFieldType {
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
    ... on TextFieldType {
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
    ... on NestedFieldType {
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
    ... on Node {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "count",
            "type": "Int!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldId",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
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
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v11 = [
        (v5 /*: any*/),
        (v6 /*: any*/),
        (v7 /*: any*/),
        (v8 /*: any*/)
    ], v12 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "enabled",
            "args": null,
            "storageKey": null
        } as any)
    ], v13 = ({
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
    } as any), v15 = [
        (v5 /*: any*/),
        (v13 /*: any*/),
        (v6 /*: any*/),
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
                (v14 /*: any*/),
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any),
        (v8 /*: any*/)
    ], v16 = [
        (v1 /*: any*/)
    ], v17 = [
        (v5 /*: any*/),
        (v13 /*: any*/),
        (v6 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "inputType",
            "args": null,
            "storageKey": null
        } as any),
        (v10 /*: any*/),
        (v9 /*: any*/),
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
        (v8 /*: any*/)
    ], v18 = [
        (v14 /*: any*/)
    ], v19 = [
        (v3 /*: any*/),
        ({
            "kind": "InlineFragment",
            "type": "SwitchValueType",
            "selections": (v12 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "TextValueType",
            "selections": (v18 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "ChoiceValueType",
            "selections": (v16 /*: any*/)
        } as any)
    ], v20 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v19 /*: any*/)
    } as any), v21 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": (v15 /*: any*/)
    } as any), v22 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": (v17 /*: any*/)
    } as any), v23 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": (v11 /*: any*/)
    } as any), v24 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v3 /*: any*/),
            (v21 /*: any*/),
            (v22 /*: any*/),
            (v23 /*: any*/)
        ]
    } as any), v25 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownMeta",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            (v3 /*: any*/),
            (v21 /*: any*/),
            (v22 /*: any*/),
            (v23 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v20 /*: any*/),
                    (v24 /*: any*/),
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
                            (v20 /*: any*/),
                            (v24 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any), v26 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v19 /*: any*/)
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "useTaskListPaginationQuery",
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
                            "name": "taskList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskListType",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "useTaskListPagination",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "useTaskListPaginationQuery",
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
                            "name": "taskList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskListType",
                            "plural": false,
                            "selections": [
                                (v1 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "list",
                                    "storageKey": null,
                                    "args": (v2 /*: any*/),
                                    "concreteType": "TaskTypeConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TaskTypeEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "cursor",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TaskType",
                                                    "plural": false,
                                                    "selections": [
                                                        (v1 /*: any*/),
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
                                                                (v3 /*: any*/),
                                                                (v1 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "SliderFieldType",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "SliderMetaType",
                                                                            "plural": false,
                                                                            "selections": [
                                                                                (v5 /*: any*/),
                                                                                (v6 /*: any*/),
                                                                                (v7 /*: any*/),
                                                                                (v8 /*: any*/),
                                                                                (v9 /*: any*/),
                                                                                (v10 /*: any*/),
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
                                                                        (v4 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "SwitchMetaType",
                                                                            "plural": false,
                                                                            "selections": (v11 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "SwitchValueType",
                                                                            "plural": false,
                                                                            "selections": (v12 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "ChoiceFieldType",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "ChoiceMetaType",
                                                                            "plural": false,
                                                                            "selections": (v15 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "ChoiceValueType",
                                                                            "plural": false,
                                                                            "selections": (v16 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "TextFieldType",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "TextMetaType",
                                                                            "plural": false,
                                                                            "selections": (v17 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "TextValueType",
                                                                            "plural": false,
                                                                            "selections": (v18 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "NestedFieldType",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "NestedMetaType",
                                                                            "plural": false,
                                                                            "selections": [
                                                                                (v5 /*: any*/),
                                                                                (v20 /*: any*/),
                                                                                (v24 /*: any*/),
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
                                                                                        (v20 /*: any*/),
                                                                                        (v25 /*: any*/),
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
                                                                                                (v20 /*: any*/),
                                                                                                (v25 /*: any*/)
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
                                                                                (v26 /*: any*/),
                                                                                {
                                                                                    "kind": "LinkedField",
                                                                                    "alias": null,
                                                                                    "name": "childrenValue",
                                                                                    "storageKey": null,
                                                                                    "args": null,
                                                                                    "concreteType": "NestedValueType",
                                                                                    "plural": false,
                                                                                    "selections": [
                                                                                        (v26 /*: any*/),
                                                                                        {
                                                                                            "kind": "LinkedField",
                                                                                            "alias": null,
                                                                                            "name": "childrenValue",
                                                                                            "storageKey": null,
                                                                                            "args": null,
                                                                                            "concreteType": "NestedValueType",
                                                                                            "plural": false,
                                                                                            "selections": [
                                                                                                (v26 /*: any*/)
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
                                                        (v3 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "pageInfo",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "PageInfo",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "hasNextPage",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "endCursor",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "LinkedHandle",
                                    "alias": null,
                                    "name": "list",
                                    "args": (v2 /*: any*/),
                                    "handle": "connection",
                                    "key": "TaskList_list",
                                    "filters": null
                                }
                            ]
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskListPaginationQuery",
            "id": null,
            "text": "query useTaskListPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    taskList {\n      ...useTaskListPagination\n      id\n    }\n    id\n  }\n}\n\nfragment useTaskListPagination on TaskListType {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...useTaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment useTaskListFragment on TaskType {\n  id\n  taskType\n  fields {\n    __typename\n    ... on SliderFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      value {\n        progress\n      }\n    }\n    ... on SwitchFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      value {\n        enabled\n      }\n    }\n    ... on ChoiceFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      value {\n        id\n      }\n    }\n    ... on TextFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n      value {\n        text\n      }\n    }\n    ... on NestedFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        parentValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        ownMeta {\n          __typename\n          ... on ChoiceMetaType {\n            fieldType\n            helperText\n            label\n            defaultValue\n            options {\n              text\n              value\n            }\n            required\n          }\n          ... on TextMetaType {\n            fieldType\n            helperText\n            label\n            inputType\n            min\n            max\n            maxLength\n            minLength\n            required\n          }\n          ... on SwitchMetaType {\n            fieldType\n            label\n            disabled\n            required\n          }\n        }\n        childrenMeta {\n          fieldType\n          parentValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          ownMeta {\n            __typename\n            ... on ChoiceMetaType {\n              fieldType\n              helperText\n              label\n              defaultValue\n              options {\n                text\n                value\n              }\n              required\n            }\n            ... on TextMetaType {\n              fieldType\n              helperText\n              label\n              inputType\n              min\n              max\n              maxLength\n              minLength\n              required\n            }\n            ... on SwitchMetaType {\n              fieldType\n              label\n              disabled\n              required\n            }\n            ... on NestedMetaType {\n              parentValue {\n                __typename\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n                ... on ChoiceValueType {\n                  id\n                }\n              }\n              ownMeta {\n                __typename\n                ... on ChoiceMetaType {\n                  fieldType\n                  helperText\n                  label\n                  defaultValue\n                  options {\n                    text\n                    value\n                  }\n                  required\n                }\n                ... on TextMetaType {\n                  fieldType\n                  helperText\n                  label\n                  inputType\n                  min\n                  max\n                  maxLength\n                  minLength\n                  required\n                }\n                ... on SwitchMetaType {\n                  fieldType\n                  label\n                  disabled\n                  required\n                }\n              }\n              childrenMeta {\n                fieldType\n                parentValue {\n                  __typename\n                  ... on SwitchValueType {\n                    enabled\n                  }\n                  ... on TextValueType {\n                    text\n                  }\n                  ... on ChoiceValueType {\n                    id\n                  }\n                }\n                ownMeta {\n                  __typename\n                  ... on ChoiceMetaType {\n                    fieldType\n                    helperText\n                    label\n                    defaultValue\n                    options {\n                      text\n                      value\n                    }\n                    required\n                  }\n                  ... on TextMetaType {\n                    fieldType\n                    helperText\n                    label\n                    inputType\n                    min\n                    max\n                    maxLength\n                    minLength\n                    required\n                  }\n                  ... on SwitchMetaType {\n                    fieldType\n                    label\n                    disabled\n                    required\n                  }\n                }\n              }\n            }\n          }\n          childrenMeta {\n            fieldType\n            parentValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n            ownMeta {\n              __typename\n              ... on ChoiceMetaType {\n                fieldType\n                helperText\n                label\n                defaultValue\n                options {\n                  text\n                  value\n                }\n                required\n              }\n              ... on TextMetaType {\n                fieldType\n                helperText\n                label\n                inputType\n                min\n                max\n                maxLength\n                minLength\n                required\n              }\n              ... on SwitchMetaType {\n                fieldType\n                label\n                disabled\n                required\n              }\n              ... on NestedMetaType {\n                parentValue {\n                  __typename\n                  ... on SwitchValueType {\n                    enabled\n                  }\n                  ... on TextValueType {\n                    text\n                  }\n                  ... on ChoiceValueType {\n                    id\n                  }\n                }\n                ownMeta {\n                  __typename\n                  ... on ChoiceMetaType {\n                    fieldType\n                    helperText\n                    label\n                    defaultValue\n                    options {\n                      text\n                      value\n                    }\n                    required\n                  }\n                  ... on TextMetaType {\n                    fieldType\n                    helperText\n                    label\n                    inputType\n                    min\n                    max\n                    maxLength\n                    minLength\n                    required\n                  }\n                  ... on SwitchMetaType {\n                    fieldType\n                    label\n                    disabled\n                    required\n                  }\n                }\n                childrenMeta {\n                  fieldType\n                  parentValue {\n                    __typename\n                    ... on SwitchValueType {\n                      enabled\n                    }\n                    ... on TextValueType {\n                      text\n                    }\n                    ... on ChoiceValueType {\n                      id\n                    }\n                  }\n                  ownMeta {\n                    __typename\n                    ... on ChoiceMetaType {\n                      fieldType\n                      helperText\n                      label\n                      defaultValue\n                      options {\n                        text\n                        value\n                      }\n                      required\n                    }\n                    ... on TextMetaType {\n                      fieldType\n                      helperText\n                      label\n                      inputType\n                      min\n                      max\n                      maxLength\n                      minLength\n                      required\n                    }\n                    ... on SwitchMetaType {\n                      fieldType\n                      label\n                      disabled\n                      required\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      value {\n        ownValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        childrenValue {\n          ownValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          childrenValue {\n            ownValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a6f8ee2c6d89f76eeaf010d5e6cb1be5';
export default node;
