import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  padding: 1rem 0;
  justify-content: flex-start;

  p {
    font-size: 1.75rem;
    margin: 1rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <p>&copy; 2022 Jereme Lentz</p>
    </Container>
  );
}
