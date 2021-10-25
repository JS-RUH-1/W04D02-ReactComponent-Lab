function Header(props) {
  return (
    <ul className="headerUl">
      <li>
        <a href="#">{props.element1}</a>
      </li>
      <li>
        <a href="#">{props.element2}</a>
      </li>
      <li>
        <a href="#">{props.element3}</a>
      </li>
    </ul>
  );
}

export default Header;
