function NavBarItem(props) {
  return (
    <div
      className={
        props.isSelected
          ? "nav-bar-item nav-bar-item--selected"
          : "nav-bar-item"
      }
    >
      <img src={props.icon} />
      {props.text}
    </div>
  );
}

export default NavBarItem;
