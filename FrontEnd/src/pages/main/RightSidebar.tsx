import styled from 'styled-components';
import { Spacer } from '../../components/atoms/basic/Spacer';
import RightSidebarLogo from '../../components/atoms/image/RightSidebarLogo';
import MyProfileSimpleCard from '../../components/molecules/card/myPage/MyProfileSimpleCard';
import MyFriendListCard from '../../components/molecules/card/basic/MyFriendListCard';
import { useEffect, useState } from 'react';
import { Header3 } from '../../components/atoms/basic/Typography';
import { colors } from '../../config/Color';
import FindFriendModal from '../../components/molecules/modal/FindFriendModal';
import PersonalPageModal from '../../components/molecules/modal/PersonalPageModal';
import MusicBot from '../../components/organisms/myPage/main/MusicBot';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1vmax;
  box-sizing: border-box;
`;

const StyledFriendContainer = styled.div`
  text-align: center;
`;

const StyledFriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const RightSidebar = () => {
  const [activeFriend, setActiveFriend] = useState<number | null>(null);
  const [data, setData] = useState([
    { src: 'https://picsum.photos/300', member_id: 1, name: 'FriendName1', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 2, name: 'FriendName2', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 3, name: 'FriendName3', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 4, name: 'FriendName4', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 5, name: 'FriendName5', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 6, name: 'FriendName6', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 7, name: 'FriendName7', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 8, name: 'FriendName8', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 9, name: 'FriendName9', state: 'started', time: '20 min ago' },
    { src: 'https://picsum.photos/300', member_id: 10, name: 'FriendName10', state: 'started', time: '20 min ago' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isPersonalModalOpen, setPersonalModalOpen] = useState(false);
  const openPersonalModal = () => setPersonalModalOpen(true);
  const closePersonalModal = () => setPersonalModalOpen(false);

  useEffect(() => {
    console.log(activeFriend);
  }, [activeFriend]);

  return (
    <StyledContainer>
      <RightSidebarLogo />
      <Spacer space={'2vh'} />

      <MyProfileSimpleCard />
      <Spacer space={'4vh'} />

      <StyledFriendContainer>
        <Header3 children={'Music Bot'} color={colors.White} fontWeight={'bold'} />
      </StyledFriendContainer>
      <Spacer space={'0.5vh'} />

      <StyledFriendListContainer>
        <MusicBot/>
      </StyledFriendListContainer>
    </StyledContainer>
  );
};

export default RightSidebar;
