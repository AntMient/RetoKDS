import styled from "styled-components";
const Cuts = styled.div`
  width: 0;
  height: 0;
  border-right: 1.9rem solid transparent;
  border-top: 1.9rem solid transparent;
  border-left: 1.9rem solid transparent;
  border-bottom: 1.9rem solid #0b386c;
`;
const CuttedRow = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  margin: 0 0 0 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

function ItemCuts() {
  const cutsNumber = 40;
  return <CuttedRow>{Array(cutsNumber).fill(<Cuts />)}</CuttedRow>;
}

export default ItemCuts;
