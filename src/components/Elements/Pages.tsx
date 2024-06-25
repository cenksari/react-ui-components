import React from 'react';

interface IProps {
  url: string;
  totalPages: number;
  currentPage: number;
}

const Pages = ({ url, totalPages, currentPage }: IProps): any => {
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

export default Pages;
