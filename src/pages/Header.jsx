import React from "react";
import Nav from "../components/Nav/Nav";
import style from "./index.module.scss";
import Container from "../components/Container/Container";
import Content from '../components/Content/Content'

function Header() {
  return (
<div className={style.header}>
  <Container>
    <Nav />
    <Content />
  </Container>
</div>
  );
}

export default Header;
