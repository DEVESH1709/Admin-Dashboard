import { useState } from 'react'
import './Product.scss'
import Datatable from '../../components/Datatable/Datatable'
import Add from '../../components/Add/Add'
import {products} from  '../../data.ts'
import { GridColDef } from '@mui/x-data-grid'


const columns: GridColDef[] = [


  { field: 'id', headerName: 'ID', width: 90 },
  {
    field:"img", headerName:"image", width:120,
    renderCell: (params) => <img src={params.row.img|| "/noavatar.png"} alt=""></img>
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
   type:" string"
  },
  {
    field:"color",
    headerName:"Color",
    type:"string",
    width:120,
    align:'center'

  },
  {
    field: 'price',
    headerName: 'Price',
    type:"string",
    width: 120,
    // editable: true,/
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 150,
   
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 150,
   
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    type: 'boolean',
    width: 100,
   
  },
];

const Product = () => {
  const [open,setOpen]=useState(false) 
  return (
<div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
         {/* <Datatable></Datatable> */}
      </div>
     <Datatable slug="products" columns={columns} rows={products}></Datatable>
     {open && <Add  slug="product" columns={columns} setOpen={setOpen}></Add>}
    </div>
  
  )
}

export default Product