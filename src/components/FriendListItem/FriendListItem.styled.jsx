// import React from 'react';
import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  display: flex;
  gap: 60px;
  width: 360px;
  align-items: center;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 10px;
  background-color: #eceaea;
`;
export const Status = styled.span`
  display: block;
  margin-left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${props => {
    return props.$isOnline ? '#42f042' : '#ec0942';
  }};
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;
export const Name = styled.p`
  margin: 20px 0;
`;
