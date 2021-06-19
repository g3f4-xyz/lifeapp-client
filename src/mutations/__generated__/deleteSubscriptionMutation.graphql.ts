/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteSubscriptionInput = {
    readonly clientMutationId?: string | null;
    readonly subscriptionId: string;
};
export type deleteSubscriptionMutationVariables = {
    readonly input: DeleteSubscriptionInput;
};
export type deleteSubscriptionMutationResponse = {
    readonly deleteSubscription: {
        readonly clientMutationId: string | null;
        readonly subscriptionId: string;
    };
};
export type deleteSubscriptionMutation = {
    readonly response: deleteSubscriptionMutationResponse;
    readonly variables: deleteSubscriptionMutationVariables;
};



/*
mutation deleteSubscriptionMutation(
  $input: DeleteSubscriptionInput!
) {
  deleteSubscription(input: $input) {
    clientMutationId
    subscriptionId
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "DeleteSubscriptionInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "deleteSubscription",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "DeleteSubscriptionOutput",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "clientMutationId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "subscriptionId",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "deleteSubscriptionMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "deleteSubscriptionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "deleteSubscriptionMutation",
            "id": null,
            "text": "mutation deleteSubscriptionMutation(\n  $input: DeleteSubscriptionInput!\n) {\n  deleteSubscription(input: $input) {\n    clientMutationId\n    subscriptionId\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '49991ffe859e0fa2e66e70f85eece767';
export default node;
