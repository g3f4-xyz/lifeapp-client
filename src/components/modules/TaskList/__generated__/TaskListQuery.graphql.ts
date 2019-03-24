/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type TaskListPagination$ref = any;
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type TaskListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type TaskListQueryResponse = {
    readonly app: {
        readonly taskList: {
            readonly " $fragmentRefs": TaskListPagination$ref;
        };
        readonly settings: {
            readonly id: string;
            readonly taskList: {
                readonly filters: {
                    readonly title: string;
                    readonly taskType: ReadonlyArray<TaskTypeEnum>;
                    readonly status: string | null;
                };
            };
        };
    };
};
export type TaskListQuery = {
    readonly response: TaskListQueryResponse;
    readonly variables: TaskListQueryVariables;
};



/*
query TaskListQuery(
  $count: Int!
  $after: String
) {
  app {
    taskList {
      ...TaskListPagination
      id
    }
    settings {
      id
      taskList {
        filters {
          title
          taskType
          status
        }
      }
    }
    id
  }
}

fragment TaskListPagination on TaskListType {
  id
  list(first: $count, after: $after) {
    edges {
      cursor
      node {
        id
        ...TaskListFragment
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment TaskListFragment on TaskType {
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
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "taskType",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "settings",
        "storageKey": null,
        "args": null,
        "concreteType": "SettingsType",
        "plural": false,
        "selections": [
            (v1 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "taskList",
                "storageKey": null,
                "args": null,
                "concreteType": "TaskListSettingsType",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "filters",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TaskListFiltersSettingsType",
                        "plural": false,
                        "selections": [
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "title",
                                "args": null,
                                "storageKey": null
                            },
                            (v2 /*: any*/),
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "status",
                                "args": null,
                                "storageKey": null
                            }
                        ]
                    }
                ]
            }
        ]
    } as any), v4 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
        } as any)
    ], v5 = ({
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
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v13 = [
        (v7 /*: any*/),
        (v8 /*: any*/),
        (v9 /*: any*/),
        (v10 /*: any*/)
    ], v14 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "enabled",
            "args": null,
            "storageKey": null
        } as any)
    ], v15 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v16 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v17 = [
        (v7 /*: any*/),
        (v15 /*: any*/),
        (v8 /*: any*/),
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
                (v16 /*: any*/),
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any),
        (v10 /*: any*/)
    ], v18 = [
        (v1 /*: any*/)
    ], v19 = [
        (v7 /*: any*/),
        (v15 /*: any*/),
        (v8 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "inputType",
            "args": null,
            "storageKey": null
        } as any),
        (v12 /*: any*/),
        (v11 /*: any*/),
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
        (v10 /*: any*/)
    ], v20 = [
        (v16 /*: any*/)
    ], v21 = [
        (v5 /*: any*/),
        ({
            "kind": "InlineFragment",
            "type": "SwitchValueType",
            "selections": (v14 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "TextValueType",
            "selections": (v20 /*: any*/)
        } as any),
        ({
            "kind": "InlineFragment",
            "type": "ChoiceValueType",
            "selections": (v18 /*: any*/)
        } as any)
    ], v22 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "parentValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": (v21 /*: any*/)
    } as any), v23 = ({
        "kind": "InlineFragment",
        "type": "ChoiceMetaType",
        "selections": (v17 /*: any*/)
    } as any), v24 = ({
        "kind": "InlineFragment",
        "type": "TextMetaType",
        "selections": (v19 /*: any*/)
    } as any), v25 = ({
        "kind": "InlineFragment",
        "type": "SwitchMetaType",
        "selections": (v13 /*: any*/)
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
            (v23 /*: any*/),
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
            (v23 /*: any*/),
            (v24 /*: any*/),
            (v25 /*: any*/),
            {
                "kind": "InlineFragment",
                "type": "NestedMetaType",
                "selections": [
                    (v22 /*: any*/),
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
                            (v22 /*: any*/),
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
        "selections": (v21 /*: any*/)
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TaskListQuery",
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
                                    "name": "TaskListPagination",
                                    "args": null
                                }
                            ]
                        },
                        (v3 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "TaskListQuery",
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
                                    "args": (v4 /*: any*/),
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
                                                                (v1 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "SliderFieldType",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
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
                                                                                (v8 /*: any*/),
                                                                                (v9 /*: any*/),
                                                                                (v10 /*: any*/),
                                                                                (v11 /*: any*/),
                                                                                (v12 /*: any*/),
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
                                                                        (v6 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "SwitchMetaType",
                                                                            "plural": false,
                                                                            "selections": (v13 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "SwitchValueType",
                                                                            "plural": false,
                                                                            "selections": (v14 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "ChoiceFieldType",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "ChoiceMetaType",
                                                                            "plural": false,
                                                                            "selections": (v17 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "ChoiceValueType",
                                                                            "plural": false,
                                                                            "selections": (v18 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "TextFieldType",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "meta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "TextMetaType",
                                                                            "plural": false,
                                                                            "selections": (v19 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "TextValueType",
                                                                            "plural": false,
                                                                            "selections": (v20 /*: any*/)
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "NestedFieldType",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
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
                                                                                (v22 /*: any*/),
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
                                                                                        (v22 /*: any*/),
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
                                                                                                (v22 /*: any*/),
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
                                                                }
                                                            ]
                                                        },
                                                        (v5 /*: any*/)
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
                                    "args": (v4 /*: any*/),
                                    "handle": "connection",
                                    "key": "TaskList_list",
                                    "filters": null
                                }
                            ]
                        },
                        (v3 /*: any*/),
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "TaskListQuery",
            "id": null,
            "text": "query TaskListQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    taskList {\n      ...TaskListPagination\n      id\n    }\n    settings {\n      id\n      taskList {\n        filters {\n          title\n          taskType\n          status\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment TaskListPagination on TaskListType {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...TaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TaskListFragment on TaskType {\n  id\n  taskType\n  fields {\n    __typename\n    ... on SliderFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      value {\n        progress\n      }\n    }\n    ... on SwitchFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      value {\n        enabled\n      }\n    }\n    ... on ChoiceFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      value {\n        id\n      }\n    }\n    ... on TextFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n      value {\n        text\n      }\n    }\n    ... on NestedFieldType {\n      id\n      fieldId\n      meta {\n        fieldType\n        parentValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        ownMeta {\n          __typename\n          ... on ChoiceMetaType {\n            fieldType\n            helperText\n            label\n            defaultValue\n            options {\n              text\n              value\n            }\n            required\n          }\n          ... on TextMetaType {\n            fieldType\n            helperText\n            label\n            inputType\n            min\n            max\n            maxLength\n            minLength\n            required\n          }\n          ... on SwitchMetaType {\n            fieldType\n            label\n            disabled\n            required\n          }\n        }\n        childrenMeta {\n          fieldType\n          parentValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          ownMeta {\n            __typename\n            ... on ChoiceMetaType {\n              fieldType\n              helperText\n              label\n              defaultValue\n              options {\n                text\n                value\n              }\n              required\n            }\n            ... on TextMetaType {\n              fieldType\n              helperText\n              label\n              inputType\n              min\n              max\n              maxLength\n              minLength\n              required\n            }\n            ... on SwitchMetaType {\n              fieldType\n              label\n              disabled\n              required\n            }\n            ... on NestedMetaType {\n              parentValue {\n                __typename\n                ... on SwitchValueType {\n                  enabled\n                }\n                ... on TextValueType {\n                  text\n                }\n                ... on ChoiceValueType {\n                  id\n                }\n              }\n              ownMeta {\n                __typename\n                ... on ChoiceMetaType {\n                  fieldType\n                  helperText\n                  label\n                  defaultValue\n                  options {\n                    text\n                    value\n                  }\n                  required\n                }\n                ... on TextMetaType {\n                  fieldType\n                  helperText\n                  label\n                  inputType\n                  min\n                  max\n                  maxLength\n                  minLength\n                  required\n                }\n                ... on SwitchMetaType {\n                  fieldType\n                  label\n                  disabled\n                  required\n                }\n              }\n              childrenMeta {\n                fieldType\n                parentValue {\n                  __typename\n                  ... on SwitchValueType {\n                    enabled\n                  }\n                  ... on TextValueType {\n                    text\n                  }\n                  ... on ChoiceValueType {\n                    id\n                  }\n                }\n                ownMeta {\n                  __typename\n                  ... on ChoiceMetaType {\n                    fieldType\n                    helperText\n                    label\n                    defaultValue\n                    options {\n                      text\n                      value\n                    }\n                    required\n                  }\n                  ... on TextMetaType {\n                    fieldType\n                    helperText\n                    label\n                    inputType\n                    min\n                    max\n                    maxLength\n                    minLength\n                    required\n                  }\n                  ... on SwitchMetaType {\n                    fieldType\n                    label\n                    disabled\n                    required\n                  }\n                }\n              }\n            }\n          }\n          childrenMeta {\n            fieldType\n            parentValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n            ownMeta {\n              __typename\n              ... on ChoiceMetaType {\n                fieldType\n                helperText\n                label\n                defaultValue\n                options {\n                  text\n                  value\n                }\n                required\n              }\n              ... on TextMetaType {\n                fieldType\n                helperText\n                label\n                inputType\n                min\n                max\n                maxLength\n                minLength\n                required\n              }\n              ... on SwitchMetaType {\n                fieldType\n                label\n                disabled\n                required\n              }\n              ... on NestedMetaType {\n                parentValue {\n                  __typename\n                  ... on SwitchValueType {\n                    enabled\n                  }\n                  ... on TextValueType {\n                    text\n                  }\n                  ... on ChoiceValueType {\n                    id\n                  }\n                }\n                ownMeta {\n                  __typename\n                  ... on ChoiceMetaType {\n                    fieldType\n                    helperText\n                    label\n                    defaultValue\n                    options {\n                      text\n                      value\n                    }\n                    required\n                  }\n                  ... on TextMetaType {\n                    fieldType\n                    helperText\n                    label\n                    inputType\n                    min\n                    max\n                    maxLength\n                    minLength\n                    required\n                  }\n                  ... on SwitchMetaType {\n                    fieldType\n                    label\n                    disabled\n                    required\n                  }\n                }\n                childrenMeta {\n                  fieldType\n                  parentValue {\n                    __typename\n                    ... on SwitchValueType {\n                      enabled\n                    }\n                    ... on TextValueType {\n                      text\n                    }\n                    ... on ChoiceValueType {\n                      id\n                    }\n                  }\n                  ownMeta {\n                    __typename\n                    ... on ChoiceMetaType {\n                      fieldType\n                      helperText\n                      label\n                      defaultValue\n                      options {\n                        text\n                        value\n                      }\n                      required\n                    }\n                    ... on TextMetaType {\n                      fieldType\n                      helperText\n                      label\n                      inputType\n                      min\n                      max\n                      maxLength\n                      minLength\n                      required\n                    }\n                    ... on SwitchMetaType {\n                      fieldType\n                      label\n                      disabled\n                      required\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      value {\n        ownValue {\n          __typename\n          ... on SwitchValueType {\n            enabled\n          }\n          ... on TextValueType {\n            text\n          }\n          ... on ChoiceValueType {\n            id\n          }\n        }\n        childrenValue {\n          ownValue {\n            __typename\n            ... on SwitchValueType {\n              enabled\n            }\n            ... on TextValueType {\n              text\n            }\n            ... on ChoiceValueType {\n              id\n            }\n          }\n          childrenValue {\n            ownValue {\n              __typename\n              ... on SwitchValueType {\n                enabled\n              }\n              ... on TextValueType {\n                text\n              }\n              ... on ChoiceValueType {\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5b068eb156bdf513de8fb6250449b322';
export default node;
