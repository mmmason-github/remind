import type { Dispatch, SetStateAction } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLayout = styled.nav`
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem;
  z-index: 2;
  & > ul {
    align-items: center;
    display: grid;
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 1fr 4rem;
    grid-template-rows: 4rem;
    & > li {
      & > a {
        grid-column: 1;
        grid-row: 1;
      }
      & > button {
        grid-column: 1;
        grid-row: 2;
        height: 4rem;
        width: 4rem;
      }
    }
  }
`;

export default function Nav({
  onTriggered,
}: {
  onTriggered: Dispatch<SetStateAction<boolean>>;
}) {
  const onClicked = () => {
    onTriggered((prevState) => !prevState);
  };

  return (
    <NavLayout className="rounded-bl-lg border-b-2 border-cyan-950 bg-black/60 opacity-[97] shadow-sm shadow-cyan-500/50">
      <ul>
        <li>
          <Link
            className="ml-[12px] text-4xl font-extrabold tracking-tight text-red-600/60"
            to="/"
          >
            Remind
          </Link>
        </li>
        <li>
          <button type="button" onClick={onClicked}>
            <svg
              className="m-auto h-10 w-10 text-slate-600/60"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </NavLayout>
  );
}
