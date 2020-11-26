import React,{ useState } from 'react'
import './Navbar.css';
import { Navbar,Nav} from 'react-bootstrap'
import MyTable from '../Table/Table.js'
import MyChart from '../Chart/Chart.js'


export default function BootstrapNavbar(){
  
    const [displayContent, setDisplayContent] = useState(MyTable);

        return (
          <div>
            <div className="row">
              <div className="col-md-12">
                <Navbar style={{background:"white", borderBottom:"1px solid rgba(0,82,156,.3)"}} variant="light" expand="lg" sticky="top">
                  <Navbar.Brand href="#home" style={{color:"rgba(0,82,156,1)"}}>Demo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                      className="mr-auto"
                      fill
                      variant="tabs"
                      defaultActiveKey="/"
                      onSelect={selectedKey => setDisplayContent((selectedKey === '/chart')? MyChart : MyTable)}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="/table">Table</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="/chart">Chart</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                {displayContent}
                <br />
              </div>
            </div>
          </div>
        );  
    
}
