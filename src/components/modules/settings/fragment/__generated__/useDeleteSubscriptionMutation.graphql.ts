/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteSubscriptionInput = {
    readonly clientMutationId?: string | null;
    readonly subscriptionId: string;
};
export type useDeleteSubscriptionMutationVariables = {
    readonly input: DeleteSubscriptionInput;
};
export type useDeleteSubscriptionMutationResponse = {
    readonly deleteSubscription: {
        readonly clientMutationId: string | null;
        readonly subscriptionId: string;
    };
};
export type useDeleteSubscriptionMutation = {
    readonly response: useDeleteSubscriptionMutationResponse;
    readonly variables: useDeleteSubscriptionMutationVariables;
};



/*
mutation useDeleteSubscriptionMutation(
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
            "name": "useDeleteSubscriptionMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useDeleteSubscriptionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useDeleteSubscriptionMutation",
            "id": null,
            "text": "mutation useDeleteSubscriptionMutation(\n  $input: DeleteSubscriptionInput!\n) {\n  deleteSubscription(input: $input) {\n    clientMutationId\n    subscriptionId\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3a8286adbefea5bcfc9d932d1c18d761';
export default node;
