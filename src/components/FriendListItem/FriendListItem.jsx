import React, { Component } from 'react';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ $isOnline, avatar, className }) => {
  return (
    <Item>
      <Status $isOnline={$isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{className}</Name>
    </Item>
  );
};
