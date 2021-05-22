import React from 'react';
import { AboutUsMember } from '@limbus-mini-apps';

import { AboutUsMembers } from './AboutUsMembers';

type AboutUsProps = {
  onMemberClick: (member: AboutUsMember) => void;
};

export const AboutUs: React.FC<AboutUsProps> = ({ onMemberClick }) => {
  return <AboutUsMembers items={MEMBERS} onMemberClick={onMemberClick} />;
};

const MEMBERS: AboutUsMember[] = [
  {
    name: 'Юрий Пысин',
    position: 'Капитан команды, Backend-разработчик',
    imageUri:
      'https://sun1-86.userapi.com/s/v1/ig2/Mm1lhxzZKVnHdC5XjvhYt1tideZ4NeBGc_eFGgju1JYw_rChUK_guSZIZ7mnGyweTCDFtW-TGDGeiPa-hvYU8IiZ.jpg?size=50x0&quality=96&crop=67,245,1141,1141&ava=1',
    socials: {
      vk: 'meromen',
      github: 'Meromen',
    },
  },
  {
    name: 'Максим Чербаджи',
    position: 'Backend-разработчик',
    imageUri:
      'https://sun1-47.userapi.com/s/v1/ig2/M_r-GpI38nGFPZOL-RAeT-p1FD8At-tHGv3Fp6oivWvCqw-MSszNrwDSkKeUZW2CmhOb_qWAHq8Y2cPf8C3xwFea.jpg?size=50x0&quality=96&crop=316,50,328,328&ava=1',
    socials: {
      vk: 'code7unner',
      github: 'Code7unner',
    },
  },
  {
    name: 'Артем Балтынков',
    position: 'Frontend-разработчик',
    imageUri:
      'https://sun1-24.userapi.com/s/v1/ig2/DsQukkp23rjs_rw73dMYmk2wZLNjqsenqaXALhEhb5gNOBhED11e4JeCjgVhPtYJSw6xRtNkaS8xuJkHJpKHu5kX.jpg?size=50x0&quality=96&crop=150,156,240,240&ava=1',
    socials: {
      vk: 'iwannastayawakeallday',
      github: 'on3dd',
    },
  },
  {
    name: 'Эвита Воронкова',
    position: 'Дизайнер',
    imageUri:
      'https://sun1-93.userapi.com/s/v1/ig2/6OpWUwXgEY3336xpHIKuIrKY2xS67eMvoCUMoe34RkZ8_hO9l2Hqfw-H-rSBOJKZK1oG_RG1X0vv_-gp9OgxUavk.jpg?size=50x0&quality=96&crop=0,0,1440,1440&ava=1',
    socials: {
      vk: 'evitavoronkova',
      instagram: 'voronkova.ea',
    },
  },
];
