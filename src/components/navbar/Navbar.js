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
                <Navbar bg="info" variant="light" expand="lg" sticky="top">
                  <Navbar.Brand href="#home">React Bootstrap Demo</Navbar.Brand>
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
