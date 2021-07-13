/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteSubscriptionInput = {
    clientMutationId?: string | null;
    subscriptionId: string;
};
export type useDeleteSubscriptionMutationVariables = {
    input: DeleteSubscriptionInput;
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
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "DeleteSubscriptionOutput",
            "kind": "LinkedField",
            "name": "deleteSubscription",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clientMutationId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "subscriptionId",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useDeleteSubscriptionMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useDeleteSubscriptionMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "bc61f7f980be06ffd39d2cbcff0334fe",
            "id": null,
            "metadata": {},
            "name": "useDeleteSubscriptionMutation",
            "operationKind": "mutation",
            "text": "mutation useDeleteSubscriptionMutation(\n  $input: DeleteSubscriptionInput!\n) {\n  deleteSubscription(input: $input) {\n    clientMutationId\n    subscriptionId\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '3a8286adbefea5bcfc9d932d1c18d761';
export default node;
