import React from 'react';
import { Group, useAdaptivity, ViewWidth } from '@vkontakte/vkui';
import { AboutUsMember } from '@limbus-mini-apps';

import { AboutUsMembersItem } from './AboutUsMembersItem';

type AboutUsMembersProps = {
  items: AboutUsMember[];
  onMemberClick: (member: AboutUsMember) => void;
};

export const AboutUsMembers: React.FC<AboutUsMembersProps> = ({ items, onMemberClick }) => {
  const adaptivity = useAdaptivity();

  return (
    <Group style={{ padding: adaptivity.viewWidth === ViewWidth.MOBILE ? '0' : '0 1rem' }}>
      {items.map((el) => (
        <AboutUsMembersItem key={el.name} item={el} onClick={() => onMemberClick(el)} />
      ))}
    </Group>
  );
};
