import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 370px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #eceaea;
  border-radius: 10px 10px 0 0;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #c6cfd5;
  padding-top: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
`;
export const Tag = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  margin: 0;
`;
export const Location = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.04em;
`;
export const StatsList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  background-color: #c6cfd5;
`;
export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #8e989e;
  padding: 20px 31.5px;
  &:nth-child(2) {
    border-left: 1px solid #8e989e;
    border-right: 1px solid #8e989e;
  }
`;
export const Label = styled.span`
  margin: 0px 5px;
  color: rgb(43, 49, 98);
  font-size: 16px;
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
