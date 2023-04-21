import styled from 'styled-components';

const MainLayout = styled.main`
  grid-column: 1;
  margin-top: 4.1rem;
  grid-row: 1 / -1;
`;

export default function Main({ children }: { children: React.ReactNode }) {
  return <MainLayout className="mt-[4rem] p-2">{children}</MainLayout>;
}
