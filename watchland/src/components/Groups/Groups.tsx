import React, { FC, useState } from 'react';
import './Groups.scss';

interface GroupsProps {}

const Groups: FC<GroupsProps> = () => {
  const [groups, setGroup] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;


  return (
    <div></div>
  )
}
export default Groups;
