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
                                                                        (v1 /*: any*/)
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
            "text": "query useTaskListPaginationQuery(\n  $count: Int!\n  $after: String\n) {\n  tasks {\n    ...useTaskListPagination\n    id\n  }\n}\n\nfragment useTaskListPagination on Tasks {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...useTaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '64b5b0b9167691dd06bd6155576001f4';
export default node;
