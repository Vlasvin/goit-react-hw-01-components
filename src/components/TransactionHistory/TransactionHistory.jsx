import {
  TransactionsHistory,
  TableHead,
  HeadTitleBox,
  HeadTitle,
  TableDataBox,
  TableData,
  Data,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsHistory>
      <TableHead>
        <HeadTitleBox>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </HeadTitleBox>
      </TableHead>
      {items.map(item => {
        return (
          <TableDataBox key={item.id}>
            <TableData>
              <Data>{item.type}</Data>
              <Data>{item.amount}</Data>
              <Data>{item.currency}</Data>
            </TableData>
          </TableDataBox>
        );
      })}
    </TransactionsHistory>
  );
};
