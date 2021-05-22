declare module '@limbus-mini-apps' {
  export type AboutUsMember = {
    name: string;
    position: string;
    imageUri: string;
    socials: AboutUsMemberSocials;
  }

  export type AboutUsMemberSocials = {
    vk: string;
    github?: string;
    instagram?: string;
  }

  export type Modal = string | null;
}
