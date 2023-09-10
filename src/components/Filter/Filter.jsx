import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { FilterCont, FilterTitle } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterCont>
      <label htmlFor="filter">
        <FilterTitle>Find contacts by name</FilterTitle>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Enter name"
          onChange={event => dispatch(addFilter(event.target.value))}
        />
      </label>
    </FilterCont>
  );
};
