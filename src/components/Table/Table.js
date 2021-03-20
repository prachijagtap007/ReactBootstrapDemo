import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle, Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"


export default function MyTable() {

const { ToggleList } = ColumnToggle;  
const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
const products2 = [ {id: 101, name: "Adobe Reader", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-02-2020", Comment:"new company"},
{id: 102, name: "Google Chrome",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-03-2020", Comment:"new company"},
{id: 103, name: "WinRAR", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-04-2020", Comment:"new company"},
{id: 104, name: "MS Word",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-05-2020", Comment:"new company"}, 
{id: 105, name: "MS Excel", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-06-2020", Comment:"new company"},
{id: 106, name: "MS PowerPoint", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-07-2020", Comment:"new company"},
{id: 107, name: "WinZIP",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-08-2020", Comment:"new company"},
{id: 108, name: "FireFox", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-09-2020", Comment:"new company"},
{id: 109, name: "Adobe Photoshop",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-02-2020", Comment:"new company"}, 
{id: 110, name: "Google Docs", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-03-2020", Comment:"new company"},
{id: 111, name: "Google Slides", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-04-2020", Comment:"new company"},
{id: 112, name: "WinZIP",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-05-2020", Comment:"new company"},
{id: 113, name: "WinRAR", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-06-2020", Comment:"new company"},
{id: 114, name: "Google Chrome",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-07-2020", Comment:"new company"}, 
{id: 115, name: "MS Excel", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-08-2020", Comment:"new company"},
{id: 116, name: "FireFox", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-09-2020", Comment:"new company"},
{id: 117, name: "Adobe Photoshop",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-02-2020", Comment:"new company"},
{id: 118, name: "Adobe Reader", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-03-2020", Comment:"new company"},
{id: 119, name: "MS Word",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-04-2020", Comment:"new company"}, 
{id: 120, name: "MS PowerPoint", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-05-2020", Comment:"new company"}];

const products = [ {id: 101, name: "Adobe Reader", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-02-2020", Comment:"new company"},
{id: 102, name: "Google Chrome",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-03-2020", Comment:"new company"},
{id: 103, name: "WinRAR", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-04-2020", Comment:"new company"},
{id: 104, name: "MS Word",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-05-2020", Comment:"new company"}, 
{id: 105, name: "MS Excel", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-06-2020", Comment:"new company"},
{id: 106, name: "MS PowerPoint", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-07-2020", Comment:"new company"},
{id: 107, name: "WinZIP",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-08-2020", Comment:"new company"},
{id: 108, name: "FireFox", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-09-2020", Comment:"new company"},
{id: 109, name: "Adobe Photoshop",TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-03-2020", Comment:"new company"}, 
{id: 110, name: "Google Docs", TokensGranted:15,TokenDenied:5, NoOfUsers:20,UsageTime:1200, FromDate: "12-01-2019", ToDate:"12-02-2020", Comment:"new company"}];

const selectOptions = {
  'Adobe Reader': 'Adobe Reader',
  'Google Chrome': 'Google Chrome',
  'MS Word': 'MS Word',
  'WinRAR': 'WinRAR',
  'WinZIP': 'WinZIP',
  'Adobe Photoshop':'Adobe Photoshop',
  'Google Docs':'Google Docs',
  'FireFox':'FireFox',
  'MS Excel':'MS Excel',
  'MS PowerPoint':'MS PowerPoint'
};

const columns = [{
    dataField: 'id',
    text: 'Client ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Software Name',
    formatter: cell => selectOptions[cell],
    filter: textFilter()
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
  
const selectRow = {
  mode: 'radio',
  clickToSelect: true,
  bgColor: '#00BFFF',
  clickToExpand: true
};
const expandRow = {
  showExpandColumn: true,
  renderer: row => (
    <div>
      <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
      <p>You can render anything here, also you can add additional data on every row object</p>
      <p>expandRow.renderer callback will pass the origin row object to you</p>
    </div>
  )
};

return (<div className="container">
  <br></br>
 <div className="row">
<div className="col mb-4 pt-2 pb-2">
<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <h5 style={{ borderRadius: '0.25em', textAlign:'center', color:'white', border: '1px solid  rgba(0,82,156,.3)', padding: '0.5em',backgroundColor: 'rgba(0,82,156,0.5)'  }}>Software Usage Report I</h5>
        <SearchBar { ...props.searchProps } />
        <ClearSearchButton { ...props.searchProps } />
        <BootstrapTable
        bootstrap4
          { ...props.baseProps }
          selectRow={ selectRow }
          expandRow={ expandRow }
          filter={ filterFactory() }
        />
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
      </div>
    )
  }
</ToolkitProvider>
</div>
</div>
<div className="row">
<div className="col mb-4 pt-2">
<ToolkitProvider
  keyField="id"
  data={ products2 }
  columns={ columns }
  columnToggle
>
  {
    props => (
      <div>
        <h5 style={{ borderRadius: '0.25em', textAlign:'center', color:'white', border: '1px solid  rgba(0,82,156,.3)', padding: '0.5em',backgroundColor: 'rgba(0,82,156,0.5)'  }}>Software Usage Report II</h5>
        <ToggleList { ...props.columnToggleProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          
          cellEdit={ cellEditFactory({ mode: 'click' }) }
          pagination={ paginationFactory() }
          filter={ filterFactory() }
        />
      </div>
    )
  }
</ToolkitProvider>
</div>
</div>
</div>)
    
}
