/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatus = "DONE" | "IN_PROGRESS" | "TODO";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type useTaskListQueryVariables = {};
export type useTaskListQueryResponse = {
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
    readonly " $fragmentRefs": FragmentRefs<"useTaskListPagination">;
};
export type useTaskListQuery = {
    readonly response: useTaskListQueryResponse;
    readonly variables: useTaskListQueryVariables;
};



/*
query useTaskListQuery {
  ...useTaskListPagination
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

fragment useTaskListPagination on Query {
  tasks {
    id
    list(first: 10) {
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
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v1 = {
        "alias": null,
        "args": null,
        "concreteType": "Settings",
        "kind": "LinkedField",
        "name": "settings",
        "plural": false,
        "selections": [
            (v0 /*: any*/),
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
    } as any, v2 = [
        {
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any
    ], v3 = {
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
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskListQuery",
            "selections": [
                (v1 /*: any*/),
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useTaskListPagination"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
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
                        (v0 /*: any*/),
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
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
                                                (v0 /*: any*/),
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
                                                        (v0 /*: any*/),
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
                                                                        (v0 /*: any*/)
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
                                                },
                                                (v3 /*: any*/)
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
                            "storageKey": "list(first:10)"
                        },
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "TaskConnection_list",
                            "kind": "LinkedHandle",
                            "name": "list"
                        }
                    ],
                    "storageKey": null
                },
                (v1 /*: any*/)
            ]
        },
        "params": {
            "cacheID": "ba712c0709fc5fa32a1f83a5e97ee2d4",
            "id": null,
            "metadata": {},
            "name": "useTaskListQuery",
            "operationKind": "query",
            "text": "query useTaskListQuery {\n  ...useTaskListPagination\n  settings {\n    id\n    taskList {\n      filters {\n        title\n        taskType\n        status\n      }\n    }\n  }\n}\n\nfragment useTaskListFragment on Task {\n  id\n  typeId\n  fields {\n    id\n    fieldId\n    meta {\n      __typename\n      ... on SliderFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n        max\n        min\n        step\n      }\n      ... on SwitchFieldMeta {\n        fieldType\n        label\n        disabled\n        required\n      }\n      ... on ChoiceFieldMeta {\n        fieldType\n        helperText\n        label\n        defaultValue\n        options {\n          text\n          value\n        }\n        required\n      }\n      ... on TextFieldMeta {\n        fieldType\n        helperText\n        label\n        inputType\n        min\n        max\n        maxLength\n        minLength\n        required\n      }\n    }\n    value {\n      __typename\n      ... on SliderFieldValue {\n        progress\n      }\n      ... on SwitchFieldValue {\n        enabled\n      }\n      ... on ChoiceFieldValue {\n        id\n      }\n      ... on TextFieldValue {\n        text\n      }\n    }\n  }\n}\n\nfragment useTaskListPagination on Query {\n  tasks {\n    id\n    list(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          ...useTaskListFragment\n          __typename\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '593fc42bcd00c32b10ada998970594f7';
export default node;
