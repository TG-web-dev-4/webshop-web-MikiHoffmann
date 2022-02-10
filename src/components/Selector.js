const Selector = ({ selectorOptions, onChangeHandler }) => {
  const selectorOptionsDisplay = selectorOptions.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return <select onChange={onChangeHandler}>{selectorOptionsDisplay}</select>;
};

export default Selector;
