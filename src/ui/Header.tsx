import styled from 'styled-components';
import { useState } from 'react';
import Menu from './Menu';
import Nav from './Nav';

const HeaderLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem max-content;
  grid-column: 1;
  grid-row: 1;
`;

export default function Header() {
  const [triggerMenu, setTriggerMenu] = useState<boolean>(false);

  return (
    <HeaderLayout className="sticky top-0">
      <Nav onTriggered={setTriggerMenu} />
      {triggerMenu ? <Menu /> : null}
    </HeaderLayout>
  );
}
