import { memo } from 'react';

interface IProps {
  url: string;
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Pagination = memo(({ url, pageSize, totalRows, currentPage }: IProps): React.JSX.Element => {
  const totalPages = Math.floor((totalRows + pageSize - 1) / pageSize);

  if (totalPages < 1) {
    return <></>;
  }

  if (currentPage > totalPages) {
    return <></>;
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
            <a href={`${url}?page=${i}`}>{i}</a>
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
                <PagesSelect />
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

          <Pages />

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

  return <></>;
});

export default Pagination;
