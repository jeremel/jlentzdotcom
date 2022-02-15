import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;

  h1 {
    margin: 0;
    font-size: 6rem;
    font-weight: 400;
  }
`;

export default function Nav() {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Jereme Lentz
      </motion.h1>
    </Container>
  );
}
