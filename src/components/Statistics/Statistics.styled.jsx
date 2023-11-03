import styled from 'styled-components';
import { getRandomHexColor } from 'helper/getRandomHexColor';

export const StatisticsCard = styled.section`
  display: flex;
  flex-direction: column;
  //   gap: 10px;
  align-items: center;
  justify-content: center;
  width: 360px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #eceaea;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.02em;
`;
export const StatList = styled.ul`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
export const StatItem = styled.li`
  list-style: none;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
export const Percentage = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`;
