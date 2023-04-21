import styled from 'styled-components';
import { useCallback, useState } from 'react';
import RemaindCard from './RemindCard';

const ReminderCardLayout = styled.div`
  & > div {
    & > form {
      background: transparent;
      display: grid;
      grid-template-columns: 1fr max-content;
      column-gap: 1rem;
      & > input {
        -webkit-box-shadow: none;
        background: transparent;
        border-bottom: 2px solid black;
        border-left: 0;
        border-right: 0;
        border-top: 0;
        box-shadow: none;
        outline: none;
        &:focus {
          -webkit-box-shadow: none;
          border-bottom: 2px solid black;
          border-left: 0;
          border-right: 0;
          border-top: 0;
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
`;

export default function ReminderCard() {
  const [tasks, setTasks] = useState<
    {
      completed: boolean;
      id: string;
      value: string;
    }[]
  >([]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget.elements.namedItem(
      'reminders',
    ) as HTMLInputElement;
    if (target && target.value !== '') {
      setTasks((prevState) => {
        const newState = [
          {
            completed: false,
            id: `ts${Math.random() * 1000}`,
            value: target.value,
          },
          ...prevState,
        ];
        return newState;
      });
    }
  };

  const onCompleted = useCallback(
    (id: string) => {
      setTasks((prevState) => {
        const newState = prevState.map((entry) => {
          if (entry.id === id) {
            return {
              completed: !entry.completed,
              id: entry.id,
              value: entry.value,
            };
          }
          return entry;
        });
        return newState;
      });
    },
    [setTasks],
  );

  const onDeleted = useCallback(
    (id: string) => {
      setTasks((prevState) => {
        const newState = prevState.filter((entry) => entry.id !== id);
        return newState;
      });
    },
    [setTasks],
  );

  return (
    <ReminderCardLayout className="rounded-md p-2 ring ring-cyan-950 ">
      <div className="rounded-md bg-red-600/60 p-2 shadow-slate-200 ring-2 ring-black drop-shadow-md">
        <h2 className="text-lg font-bold text-black/80">Reminders</h2>
        <h3 className="border-x-0 border-b-2 border-t-0 border-black/70 pb-2 text-sm font-medium text-black/80">
          Get things done, one item at a time
        </h3>
        {tasks.map((task) => (
          <RemaindCard
            key={task.id}
            task={task}
            onCompleted={onCompleted}
            onDeleted={onDeleted}
          />
        ))}
        <form onSubmit={onSubmit}>
          <input
            className="border-x-0 border-b-2 border-t-0 border-black/60 pb-[4px] text-sm font-medium text-black/60 outline-none placeholder:text-sm placeholder:font-medium placeholder:text-black/60"
            name="reminders"
            placeholder="Reminders"
            type="text"
          />
          <button
            className="h-max self-end rounded-md bg-sky-500 px-1 py-0
            text-sm text-white hover:bg-sky-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
            type="submit"
          >
            Remind
          </button>
        </form>
      </div>
    </ReminderCardLayout>
  );
}
