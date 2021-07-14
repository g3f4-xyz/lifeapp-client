import React from 'react';
import SettingsLayout from './SettingsLayout';
import useSettingsQuery from './useSettingsQuery';

export default function Settings() {
  const data = useSettingsQuery();

  return <SettingsLayout data={data.settings} />;
}
