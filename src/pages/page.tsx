import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageLayout = styled.section`
  align-content: center;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  height: 100%;
  justify-content: center;
  row-gap: 2.5rem;
  width: 100%;
  & > h1 {
    grid-column: 1 / -1;
    text-align: center;
    & > span {
      display: block;
    }
  }
  & > button {
    &:nth-of-type(1) {
      grid-column: 1;
      grid-row: 2;
    }
    &:nth-of-type(2) {
      grid-column: 2;
      grid-row: 2;
    }
  }
`;

export default function HomePage() {
  return (
    <HomePageLayout className="mx-auto max-w-xs divide-x">
      <h1 className="text-white">
        <span className="text-4xl font-medium">Simple task app</span>
        <span className="text-3xl font-medium">written in react</span>
      </h1>
      <Link
        className="flex w-full items-center justify-center rounded-l-lg  bg-sky-500 p-2 font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto"
        to="/register"
      >
        Join
      </Link>
      <Link
        className="flex w-full items-center justify-center rounded-r-lg  bg-sky-500 p-2 font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto"
        to="/reminder"
      >
        Try
      </Link>
    </HomePageLayout>
  );
}
