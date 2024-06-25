import React from 'react';

import Pages from './Pages';
import PagesSelect from './PagesSelect';

interface IProps {
  url: string;
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Pagination = ({
  url,
  pageSize,
  totalRows,
  currentPage,
}: IProps): React.JSX.Element | null => {
  const totalPages = Math.floor((totalRows + pageSize - 1) / pageSize);

  if (totalPages < 1) {
    return null;
  }

  if (currentPage > totalPages) {
    return null;
  }

  const prevPage = () => {
    let prev = currentPage;

    if (prev > 1) {
      prev = currentPage - 1;
    } else {
      prev = 1;
    }

    return prev;
  };

  const nextPage = () => {
    let next = currentPage;

    if (next < totalPages) {
      next = currentPage + 1;
    } else {
      next = totalPages;
    }

    return next;
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const curr = e.target.value;

    document.location = `${url}?page=${curr}`;
  };

  if (totalRows > 0 && totalRows > pageSize) {
    if (totalPages > 10) {
      return (
        <div className='paging'>
          <ul>
            {currentPage === 1 ? (
              <>
                <li className='disabled'>
                  <span>
                    <i className='material-icons'>skip_previous</i>
                  </span>
                </li>
                <li className='disabled'>
                  <span>
                    <i className='material-icons'>navigate_before</i>
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`${url}?page=1`} title='First page'>
                    <i className='material-icons'>skip_previous</i>
                  </a>
                </li>
                <li>
                  <a href={`${url}?page=${prevPage()}`} title='Previous page'>
                    <i className='material-icons'>navigate_before</i>
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
                <PagesSelect totalPages={totalPages} currentPage={currentPage} />
              </select>
            </li>

            {currentPage >= totalPages ? (
              <>
                <li className='disabled'>
                  <span>
                    <i className='material-icons'>navigate_next</i>
                  </span>
                </li>
                <li className='disabled'>
                  <span>
                    <i className='material-icons'>skip_next</i>
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href={`${url}?page=${nextPage()}`} title='Next page'>
                    <i className='material-icons'>navigate_next</i>
                  </a>
                </li>
                <li>
                  <a href={`${url}?page=${totalPages}`} title='Last page'>
                    <i className='material-icons'>skip_next</i>
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
          {currentPage === 1 ? (
            <>
              <li className='disabled'>
                <span>
                  <i className='material-icons'>skip_previous</i>
                </span>
              </li>
              <li className='disabled'>
                <span>
                  <i className='material-icons'>navigate_before</i>
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`${url}?page=1`} title='First page'>
                  <i className='material-icons'>skip_previous</i>
                </a>
              </li>
              <li>
                <a href={`${url}?page=${prevPage()}`} title='Previous page'>
                  <i className='material-icons'>navigate_before</i>
                </a>
              </li>
            </>
          )}

          <Pages url={url} totalPages={totalPages} currentPage={currentPage} />

          {currentPage >= totalPages ? (
            <>
              <li className='disabled'>
                <span>
                  <i className='material-icons'>navigate_next</i>
                </span>
              </li>
              <li className='disabled'>
                <span>
                  <i className='material-icons'>skip_next</i>
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href={`${url}?page=${nextPage()}`} title='Next page'>
                  <i className='material-icons'>navigate_next</i>
                </a>
              </li>
              <li>
                <a href={`${url}?page=${totalPages}`} title='Last page'>
                  <i className='material-icons'>skip_next</i>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  return null;
};

export default Pagination;
