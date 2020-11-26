import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle, Search, CSVExport } from 'react-bootstrap-table2-toolkit';

export default function MyTable() {

const { ToggleList } = ColumnToggle;  
const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
const products = [ {id: 101, name: "East", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 102, name: "Enforesys",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 103, name: "Solara", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"},
{id: 104, name: "Compass",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"}, 
{id: 105, name: "PTS", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-01-2020", Comment:"new company"}];
const columns = [{
    dataField: 'id',
    text: 'Client ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Software Name'
  }, {
    dataField: 'TokensGranted',
    text: 'No of licenses Granted'
  },{
    dataField: 'TokenDenied',
    text: 'No of licenses Denied'
  }, {
    dataField: 'NoOfUsers',
    text: 'No of users'
  }, {
    dataField: 'UsageTime',
    text: 'Useage time (mins)'
  },{
    dataField: 'FromDate',
    text: 'From date'
  }, {
    dataField: 'ToDate',
    text: 'To date'
  }];
  
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  },];
  
const CaptionElement = () => <h5 style={{ borderRadius: '0.25em', textAlign:'center', color:'gray', border: '1px solid  rgba(0,82,156,.3)', padding: '0.5em' }}>Software usage Report</h5>;
const selectRow = {
  mode: 'radio',
  clickToSelect: true
};

return (<div className="container">
  <a href="https://openbase.io/js/react-bootstrap-table-next" target="_blank">Check package performance</a>
<div className="row">
<div className="col mb-4 mr-3">
<BootstrapTable
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
  caption={<CaptionElement />} 
/>
</div>
<div className="col ml-3 mb-4 pt-2">
<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search
  caption={<CaptionElement />} 
>
  {
    props => (
      <div>
        <h5 style={{ borderRadius: '0.25em', textAlign:'center', color:'gray', border: '1px solid  rgba(0,82,156,.3)', padding: '0.5em' }}>Software usage Report</h5>
        <SearchBar { ...props.searchProps } />
        <ClearSearchButton { ...props.searchProps } />
        <BootstrapTable
          { ...props.baseProps }
        />
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
      </div>
    )
  }
</ToolkitProvider>
</div>
</div>
<div className="row">
<div className="col mr-3">
<BootstrapTable
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
  caption={<CaptionElement />} 
  selectRow={ selectRow }
/>
</div>
<div className="col ml-3">
<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  columnToggle
>
  {
    props => (
      <div>
        <ToggleList { ...props.columnToggleProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>
</div>
</div>
</div>)
    
}

