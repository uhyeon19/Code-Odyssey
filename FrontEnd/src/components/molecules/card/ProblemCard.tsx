import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../config/Color';
import { Body1, Body2, Header2, Header3 } from '../../atoms/basic/Typography';
import { Spacer } from '../../atoms/basic/Spacer';
import { difficulty } from '../../../utils/json/difficulty';

interface ProblemCardProps {
  data: {
    imagesrc: string;
    difficulty: string;
    source: string;
    proNum: number | string;
    proCate: string;
    title: string;
    isDone: boolean;
  };
}

const ProblemCardDiv = styled.div`
  background-color: ${colors.Gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  min-width: 22%;
  aspect-ratio: 15 / 22;
  /* height: 300px; */
  /* min-height: 200px; */
  border-radius: 20px;
  box-sizing: border-box;
  padding-top: 1vh;
  box-shadow: 2px 2px 4px ${colors.Gray[800]};
  margin-bottom: 20px;
  margin-right: 2vw;

  /* 내부 요소 스타일 수정 */
  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`;

const HeaderDiv = styled.div`
  padding-top: 10px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const TextDiv = styled.div`
  width: 80%;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0px;
  color: ${colors.White};
  display: flex;
  flex-direction: column;
`;

const DiffImgageDiv = styled.img`
  width: 17%;
`;

const ImageStyle = styled.img`
  width: 100%;
  object-fit: contain;
  padding-top: 10px;
  margin: 10px 0 0 10px 0;
  margin-bottom: 10px;
`;

const FooterDiv = styled.div`
  background-color: ${colors.Gray[700]};
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  color: ${colors.White};
  display: flex;
  flex-direction: column;
`;

const DetailButton = styled.button`
  margin-top: 10px;
  color: ${colors.GrayBlue[400]};
  width: 100px;
  height: 60px;
  border-radius: 50px;
  background-color: ${colors.Gray[700]};
  border: 1px solid ${colors.Gray[300]};
  transition: box-shadow 0.3s ease-in-out;
  font-size: 1.2rem;

  &:hover {
    box-shadow: 0 0 0 1px ${colors.Gray[300]};
  }
`;

const SeperateDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const ProblemCard = (props: ProblemCardProps) => {
  return (
    <ProblemCardDiv>
      <HeaderDiv>
        <DiffImgageDiv src={difficulty[props.data.difficulty]} />
        <TextDiv>
          <Header2 children={props.data.source} color={''}></Header2>
          <Spacer space={'5px'}></Spacer>
          <Body1 children={props.data.proNum} color={''}></Body1>
        </TextDiv>
      </HeaderDiv>
      <ImageStyle src={props.data.imagesrc} />
      <FooterDiv>
        <div className='seperate-1'>
          <Header3 children={props.data.title} color={''}></Header3>
          <Spacer space={'5px'}></Spacer>
          <Body1 children={props.data.isDone ? '풀었습니다!' : '도전해보세요!'} color={props.data.isDone ? 'green' : 'Orangered'}></Body1>
        </div>
        <SeperateDiv>
          <DetailButton type='submit' disabled={!props.data.isDone}>
            {props.data.isDone ? '해결됨' : '풀러가기'}
          </DetailButton>
        </SeperateDiv>
      </FooterDiv>

      <div>
        <img src='' alt='' />
      </div>
    </ProblemCardDiv>
  );
};
export default ProblemCard;
