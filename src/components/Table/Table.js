import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

export default function MyTable() {
const products = [ {id: 101, name: "Chips", price:200},{id: 102, name: "Chips", price:200}];
const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Product Name',
    sort: true
  }, {
    dataField: 'price',
    text: 'Product Price',
    sort: true
  }];
  
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];
  
const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign:'center', color:'gray', border: '1px solid gray', padding: '0.5em' }}>React bootstrap table next</h3>;

return (<div>
<a href="https://openbase.io/js/react-bootstrap-table-next" target="_blank">Check package performance</a>
<BootstrapTable
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
  caption={<CaptionElement />} 
/>
</div>)
    
}

