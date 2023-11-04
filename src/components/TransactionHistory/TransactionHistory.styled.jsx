import styled from 'styled-components';

export const TransactionsHistory = styled.table`
  width: 1000px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-collapse: collapse;
  margin: 20px 0;
  margin: 0;
`;
export const TableHead = styled.thead``;
export const HeadTitleBox = styled.tr``;
export const HeadTitle = styled.th`
  background-color: #8e989e;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.04em;
`;
export const TableDataBox = styled.tbody``;
export const TableData = styled.tr``;
export const Data = styled.td`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #eceaea;
  &::first-letter {
    text-transform: uppercase;
  }
`;
