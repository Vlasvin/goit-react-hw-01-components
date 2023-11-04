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
