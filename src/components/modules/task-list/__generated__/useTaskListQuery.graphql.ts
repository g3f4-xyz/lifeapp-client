/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO" | "%future added value";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskListQueryVariables = {
    count: number;
    after?: string | null;
};
export type useTaskListQueryResponse = {
    readonly tasks: {
        readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
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
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "after"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "count"
    } as any, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "concreteType": "Settings",
        "kind": "LinkedField",
        "name": "settings",
        "plural": false,
        "selections": [
            (v2 /*: any*/),
            {
                "alias": null,
                "args": null,
                "concreteType": "TaskListSettings",
                "kind": "LinkedField",
                "name": "taskList",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "FiltersTaskListSettings",
                        "kind": "LinkedField",
                        "name": "filters",
                        "plural": false,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "taskType",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "status",
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "storageKey": null
    } as any, v4 = [
        {
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any,
        {
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any
    ], v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fieldType",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
        "storageKey": null
    } as any, v9 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "required",
        "storageKey": null
    } as any, v10 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "max",
        "storageKey": null
    } as any, v11 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "min",
        "storageKey": null
    } as any, v12 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "helperText",
        "storageKey": null
    } as any, v13 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tasks",
                    "kind": "LinkedField",
                    "name": "tasks",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useTaskListPagination"
                        }
                    ],
                    "storageKey": null
                },
                (v3 /*: any*/)
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "useTaskListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tasks",
                    "kind": "LinkedField",
                    "name": "tasks",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": (v4 /*: any*/),
                            "concreteType": "TaskConnection_list",
                            "kind": "LinkedField",
                            "name": "list",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "TaskConnection_listEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "cursor",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Task",
                                            "kind": "LinkedField",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                                (v2 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "typeId",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "Field",
                                                    "kind": "LinkedField",
                                                    "name": "fields",
                                                    "plural": true,
                                                    "selections": [
                                                        (v2 /*: any*/),
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "kind": "ScalarField",
                                                            "name": "fieldId",
                                                            "storageKey": null
                                                        },
                                                        {
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "kind": "LinkedField",
                                                            "name": "meta",
                                                            "plural": false,
                                                            "selections": [
                                                                (v5 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
                                                                        (v7 /*: any*/),
                                                                        (v8 /*: any*/),
                                                                        (v9 /*: any*/),
                                                                        (v10 /*: any*/),
                                                                        (v11 /*: any*/),
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
                                                                        (v6 /*: any*/),
                                                                        (v7 /*: any*/),
                                                                        (v8 /*: any*/),
                                                                        (v9 /*: any*/)
                                                                    ],
                                                                    "type": "SwitchFieldMeta",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
                                                                        (v12 /*: any*/),
                                                                        (v7 /*: any*/),
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
                                                                                (v13 /*: any*/),
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
                                                                        (v9 /*: any*/)
                                                                    ],
                                                                    "type": "ChoiceFieldMeta",
                                                                    "abstractKey": null
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "selections": [
                                                                        (v6 /*: any*/),
                                                                        (v12 /*: any*/),
                                                                        (v7 /*: any*/),
                                                                        {
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "kind": "ScalarField",
                                                                            "name": "inputType",
                                                                            "storageKey": null
                                                                        },
                                                                        (v11 /*: any*/),
                                                                        (v10 /*: any*/),
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
                                                                        (v9 /*: any*/)
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
                                                                (v5 /*: any*/),
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
                                                                        (v13 /*: any*/)
                                                                    ],
                                                                    "type": "TextFieldValue",
                                                                    "abstractKey": null
                                                                }
                                                            ],
                                                            "storageKey": null
                                                        }
                                                    ],
                                                    "storageKey": null
                                                },
                                                (v5 /*: any*/)
                                            ],
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "PageInfo",
                                    "kind": "LinkedField",
                                    "name": "pageInfo",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "hasNextPage",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "endCursor",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": (v4 /*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "TaskConnection_list",
                            "kind": "LinkedHandle",
                            "name": "list"
                        }
                    ],
                    "storageKey": null
                },
                (v3 /*: any*/)
            ]
        },
        "params": {
            "cacheID": "ae7270ec2ea410e6fd47bae91d85411f",
            "id": null,
            "metadata": {},
            "name": "useTaskListQuery",
            "operationKind": "query",
            "text": "query useTaskListQuery(\n  $count: Int!\n  $after: String\n) {\n  tasks {\n    ...useTaskListPagination\n    id\n  }\n  settings {\n    id\n    taskList {\n      filters {\n        title\n        taskType\n        status\n      }\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination on Tasks {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        ...useTaskListFragment\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '249f7e12e092b669b1f6abf08f7cde6a';
export default node;
