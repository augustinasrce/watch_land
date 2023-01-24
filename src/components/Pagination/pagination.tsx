import { useQuery } from "../../utils/hooks";

interface IPaginationProps {
  active: number;
  pageCount: number;
}

const Pagination = ({ active, pageCount }: IPaginationProps) => {
  const activePage = useQuery().get("page") || active;
  const renderPages = () => {
    const pageArray = Array.from(Array(pageCount).keys());
    return [
      ...pageArray.map((pageKey: number) => {
        return (
          <li className={`page-item ${activePage === pageKey + 1 ? "active" : ""}`}>
            <a className="page-link" href="#">
              {pageKey + 1}
            </a>
          </li>
        );
      })
    ];
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {renderPages()}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
