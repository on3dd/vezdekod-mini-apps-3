import React from 'react';
import { SimpleCell, Avatar } from '@vkontakte/vkui';
import { AboutUsMember } from '@limbus-mini-apps';

type AboutUsMembersItemProps = {
  item: AboutUsMember;
  onClick: (...args: unknown[]) => void;
};

export const AboutUsMembersItem: React.FC<AboutUsMembersItemProps> = ({ item, onClick }) => {
  return (
    <SimpleCell
      before={<Avatar size={48} src={item.imageUri} />}
      description={item.position}
      style={{ width: '100%', height: 'auto' }}
      onClick={onClick}
    >
      {item.name}
    </SimpleCell>
  );
};
