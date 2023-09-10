import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <title>Your Contacts</title>

      <ContactEditor />
      <Filter />
      <div>{isLoading && 'Request in progres...'}</div>
      <ContactsList />
    </>
  );
}
