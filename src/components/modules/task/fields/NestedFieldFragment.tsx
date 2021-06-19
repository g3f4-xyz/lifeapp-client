import graphql from 'babel-plugin-relay/macro';
// import immutabilityHelper from 'immutability-helper';
import React, { FC, Fragment } from 'react';
import { createFragmentContainer } from 'react-relay';
// import { FIELD_TYPE } from '../../../../constans';
// import {
//   FieldValueInput,
// } from "../../../../mutations/__generated__/updateTaskFieldMutation.graphql";
// import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
// import Choice from '../../../display/field/Choice';
// import Switch from '../../../display/field/Switch';
// import Text from '../../../display/field/Text';
import {
  FieldId,
  // eslint-disable-next-line @typescript-eslint/camelcase
  // NestedFieldFragment_data,
} from './__generated__/NestedFieldFragment_data.graphql';

// interface OwnFieldProps {
//   // eslint-disable-next-line @typescript-eslint/camelcase
//   ownMeta: NestedFieldFragment_data['meta']['ownMeta'];
//   // eslint-disable-next-line @typescript-eslint/camelcase
//   ownValue: NestedFieldFragment_data['value']['ownValue'];
//
//   onOwnValueChange(
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     updatedValue: NestedFieldFragment_data['value']['ownValue'],
//   ): void;
// }

// const OwnField: FC<OwnFieldProps> = props => {
//   const { ownMeta, ownValue, onOwnValueChange } = props;
//
//   if (ownMeta && ownValue) {
//     if (ownMeta.fieldType === FIELD_TYPE.CHOICE) {
//       const { label, helperText, options } = ownMeta;
//       const { id } = ownValue;
//
//       return (
//         <Choice
//           label={label}
//           value={id || ''}
//           helperText={helperText}
//           options={options}
//           onChange={(value: string) => {
//             onOwnValueChange({ id: value });
//           }}
//         />
//       );
//     }
//     if (ownMeta.fieldType === FIELD_TYPE.SWITCH) {
//       const { disabled, label, required } = ownMeta;
//       const { enabled } = ownValue;
//
//       return (
//         <Switch
//           checked={enabled}
//           disabled={disabled}
//           label={label}
//           required={required}
//           onChange={(value: boolean) => {
//             onOwnValueChange({ enabled: value });
//           }}
//         />
//       );
//     }
//     if (ownMeta.fieldType === FIELD_TYPE.TEXT) {
//       const { label, required } = ownMeta;
//       const { text } = ownValue;
//
//       return (
//         <Text
//           value={text || ''}
//           label={label}
//           required={required}
//           onChange={(value: string) => {
//             onOwnValueChange({ text: value });
//           }}
//         />
//       );
//     }
//   }
//
//   return null;
// };

// interface NestedFieldProps {
//   meta?: {
//     fieldType?: string;
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     parentValue?: NestedFieldFragment_data['value']['ownValue'];
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     ownMeta: NestedFieldFragment_data['meta']['ownMeta'];
//     childrenMeta: Array<NestedFieldProps['meta']>;
//   };
//   value?: {
//     // eslint-disable-next-line @typescript-eslint/camelcase
//     ownValue?: NestedFieldFragment_data['value']['ownValue'];
//     childrenValue?: NestedFieldProps['value'];
//   };
//
//   onChange(value: NestedFieldProps['value']): void;
// }

// const NestedField: FC<NestedFieldProps> = props => {
//   const { meta, value, onChange } = props;
//
//   if (meta && meta.ownMeta && value) {
//     const activeChildrenMeta =
//       value.ownValue &&
//       meta.childrenMeta &&
//       meta.childrenMeta.find(childrenMeta => {
//         if (
//           !meta ||
//           !meta.ownMeta ||
//           !childrenMeta ||
//           !childrenMeta.parentValue ||
//           !value ||
//           !value.ownValue
//         ) {
//           return false;
//         }
//
//         if (meta.ownMeta.fieldType === FIELD_TYPE.CHOICE) {
//           return childrenMeta.parentValue.id === value.ownValue.id;
//         } else if (meta.ownMeta.fieldType === FIELD_TYPE.TEXT) {
//           return childrenMeta.parentValue.text === value.ownValue.text;
//         } else if (meta.ownMeta.fieldType === FIELD_TYPE.SWITCH) {
//           return childrenMeta.parentValue.enabled === value.ownValue.enabled;
//         }
//
//         return false;
//       });
//     const updateOwnValue = (
//       // eslint-disable-next-line @typescript-eslint/camelcase
//       ownValue: NestedFieldFragment_data['value']['ownValue'],
//     ) => {
//       const updatedValue = immutabilityHelper(value, {
//         ownValue: {
//           $set: ownValue,
//         },
//       });
//
//       onChange(updatedValue);
//     };
//     const updateChildrenValue = (childrenValue: NestedFieldProps['value']) => {
//       const updatedValue = immutabilityHelper(value, {
//         childrenValue: {
//           $set: childrenValue,
//         },
//       });
//
//       onChange(updatedValue);
//     };
//
//     return (
//       <Fragment>
//         <OwnField
//           ownMeta={meta.ownMeta}
//           ownValue={value.ownValue || {}}
//           onOwnValueChange={updateOwnValue}
//         />
//         {activeChildrenMeta && (
//           <NestedField
//             value={value.childrenValue || {}}
//             meta={activeChildrenMeta}
//             onChange={updateChildrenValue}
//           />
//         )}
//       </Fragment>
//     );
//   }
//
//   return null;
// };

export interface NestedFieldContainerProps {
  data: {
    id: string;
    fieldId: FieldId;
    // meta: NestedFieldProps['meta'];
    // value: NestedFieldProps['value'];
  };
  taskId: string;
}

const NestedFieldContainer: FC<NestedFieldContainerProps> = _props => {
  return <Fragment></Fragment>;
  // const { data } = props;
  // const { meta, value } = data;
  //
  // const handleChange = async (updatedFieldValue: NestedFieldProps['value']): Promise<void> => {
  //   const {
  //     taskId,
  //     data: { fieldId, id },
  //   } = props;
  //
  //   await updateTaskFieldMutation(
  //     { fieldId, value: updatedFieldValue as FieldValueInput, taskId },
  //     { id },
  //   );
  // };
  //
  // return <NestedField value={value} meta={meta} onChange={handleChange} />;
};

graphql`
  fragment NestedFieldFragmentMeta on NestedFieldMeta {
    ownMeta {
      ...NestedFieldFragment
    }
    childrenMeta {
      ...NestedFieldFragment
    }
  }
`;

graphql`
  fragment NestedFieldFragmentValue on NestedFieldValue {
    ownValue {
      __typename
    }
  }
`;

graphql`
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
`

graphql`
  fragment NestedFieldFragment on FieldMeta {
    ...NestedFieldFragmentSimpleMetasFragment
    ... on NestedFieldMeta {
      ownMeta {
        ...NestedFieldFragmentSimpleMetasFragment
        ...NestedFieldFragmentEnd
      }
      childrenMeta {
        ...NestedFieldFragmentSimpleMetasFragment
        ...NestedFieldFragmentEnd
      }
    }
  }
`

graphql`
  fragment NestedFieldFragmentEnd on NestedFieldMeta {
    ownMeta {
      ...NestedFieldFragmentSimpleMetasFragment
    }
    childrenMeta {
      ...NestedFieldFragmentSimpleMetasFragment
    }
  }
`

export default createFragmentContainer<NestedFieldContainerProps>(NestedFieldContainer, {
  data: graphql`
    fragment NestedFieldFragment_data on Field {
      id
      fieldId
      meta {
        ...NestedFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...NestedFieldFragmentValue @relay(mask: false)
      }
    }
  `,
});
