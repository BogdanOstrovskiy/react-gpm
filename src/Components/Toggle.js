import React from "react";

class Toggle extends React.PureComponent {
  render() {
    const { menu } = this.props;
    console.log(menu);
    return (
      <div className={"nav"}>
        {menu.map((el) => (
          <span key={el.id} className={ el.selected ? "nav-item active" : "nav-item "}>
            {el.name}
          </span>
        ))}
      </div>
    );
  }
}

export default Toggle;
