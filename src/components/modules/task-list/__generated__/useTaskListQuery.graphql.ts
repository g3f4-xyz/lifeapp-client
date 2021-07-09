/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskListPagination$ref = any;
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO" | "%future added value";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useTaskListQueryResponse = {
    readonly tasks: {
        readonly " $fragmentRefs": useTaskListPagination$ref;
    } | null;
    readonly settings: {
        readonly id: string;
        readonly taskList: {
            readonly filters: {
                readonly title: string | null;
                readonly taskType: ReadonlyArray<TaskTypeId>;
                readonly status: TaskStatus | null;
            };
        };
    };
};
export type useTaskListQuery = {
    readonly response: useTaskListQueryResponse;
    readonly variables: useTaskListQueryVariables;
};



/*
query useTaskListQuery(
  $count: Int!
  $after: String
) {
  tasks {
    ...useTaskListPagination
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
    } as any), v2 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "settings",
        "storageKey": null,
        "args": null,
        "concreteType": "Settings",
        "plural": false,
        "selections": [
            (v1 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "taskList",
                "storageKey": null,
                "args": null,
                "concreteType": "TaskListSettings",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "filters",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FiltersTaskListSettings",
                        "plural": false,
                        "selections": [
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "title",
                                "args": null,
                                "storageKey": null
                            },
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "taskType",
                                "args": null,
                                "storageKey": null
                            },
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
    } as any), v3 = [
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
    ], v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
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
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
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
            "name": "useTaskListQuery",
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
                },
                (v2 /*: any*/)
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "useTaskListQuery",
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
                            "args": (v3 /*: any*/),
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
                                                                (v4 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "SliderFieldMeta",
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
                                                                    "kind": "InlineFragment",
                                                                    "type": "SwitchFieldMeta",
                                                                    "selections": [
                                                                        (v5 /*: any*/),
                                                                        (v6 /*: any*/),
                                                                        (v7 /*: any*/),
                                                                        (v8 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "ChoiceFieldMeta",
                                                                    "selections": [
                                                                        (v5 /*: any*/),
                                                                        (v11 /*: any*/),
                                                                        (v6 /*: any*/),
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
                                                                                (v12 /*: any*/),
                                                                                {
                                                                                    "kind": "ScalarField",
                                                                                    "alias": null,
                                                                                    "name": "value",
                                                                                    "args": null,
                                                                                    "storageKey": null
                                                                                }
                                                                            ]
                                                                        },
                                                                        (v8 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "TextFieldMeta",
                                                                    "selections": [
                                                                        (v5 /*: any*/),
                                                                        (v11 /*: any*/),
                                                                        (v6 /*: any*/),
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "inputType",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        },
                                                                        (v10 /*: any*/),
                                                                        (v9 /*: any*/),
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
                                                                        (v8 /*: any*/)
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
                                                                (v4 /*: any*/),
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
                                                                        (v12 /*: any*/)
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                (v4 /*: any*/)
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
                            "args": (v3 /*: any*/),
                            "handle": "connection",
                            "key": "TaskConnection_list",
                            "filters": null
                        }
                    ]
                },
                (v2 /*: any*/)
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskListQuery",
            "id": null,
            "text": "query useTaskListQuery(\n  $count: Int!\n  $after: String\n) {\n  tasks {\n    ...useTaskListPagination\n    id\n  }\n  settings {\n    id\n    taskList {\n      filters {\n        title\n        taskType\n        status\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination on Tasks {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...useTaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '249f7e12e092b669b1f6abf08f7cde6a';
export default node;
