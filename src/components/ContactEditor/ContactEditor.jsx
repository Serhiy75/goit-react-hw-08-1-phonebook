import { useDispatch, useSelector } from 'react-redux';
import css from './ContactEditor.module.css';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactEditor = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExsist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Contact already is exsist');
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter name"
        className={css.input}
        required
      />
      <input
        name="number"
        placeholder="Enter number"
        className={css.input}
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
