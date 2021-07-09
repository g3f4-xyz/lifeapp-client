// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useNestedFieldFragment,
  useNestedFieldFragment$ref,
} from './__generated__/useNestedFieldFragment.graphql';

// graphql`
//   fragment useNestedFieldFragmentMeta on NestedFieldMeta {
//     ownMeta {
//       ...useNestedFieldMetaFragment
//     }
//     childrenMeta {
//       ...useNestedFieldMetaFragment
//     }
//   }
// `;
//
// graphql`
//   fragment useNestedFieldFragmentValue on NestedFieldValue {
//     ownValue {
//       __typename
//     }
//   }
// `;
//
// graphql`
//   fragment useNestedFieldFragmentSimpleMetasFragment on FieldMeta {
//     ... on TextFieldMeta {
//       label
//       fieldType
//       disabled
//       required
//       helperText
//       minLength
//       maxLength
//       defaultValue
//       inputType
//     }
//     ... on ChoiceFieldMeta {
//       label
//       fieldType
//       disabled
//       required
//       helperText
//       defaultOption
//       options {
//         text
//         value
//       }
//       defaultValue
//     }
//     ... on SwitchFieldMeta {
//       label
//       fieldType
//       disabled
//       required
//       helperText
//     }
//     ... on SliderFieldMeta {
//       label
//       fieldType
//       disabled
//       required
//       helperText
//       min
//       max
//       step
//     }
//   }
// `;
//
// graphql`
//   fragment useNestedFieldFragmentInners on FieldMeta {
//     ...useNestedFieldFragmentSimpleMetasFragment
//     ... on NestedFieldMeta {
//       ownMeta {
//         ...useNestedFieldFragmentSimpleMetasFragment
//         ...useNestedFieldFragmentEnd
//       }
//       childrenMeta {
//         ...useNestedFieldFragmentSimpleMetasFragment
//         ...useNestedFieldFragmentEnd
//       }
//     }
//   }
// `;
//
// graphql`
//   fragment useNestedFieldFragmentEnd on NestedFieldMeta {
//     ownMeta {
//       ...useNestedFieldFragmentSimpleMetasFragment
//     }
//     childrenMeta {
//       ...useNestedFieldFragmentSimpleMetasFragment
//     }
//   }
// `;

const query = graphql`
  fragment useNestedFieldFragment on Field {
    id
    fieldId
    # meta {
    #   ...useNestedFieldFragmentMeta @relay(mask: false)
    # }
    # value {
    #   ...useNestedFieldFragmentValue @relay(mask: false)
    # }
  }
`;

export default (data: useNestedFieldFragment$ref): Omit<useNestedFieldFragment, ' $refType'> =>
  useFragment(query, data);
