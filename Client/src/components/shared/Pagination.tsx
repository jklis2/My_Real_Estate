interface PaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pages, currentPage, onPageChange }: PaginationProps) {
  function goToPage(page: number) {
    onPageChange(page);
  }

  function nextPage() {
    if (currentPage < pages) {
      onPageChange(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`px-3 py-1 ${currentPage === i ? 'bg-slate-300 text-white' : 'bg-white text-gray-700'} border border-gray-300 rounded-full mx-1 focus:outline-none`}>
        {i}
      </button>,
    );
  }

  return (
    <div className="flex justify-center items-center my-16">
      <button onClick={prevPage} disabled={currentPage === 1} className="px-3 py-1 mx-1 bg-white text-gray-700 border border-gray-300 rounded-full disabled:opacity-50 focus:outline-none">
        {'<'}
      </button>
      {pageNumbers}
      <button onClick={nextPage} disabled={currentPage === pages} className="px-3 py-1 mx-1 bg-white text-gray-700 border border-gray-300 rounded-full disabled:opacity-50 focus:outline-none">
        {'>'}
      </button>
    </div>
  );
}
