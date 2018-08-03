import "./styles/item.less";

const Item = ({ isSelected, children, onClick, selectedKey }) => {
  const className = "menu-item";
  return (
    <li
      className={`${className} ${isSelected ? `${className}-selected` : null}`}
      onClick={() => {
        onClick(selectedKey);
      }}
    >
      <a>{children}</a>
    </li>
  );
};

export default Item;
