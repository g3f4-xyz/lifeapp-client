/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NestedFieldFragmentEnd$ref = any;
type NestedFieldFragmentSimpleMetasFragment$ref = any;
export type NestedFieldFragment$ref = any;
export type NestedFieldFragment = {
    readonly ownMeta?: {
        readonly " $fragmentRefs": NestedFieldFragmentSimpleMetasFragment$ref & NestedFieldFragmentEnd$ref;
    } | null;
    readonly childrenMeta?: ReadonlyArray<{
        readonly " $fragmentRefs": NestedFieldFragmentSimpleMetasFragment$ref & NestedFieldFragmentEnd$ref;
    }> | null;
    readonly " $fragmentRefs": NestedFieldFragmentSimpleMetasFragment$ref;
    readonly " $refType": NestedFieldFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "FragmentSpread",
        "name": "NestedFieldFragmentSimpleMetasFragment",
        "args": null
    } as any), v1 = [
        (v0 /*: any*/),
        ({
            "kind": "FragmentSpread",
            "name": "NestedFieldFragmentEnd",
            "args": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragment",
        "type": "FieldMeta",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
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
                        "selections": (v1 /*: any*/)
                    },
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenMeta",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": true,
                        "selections": (v1 /*: any*/)
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '2132f4f3e9b11e983e59a9ad53e7b7e5';
export default node;
