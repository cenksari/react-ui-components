import { memo } from 'react';

import PropTypes from 'prop-types';

const Pagination = memo(({ url, prev, next, pageSize, totalRows, currentPage }) => {
  const totalPages = Math.floor((totalRows + pageSize - 1) / pageSize);

  if (totalPages < 1) {
    return null;
  }

  if (currentPage > totalPages) {
    return null;
  }

  const Pages = () => {
    const pageArray = [];

    for (let i = 1; i <= totalPages; i += 1) {
      if (i === +currentPage) {
        pageArray.push(
          <li key={i} className='active' title='Current page'>
            <span>{i}</span>
          </li>
        );
      } else {
        pageArray.push(
          <li key={i}>
            <a href={`/${url}?page=${i}`}>{i}</a>
          </li>
        );
      }
    }

    return pageArray;
  };

  const PagesSelect = () => {
    const pageArray = [];

    for (let i = 1; i <= totalPages; i += 1) {
      if (i === +currentPage) {
        pageArray.push(
          <option key={i} value={i} disabled>
            {i}
          </option>
        );
      } else {
        pageArray.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }
    }

    return pageArray;
  };

  const handleSelectChange = (e) => {
    const curr = e.target.value;

    document.location = `/${url}?page=${curr}`;
  };

  if (totalRows > 0 && totalRows > pageSize) {
    if (totalPages > 10) {
      return (
        <div className='paging'>
          <ul>
            {+currentPage === 1 ? (
              <>
                <li className='disabled'>
                  <span>&lt;&lt;</span>
                </li>
                <li className='disabled'>
                  <span>&lt;</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`/${url}?page=1`} title='First page'>
                    &lt;&lt;
                  </a>
                </li>
                <li>
                  <a href={`/${url}?page=${prev}`} title='Previous page'>
                    &lt;
                  </a>
                </li>
              </>
            )}

            <li>
              <select
                id='pages'
                name='pages'
                aria-label='pages'
                defaultValue={currentPage}
                onChange={handleSelectChange}
              >
                <PagesSelect />
              </select>
            </li>

            {+currentPage >= totalPages ? (
              <>
                <li className='disabled'>
                  <span>&gt;</span>
                </li>
                <li className='disabled'>
                  <span>&gt;&gt;</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`/${url}?page=${next}`} title='Next page'>
                    &gt;
                  </a>
                </li>
                <li>
                  <a href={`/${url}?page=${totalPages}`} title='Last page'>
                    &gt;&gt;
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      );
    }

    return (
      <div className='paging'>
        <ul>
          {+currentPage === 1 ? (
            <>
              <li className='disabled'>
                <span>&lt;&lt;</span>
              </li>
              <li className='disabled'>
                <span>&lt;</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`/${url}?page=1`} title='First page'>
                  &lt;&lt;
                </a>
              </li>
              <li>
                <a href={`/${url}?page=${prev}`} title='Previous page'>
                  &lt;
                </a>
              </li>
            </>
          )}

          <Pages />

          {+currentPage >= totalPages ? (
            <>
              <li className='disabled'>
                <span>&gt;</span>
              </li>
              <li className='disabled'>
                <span>&gt;&gt;</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`/${url}?page=${next}`} title='Next page'>
                  &gt;
                </a>
              </li>
              <li>
                <a href={`/${url}?page=${totalPages}`} title='Last page'>
                  &gt;&gt;
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  return null;
});

Pagination.propTypes = {
  url: PropTypes.string.isRequired,
  prev: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalRows: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
