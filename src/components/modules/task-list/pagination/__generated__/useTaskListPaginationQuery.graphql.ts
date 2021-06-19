/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskListPagination$ref = any;
export type useTaskListPaginationQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useTaskListPaginationQueryResponse = {
    readonly tasks: {
        readonly " $fragmentRefs": useTaskListPagination$ref;
    } | null;
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
  tasks {
    ...useTaskListPagination
    id
  }
}

fragment useTaskListPagination on Tasks {
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

fragment useTaskListFragment on Task {
  id
  typeId
  fields {
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
      ... on SwitchFieldMeta {
        fieldType
        label
        disabled
        required
      }
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
      ... on NestedFieldMeta {
        ownMeta {
          __typename
          ...NestedFieldFragment
        }
        childrenMeta {
          __typename
          ...NestedFieldFragment
        }
      }
    }
    value {
      __typename
      ... on SliderFieldValue {
        progress
      }
      ... on SwitchFieldValue {
        enabled
      }
      ... on ChoiceFieldValue {
        id
      }
      ... on TextFieldValue {
        text
      }
      ... on NestedFieldValue {
        ownValue {
          __typename
        }
      }
    }
  }
}

fragment NestedFieldFragment on FieldMeta {
  ...NestedFieldFragmentSimpleMetasFragment
  ... on NestedFieldMeta {
    ownMeta {
      __typename
      ...NestedFieldFragmentSimpleMetasFragment
      ...NestedFieldFragmentEnd
    }
    childrenMeta {
      __typename
      ...NestedFieldFragmentSimpleMetasFragment
      ...NestedFieldFragmentEnd
    }
  }
}

fragment NestedFieldFragmentSimpleMetasFragment on FieldMeta {
  ... on TextFieldMeta {
    label
    fieldType
    disabled
    required
    helperText
    minLength
    maxLength
    defaultValue
    inputType
  }
  ... on ChoiceFieldMeta {
    label
    fieldType
    disabled
    required
    helperText
    defaultOption
    options {
      text
      value
    }
    defaultValue
  }
  ... on SwitchFieldMeta {
    label
    fieldType
    disabled
    required
    helperText
  }
  ... on SliderFieldMeta {
    label
    fieldType
    disabled
    required
    helperText
    min
    max
    step
  }
}

fragment NestedFieldFragmentEnd on NestedFieldMeta {
  ownMeta {
    __typename
    ...NestedFieldFragmentSimpleMetasFragment
  }
  childrenMeta {
    __typename
    ...NestedFieldFragmentSimpleMetasFragment
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
        "name": "step",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "defaultValue",
        "args": null,
        "storageKey": null
    } as any), v13 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any), v14 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "options",
        "storageKey": null,
        "args": null,
        "concreteType": "FieldMetaOptions",
        "plural": true,
        "selections": [
            (v13 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "value",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v15 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "inputType",
        "args": null,
        "storageKey": null
    } as any), v16 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "maxLength",
        "args": null,
        "storageKey": null
    } as any), v17 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "minLength",
        "args": null,
        "storageKey": null
    } as any), v18 = ({
        "kind": "InlineFragment",
        "type": "TextFieldMeta",
        "selections": [
            (v5 /*: any*/),
            (v4 /*: any*/),
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v11 /*: any*/),
            (v17 /*: any*/),
            (v16 /*: any*/),
            (v12 /*: any*/),
            (v15 /*: any*/)
        ]
    } as any), v19 = ({
        "kind": "InlineFragment",
        "type": "ChoiceFieldMeta",
        "selections": [
            (v5 /*: any*/),
            (v4 /*: any*/),
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v11 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "defaultOption",
                "args": null,
                "storageKey": null
            },
            (v14 /*: any*/),
            (v12 /*: any*/)
        ]
    } as any), v20 = ({
        "kind": "InlineFragment",
        "type": "SwitchFieldMeta",
        "selections": [
            (v5 /*: any*/),
            (v4 /*: any*/),
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v11 /*: any*/)
        ]
    } as any), v21 = ({
        "kind": "InlineFragment",
        "type": "SliderFieldMeta",
        "selections": [
            (v5 /*: any*/),
            (v4 /*: any*/),
            (v6 /*: any*/),
            (v7 /*: any*/),
            (v11 /*: any*/),
            (v9 /*: any*/),
            (v8 /*: any*/),
            (v10 /*: any*/)
        ]
    } as any), v22 = [
        (v3 /*: any*/),
        (v18 /*: any*/),
        (v19 /*: any*/),
        (v20 /*: any*/),
        (v21 /*: any*/)
    ], v23 = [
        (v3 /*: any*/),
        (v18 /*: any*/),
        (v19 /*: any*/),
        (v20 /*: any*/),
        (v21 /*: any*/),
        ({
            "kind": "InlineFragment",
            "type": "NestedFieldMeta",
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ownMeta",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": (v22 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "childrenMeta",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": true,
                    "selections": (v22 /*: any*/)
                }
            ]
        } as any)
    ], v24 = [
        (v3 /*: any*/),
        (v18 /*: any*/),
        (v19 /*: any*/),
        (v20 /*: any*/),
        (v21 /*: any*/),
        ({
            "kind": "InlineFragment",
            "type": "NestedFieldMeta",
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ownMeta",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": (v23 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "childrenMeta",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": true,
                    "selections": (v23 /*: any*/)
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "useTaskListPaginationQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "tasks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Tasks",
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
        },
        "operation": {
            "kind": "Operation",
            "name": "useTaskListPaginationQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "tasks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Tasks",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "list",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "TaskConnection_list",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TaskConnection_listEdge",
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
                                            "concreteType": "Task",
                                            "plural": false,
                                            "selections": [
                                                (v1 /*: any*/),
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "typeId",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "fields",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "Field",
                                                    "plural": true,
                                                    "selections": [
                                                        (v1 /*: any*/),
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
                                                                        (v10 /*: any*/)
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
                                                                        (v11 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        (v12 /*: any*/),
                                                                        (v14 /*: any*/),
                                                                        (v7 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "TextFieldMeta",
                                                                    "selections": [
                                                                        (v4 /*: any*/),
                                                                        (v11 /*: any*/),
                                                                        (v5 /*: any*/),
                                                                        (v15 /*: any*/),
                                                                        (v9 /*: any*/),
                                                                        (v8 /*: any*/),
                                                                        (v16 /*: any*/),
                                                                        (v17 /*: any*/),
                                                                        (v7 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "NestedFieldMeta",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "ownMeta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": null,
                                                                            "plural": false,
                                                                            "selections": (v24 /*: any*/)
                                                                        },
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "childrenMeta",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": null,
                                                                            "plural": true,
                                                                            "selections": (v24 /*: any*/)
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
                                                                        (v1 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "TextFieldValue",
                                                                    "selections": [
                                                                        (v13 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "NestedFieldValue",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "ownValue",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": null,
                                                                            "plural": false,
                                                                            "selections": [
                                                                                (v3 /*: any*/)
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
                            "key": "TaskConnection_list",
                            "filters": null
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskListPaginationQuery",
            "id": null,
            "text": "query useTaskListPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  tasks {\n    ...useTaskListPagination\n    id\n  }\n}\n\nfragment useTaskListPagination on Tasks {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...useTaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n      ... on NestedFieldMeta {\n        ownMeta {\n          __typename\n          ...NestedFieldFragment\n        }\n        childrenMeta {\n          __typename\n          ...NestedFieldFragment\n        }\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n      ... on NestedFieldValue {\n        ownValue {\n          __typename\n        }\n      }\n    }\n  }\n}\n\nfragment NestedFieldFragment on FieldMeta {\n  ...NestedFieldFragmentSimpleMetasFragment\n  ... on NestedFieldMeta {\n    ownMeta {\n      __typename\n      ...NestedFieldFragmentSimpleMetasFragment\n      ...NestedFieldFragmentEnd\n    }\n    childrenMeta {\n      __typename\n      ...NestedFieldFragmentSimpleMetasFragment\n      ...NestedFieldFragmentEnd\n    }\n  }\n}\n\nfragment NestedFieldFragmentSimpleMetasFragment on FieldMeta {\n  ... on TextFieldMeta {\n    label\n    fieldType\n    disabled\n    required\n    helperText\n    minLength\n    maxLength\n    defaultValue\n    inputType\n  }\n  ... on ChoiceFieldMeta {\n    label\n    fieldType\n    disabled\n    required\n    helperText\n    defaultOption\n    options {\n      text\n      value\n    }\n    defaultValue\n  }\n  ... on SwitchFieldMeta {\n    label\n    fieldType\n    disabled\n    required\n    helperText\n  }\n  ... on SliderFieldMeta {\n    label\n    fieldType\n    disabled\n    required\n    helperText\n    min\n    max\n    step\n  }\n}\n\nfragment NestedFieldFragmentEnd on NestedFieldMeta {\n  ownMeta {\n    __typename\n    ...NestedFieldFragmentSimpleMetasFragment\n  }\n  childrenMeta {\n    __typename\n    ...NestedFieldFragmentSimpleMetasFragment\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '64b5b0b9167691dd06bd6155576001f4';
export default node;
