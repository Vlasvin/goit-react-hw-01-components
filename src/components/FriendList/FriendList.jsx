import React, { Component } from 'react';
import { FriendsList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(i => (
        <FriendListItem
          key={i.id}
          isOnline={i.isOnline}
          avatar={i.avatar}
          className={i.name}
        />
      ))}
    </FriendsList>
  );
};
