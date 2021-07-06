import React from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import SettingsFragment from './fragment/SettingsFragment';
import useSettingsQuery from './useSettingsQuery';

export default function SettingsQuery() {
  const { props, error } = useSettingsQuery({
    count: ITEMS_PER_PAGE * 10,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props) {
    return <SettingsFragment data={props.settings} />;
  }

  return <Loader />;
}
