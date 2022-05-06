import s from './Filter.module.scss';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
