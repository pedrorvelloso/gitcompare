import React from "react";
import logo from "../../asstes/logo.png";

import { Container, Form } from "./styles";

const Main = () => (
    <Container>
        <img src={logo} alt="Gitcompare" />

        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button type="submit">OK</button>
        </Form>
    </Container>
);

export default Main;
