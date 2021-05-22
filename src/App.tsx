import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import '@vkontakte/vkui/dist/vkui.css';
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitLayout,
  Panel,
  Group,
  Header,
  PanelHeader,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  Gradient,
  Avatar,
  Title,
  Headline,
  Platform,
  usePlatform,
  SimpleCell,
  Link,
  withAdaptivity,
} from '@vkontakte/vkui';
import { Icon24Cancel } from '@vkontakte/icons';
import { AboutUsMember, AboutUsMemberSocials } from '@limbus-mini-apps';

import { PanelWrapper } from './utils/wrappers';
import { GlobalStyles } from './utils/globalStyles';
import { ModalTypes } from './utils/constants';
import { getSocialIcon, getSocialLink } from './utils/functions';
import { AboutUs } from './components/AboutUs';

const Container = styled.main`
  width: 100%;
`;

const App: React.FC = () => {
  const platform = usePlatform();

  const [activeModal, setActiveModal] = useState<ModalTypes | null>(null);
  const [activeMember, setActiveMember] = useState<AboutUsMember | null>(null);

  const modalClose = useCallback(() => {
    return setActiveModal(() => null);
  }, [setActiveModal]);

  const header = useCallback(
    (title: string = '') => (
      <ModalPageHeader
        left={
          platform === Platform.ANDROID && (
            <PanelHeaderButton onClick={modalClose}>
              <Icon24Cancel />
            </PanelHeaderButton>
          )
        }
      >
        {`@${title}`}
      </ModalPageHeader>
    ),
    [platform, modalClose],
  );

  const modal = useMemo(
    () => (
      <ModalRoot activeModal={activeModal} onClose={modalClose}>
        <ModalPage id={ModalTypes.MEMBER_PROFILE} header={header(activeMember?.socials.vk)}>
          {activeMember && (
            <>
              <Gradient
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 32,
                }}
              >
                <Avatar size={96} src={activeMember.imageUri} />

                <Title level="2" weight="medium" style={{ marginBottom: 8, marginTop: 20 }}>
                  {activeMember.name}
                </Title>

                <Headline weight="regular" style={{ maxWidth: '200px' }}>
                  {activeMember.position}
                </Headline>
              </Gradient>

              <Group header={<Header mode="secondary">Контакты</Header>} style={{ paddingBottom: 20 }}>
                {Object.entries(activeMember.socials).map(([key, value]) => (
                  <Link
                    key={key}
                    href={getSocialLink([key as keyof AboutUsMemberSocials, value as string])}
                    target="_blank"
                  >
                    <SimpleCell key={key} before={getSocialIcon(key as keyof AboutUsMemberSocials)}>
                      {value}
                    </SimpleCell>
                  </Link>
                ))}
              </Group>
            </>
          )}
        </ModalPage>
      </ModalRoot>
    ),
    [activeModal, activeMember, header, modalClose],
  );

  const onMemberClick = useCallback(
    (member: AboutUsMember) => {
      setActiveMember(() => member);
      setActiveModal(() => ModalTypes.MEMBER_PROFILE);
    },
    [setActiveModal],
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <Container>
              <GlobalStyles />
              <PanelWrapper id="home" modal={modal}>
                <Panel id="id">
                  <PanelHeader>Limbus</PanelHeader>
                  <AboutUs onMemberClick={onMemberClick} />
                </Panel>
              </PanelWrapper>
            </Container>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default withAdaptivity(App, { viewWidth: true });
