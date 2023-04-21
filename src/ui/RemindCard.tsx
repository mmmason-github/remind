import type React from 'react';
import styled from 'styled-components';

const RemindCardLayout = styled.div`
  align-items: center;
  column-gap: 0.25rem;
  display: grid;
  grid-template-columns: 1fr 1rem;
  grid-template-rows: 1fr 1rem;
  justify-content: center;
  & > h2 {
    grid-column: 1;
    grid-row: 1 / -1;
    max-width: 95%;
  }
  & > input {
    align-self: start;
    background: transparent;
    color: transparent;
    grid-column: 2;
    grid-row: 1;
    outline: none;
    &:focus {
      box-shadow: none;
      border-color: rgb(0 0 0 / 0.8);
      border-width: 1px;
      color: transparent;
      outline: none;
    }
  }
  & > button {
    align-self: end;
    grid-column: 2;
    grid-row: 2;
    & > svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export default function RemindCard({
  onCompleted,
  onDeleted,
  task,
}: {
  onCompleted: (id: string) => void;
  onDeleted: (id: string) => void;
  task: {
    completed: boolean;
    id: string;
    value: string;
  };
}) {
  const onChange = () => {
    onCompleted(task.id);
  };

  const onClicked = () => {
    onDeleted(task.id);
  };

  return (
    <RemindCardLayout className="my-2 rounded-md p-2 ring ring-black/60">
      <h2 className="text-sm font-normal text-black/80">{task.value}</h2>
      <input
        checked={task.completed}
        className="rounded-sm border-[1px] border-black/80"
        key={`tsc${Math.random() * 1000}`}
        type="checkbox"
        onChange={onChange}
      />
      <button
        key={`tsd${Math.random() * 1000}`}
        type="button"
        onClick={onClicked}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z" />
        </svg>
      </button>
    </RemindCardLayout>
  );
}
