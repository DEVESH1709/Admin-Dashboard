
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Datatable from '../../components/Datatable/Datatable'
import './User.scss'
import { useState } from 'react';
import Add from '../../components/Add/Add';
import { userRows } from '../../data';
// import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [

  {
    field:"img", headerName:"Avatar", width:100,
    renderCell: (params) => <img src={params.row.img|| "/noavatar.png"} alt=""></img>
  },
  { field: 'id', headerName: 'ID', width: 90 },
  // {
  //   field:"actions", headerName:"Aactions", width:100,
  //   renderCell: (params) => {
  //    return  <div className="action">
  //     <div className="view">View</div>
  //     <div className="delete">Delete</div>
  //    </div>
  //   }
  // },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field:"status",
    headerName:"Status",
    type:"boolean"

  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const User = () => {
  const[open,setOpen]=useState(false)

  // const { isLoading, data } = useQuery({
  //   queryKey: ['allusers'],
  //   queryFn: () =>
  //     fetch('localhost:8800/api/users').then(
  //       (res) =>res.json(),
  //     ),
  // })
  return (
    <div className='user'>
      <div className="info">
        <h1>USER</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
         {/* <Datatable></Datatable> */}
      </div>
   <Datatable slug="users" columns={columns} rows={userRows}></Datatable>
     {open && <Add  slug="user" columns={columns} setOpen={setOpen}></Add>}
    </div>
  )
}

export default User