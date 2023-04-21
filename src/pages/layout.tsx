import { useCallback, useEffect, useMemo } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../ui/Header';
import Main from '../ui/Main';

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  min-height: 100vh;
`;

export default function RootLayout() {
  const fontSizes = useMemo(() => [16, 48], []);
  const widthSizes = useMemo(() => [320, 3820], []);

  const calculateSize = useCallback(
    (width: number): number => {
      const y = fontSizes[1] - fontSizes[0];
      const x = widthSizes[1] - widthSizes[0];
      const slope = y / x;
      const intercept = fontSizes[1] - slope * widthSizes[1];
      return slope * width + intercept;
    },
    [fontSizes, widthSizes],
  );

  const changeFontSize = useCallback(() => {
    const width = window.innerWidth;
    window.document.documentElement.style.setProperty(
      '--size',
      `${calculateSize(width)}px`,
    );
  }, [calculateSize]);

  useEffect(() => {
    window.addEventListener('resize', changeFontSize);
    return () => {
      window.removeEventListener('resize', changeFontSize);
    };
  }, [calculateSize, changeFontSize]);

  changeFontSize();

  return (
    <Body className="bg-zinc-900">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
}
