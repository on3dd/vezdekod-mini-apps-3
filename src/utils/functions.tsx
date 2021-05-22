import { Icon24LogoVk, Icon24LogoInstagram, Icon24GlobeOutline } from '@vkontakte/icons';
import { AboutUsMemberSocials } from '@limbus-mini-apps';

export const getSocialIcon = (name: keyof AboutUsMemberSocials) => {
  switch (name) {
    case 'vk':
      return <Icon24LogoVk />;
    case 'instagram':
      return <Icon24LogoInstagram />;
    default:
      return <Icon24GlobeOutline />;
  }
};

export const getSocialLink = ([key, value]: [keyof AboutUsMemberSocials, string]) => {
  switch (key) {
    case 'vk':
      return `https://vk.com/${value}`;
    case 'instagram':
      return `https://instagram.com/${value}`;
    default:
      return `https://github.com/${value}`;
  }
};
