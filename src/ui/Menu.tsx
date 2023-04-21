import styled from 'styled-components';
import MenuLinks from './MenuLinks';

const MenuLayout = styled.menu`
  grid-column: 1;
  grid-row: 2;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  z-index: 1;
`;

export default function Menu() {
  return (
    <MenuLayout className="ml-auto mt-[-2px] rounded-b-md bg-black/60 opacity-90">
      <ul className="mt-1 p-4">
        <MenuLinks
          links={[
            {
              name: 'Login',
              to: 'login',
            },
            {
              name: 'Register',
              to: 'register',
            },
          ]}
        />
      </ul>
    </MenuLayout>
  );
}
