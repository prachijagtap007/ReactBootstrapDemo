import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';

export default function MyTable() {

const { ToggleList } = ColumnToggle;  
const products = [ {id: 101, name: "East", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 102, name: "Enforesys",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 103, name: "Solara", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 104, name: "Compass",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"}, 
{id: 105, name: "PTS", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 106, name: "East", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 107, name: "Enforesys",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 108, name: "Solara", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 109, name: "Compass",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"}, 
{id: 110, name: "PTS", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"}];
const columns = [{
    dataField: 'id',
    text: 'Client ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Software Name'
  }, {
    dataField: 'TokensGranted',
    text: 'No of licenses Granted',
    sort: true
  },{
    dataField: 'TokenDenied',
    text: 'No of licenses Denied',
    sort: true
  }, {
    dataField: 'NoOfUsers',
    text: 'No of users',
    sort: true
  }, {
    dataField: 'UsageTime',
    text: 'Useage time (mins)',
    sort: true
  },{
    dataField: 'FromDate',
    text: 'From date',
    sort: true
  }, {
    dataField: 'ToDate',
    text: 'To date',
    sort: true
  }];
  
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  },];
  
const CaptionElement = () => <h5 style={{ borderRadius: '0.25em', textAlign:'center', color:'gray', border: '1px solid gray', padding: '0.5em' }}>Software usage Report</h5>;

return (<div className="container">
  <a href="https://openbase.io/js/react-bootstrap-table-next" target="_blank">Check package performance</a>
<div className="row">
<div className="col-lg-6">
<BootstrapTable
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
  caption={<CaptionElement />} 
/>
</div>
<div className="col-lg-6">
  <BootstrapTable
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
  caption={<CaptionElement />} 
/>
</div>
</div>
</div>)
    
}

