const Appbutton = (props) => {
  const { btnText } = props;
  return (
    <>
      <button>{btnText || 'Click'}</button>
    </>
  );
};
