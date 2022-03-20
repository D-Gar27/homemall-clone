import './Pagination.scss';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ length }) => {
  const navigate = useNavigate();
  const handlePageClick = (data) => {
    navigate(`/?page=${data.selected + 1}`);
  };
  let [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const pageCount = Math.ceil(length / 15);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<BsArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Number(pageCount)}
        marginPagesDisplayed={2}
        previousLabel={<BsArrowLeft />}
        containerClassName="pagination container"
        pageClassName="page-item"
        activeClassName="active"
        previousClassName={`page-item next_prev ${
          (page === 1 && 'disabled') || (!page && 'disabled')
        }`}
        nextClassName="page-item next_prev"
      />
    </>
  );
};

export default Pagination;
