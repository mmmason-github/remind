import styled from 'styled-components';
import ReminderCard from '../../ui/ReminderCard';

const ReminderPageLayout = styled.section`
  align-items: center;
  display: grid;
  grid-auto-rows: 1fr;
  height: 100%;
  justify-content: center;
  margin: auto;
  row-gap: 1rem;
  width: 100%;
`;

export default function ReminderPage() {
  return (
    <ReminderPageLayout>
      <ReminderCard />
    </ReminderPageLayout>
  );
}
