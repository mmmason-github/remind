import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuLinksLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-evenly;
  column-gap: 1rem;
`;

export default function MenuLinks({
  links,
}: {
  links: {
    name: string;
    to: string;
  }[];
}) {
  return (
    <MenuLinksLayout>
      {links.map((link) => (
        <li key={`link-${Math.random() * 1000}`}>
          <Link
            className="text-2xl font-semibold tracking-tight text-slate-700"
            to={link.to}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </MenuLinksLayout>
  );
}
