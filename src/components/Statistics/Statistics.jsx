import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helper/getRandomHexColor';
import {
  StatisticsCard,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => {
          const backgroundColor = getRandomHexColor(item.id);
          return (
            <StatItem key={item.id} style={{ backgroundColor }}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
