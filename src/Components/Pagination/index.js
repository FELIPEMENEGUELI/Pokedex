import { Container, PaginationButton, PaginationPage } from "./style.js";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export function Pagination({ page, totalPages, onLeftClick, onRightClick }) {
  return (
    <Container>
      <PaginationButton>
        <button onClick={onLeftClick}>
          <ArrowBigLeftDash />
        </button>
      </PaginationButton>
      <PaginationPage>
        {page} de {totalPages}
      </PaginationPage>
      <PaginationButton>
        <button onClick={onRightClick}>
          <ArrowBigRightDash />
        </button>
      </PaginationButton>
    </Container>
  );
}
