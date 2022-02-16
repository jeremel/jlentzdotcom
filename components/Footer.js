import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  padding: 1rem 0;
  justify-content: center;

  p {
    font-size: 1.75rem;
    margin: 1rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <motion.p whileHover={{ rotate: 180 }}>
        <Link href="/">
          <a>&copy; 2022 Jereme Lentz</a>
        </Link>
      </motion.p>
    </Container>
  );
}
