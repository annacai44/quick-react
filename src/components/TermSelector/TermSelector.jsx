const terms = ["Fall", "Winter", "Spring"];

const MenuButton = ({ term, selection, setSelection }) => (
  <div>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={term === selection}
      autoComplete="off"
      onChange={() => setSelection(term)}
    />
    <label className="btn btn-success mb-1 p-2 m-1" htmlFor={term}>
      {term}
    </label>
  </div>
);

const MenuSelector = ({ selection, setSelection }) => (
  <div className="btn-group">
    {terms.map((term) => (
      <MenuButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const TermSelector = ({ term, setTerm }) => {
  return (
    <div>
      <MenuSelector selection={term} setSelection={setTerm} />
    </div>
  );
};

export default TermSelector;
