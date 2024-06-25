import React from 'react';

import Row from '../components/Containers/Row';
import Pagination from '../components/Elements/Pagination';
import Heading from '../components/Elements/Heading';

const Paginations = (): React.JSX.Element => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='p-less' id='p-less' href='#p-less' />
      <Heading type={2} color='gray' text='Less pages' />
      <p className='gray'>10 or less pages</p>
      <Pagination url='/' pageSize={30} totalRows={200} currentPage={1} />
      <code>
        &lt;Pagination url=&apos;/&apos; pageSize={'{30}'} totalRows=
        {'{200}'} currentPage={'{1}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='p-more' id='p-more' href='#p-more' />
      <Heading type={2} color='gray' text='More pages' />
      <p className='gray'>11 or more pages</p>
      <Pagination url='/' pageSize={30} totalRows={2000} currentPage={1} />
      <code>
        &lt;Pagination url=&apos;/&apos; pageSize={'{30}'} totalRows=
        {'{2000}'} currentPage={'{1}'} /&gt;
      </code>
    </Row>
  </>
);

export default Paginations;
