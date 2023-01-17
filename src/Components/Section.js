import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableComponent from './Table';


export default function Section(){

    const [button,setButton]=useState("LIVE")
    const [currentTime,setCurrentTime]=useState("")

    // useEffect(()=>{
    //     var current_date=new Date().toLocaleDateString()
    //     var current_month= new Date().getMonth()
    //     setCurrentTime(current_date,current_month)
    // })
    
    const button_group = () => {
        var arr = ["LIVE","Today","Yesterday","Day b/f y/day","This Month","Last Month"]
        return arr.map((val) => {
            return (
                <Button  value={val} variant="primary" onClick={(e)=>{setButton(e.target.value)}}>{val}</Button>
            ) 
        })                 
    }
    // console.log(button)
    const date=()=> {
        var date_list = [];
        for (let i = 1; i <= 31; i++) {
            date_list.push(<option key={i} value="{i}">{i}</option>)
        }
        return date_list; 
    }
    
    function ProgressBarView(value1,value2,heading1,heading2,percentage,max,min,variant ) {
        return (
          <div>
            <p className='side_content'>{heading1}</p>
            <p className='numbers'>{value1}</p>
            <p className='percentage'>{percentage}</p>
            <ProgressBar className='progress_bar' variant={variant}  now={value1} max={max} min={min}  />  
            <p className='side_content'>{heading2}</p>
            <p className='numbers'>{value2}</p>
            <ProgressBar className='progress_bar'   variant={variant}   now={value2} />
          </div>
        );
      }

      function ProgressBarView2(value1,value2,value3,heading1,heading2,heading3,max,min,variant ) {
        return (
          <div>
            <p className='side_content'>{heading1}</p>
            <p className='numbers'>{value1}</p>
            <ProgressBar className='progress_bar' variant={variant}  now={value1} max={max} min={min}  />  
            <p className='side_content'>{heading2}</p>
            <p className='numbers'>{value2}</p>
            <ProgressBar className='progress_bar'   variant={variant}   now={value2} />
            <p className='side_content'>{heading2}</p>
            <p className='numbers'>{value2}</p>
            <ProgressBar className='progress_bar'   variant={variant}   now={value2} />
          </div>
        );
      }
      
// function ButtonGroup() {
//   return (
   
//     <ButtonGroup aria-label="Basic example">
//         <Button variant="secondary" >This Month</Button>
//         <Button variant="secondary">Last Month</Button>
//      </ButtonGroup>
 
   
//   )
// }

function TabComp() {
    return (
      <Tabs
        defaultActiveKey="yesterday"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="today" title="Today">
        </Tab>
        <Tab eventKey="yesterday" title="Yesterday">
        </Tab>
        <Tab eventKey="day_b/y_day" title="Day b/f y/day">
        </Tab>
        <Tab eventKey="last_day" title="Last Day" >
        </Tab>
      </Tabs>
    );
  }
   return(
        <div className='section'>
            <div className='button-section'>
                {button_group()}
            </div>

            <div className='row m-0 p-0'>
                <div className='date-section col-8'>
                <Form>
                <Form.Group  className="mb-3 starting-date">
                    <Form.Label column sm="2" className='date'> Start Date </Form.Label>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatSprWeN9is9WDASY7PMpGCjnyHxe15Th3w&usqp=CAU' className='calander-img'/>
                    <Form.Control type="date" className='input-box'/>
                    </Form.Group>
                    
                    <Form.Group  className="mb-3 ending-date">
                    <Form.Label column sm="2" className='date'> End Date </Form.Label>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatSprWeN9is9WDASY7PMpGCjnyHxe15Th3w&usqp=CAU' className='calander-img'/>
                    <Form.Control type="date" className='input-box'/>
                    </Form.Group>
                    <Button variant="dark" className='date-section-button'>VIEW</Button>
                </Form>
                </div>

                <div className='day-month col-3'>
                    <Form>
                    <Form.Group  className="mb-3 starting-date">
                    <Form.Label column sm="2" className='date'> Last </Form.Label>
                    <select className="select-board-size"> {date()}  </select>
                    <select className="select-board-size">
                        <option value={'days'}>Days</option>
                        <option value={'months'}>Months</option>
                    </select>
                    </Form.Group>
                    <Button variant="dark" className='date-section-button'>VIEW</Button>
                    </Form>
                </div>
            </div>

            <div className='live-bar'>
                <h5>{button}</h5>
            </div>

            <div className='FAs_Pending_section'>
                <div className='clock_img_section'>
                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwyG8AjhIXS2vlorMmjQLhBrWRdIUhWeetA&usqp=CAU' width='20%'/> */}
                    <p>FAs Pending</p>
                </div>

                <div className='card_section row m-0 p-0'>
                    <div className='col with_rm'>
                        <p className='title_content'>With RM</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/5908/5908938.png" />
                        <p className='numbers'>10</p>
                        <p className='text_content'>for 25 mins</p>
                    </div>
                    <div className='col with_rm'>
                        <p className='title_content'>Disbursal</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/5908/5908938.png" />
                        <p className='numbers'>25</p>
                        <p className='text_content'>for 15 mins</p>
                    </div>
                    <div className='col with_rm'>
                        <p className='title_content'>With Customer</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/5908/5908938.png" />
                        <p className='numbers'>40</p>
                        <p className='text_content'>for 10 mins</p>
                    </div>
                    <div className='col with_rm'>
                        <p className='title_content'>Capture Disbursal</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/5908/5908938.png" />
                        <p className='numbers'>10</p>
                        <p className='text_content'>for 15 mins</p>
                    </div>
                </div>
            </div>

            <div className="progress_section row">
                
                <div className="col active-customers">
                    <p className='title_content'>Active Customers</p>

                    {ProgressBarView(60,300,"Without FA","Total",'20%',100,0,"orange")}
                </div>
                <div className="col acquisition_targets">
                    <p className='title_content'>Acquisition Targets</p>
                    <div className='button_group'>
                        {/* {ButtonGroup()} */}
                    </div>
                    {ProgressBarView(25,500,"Acquired to date","November Target","5%",35,0,"green")}
                </div>
                <div className="col FAs_Due">
                    <p className='title_content'>FAs Due </p>
                    {ProgressBarView(250,400,"Paid so far ","Today Due","",300,0,"blue")}
                </div>
                <div className="col leads_pending">
                    <p className='title_content'>Leads Pending</p>
                    {ProgressBarView2(40,30,10,"With RMs","With R&C","Without FAs",50,0,"pink")}
                </div>
                <div className="col penalty">
                    <p className='title_content'>Penalty</p>
                    {ProgressBarView2("256K","150K","150K","Imposed","Waived","Collected")}
                </div>
            </div>

            <div className="review row">
                <div className="col agrement_due">
                    <p className='heading '>Agreement Due</p> 
                    <div className='comp row'>
                        <p className='side_heading col-9'>Expiring </p>
                        <p className='number_value col'>30</p>
                    </div>
                    <div className='comp row'>
                        <p className='side_heading col-9'>Expired</p>
                        <p className='number_value col'>20</p>
                    </div>
                </div>

                <div className="col agrement_due">
                    <p className='heading'>FA Upgrade Request </p> 
                    <div className='comp row'>
                    <p className='side_heading col-9'>Pending </p>
                    <p className='number_value col'>30</p>
                    </div>
                </div>
                <div className="col agrement_due">
                    <p className='heading'>Complaints</p> 
                    <div className='comp row'>
                    <p className='side_heading col-9'> Need Resolution</p>
                    <p className='number_value col'>30</p>
                    </div>
                    <div className='comp row'>
                    <p className='side_heading col-9'>Total </p>
                    <p className='number_value col'>30</p>
                    </div>
                    
                </div>
            </div>

            <div className='mobile_user_section'>
                <div className='mobile_row'>
                <img src='https://cdn-icons-png.flaticon.com/512/15/15874.png'/>
                <p className='heading'>Mobile Users</p>
                </div>
                <div className='row m-0 p-15'>
                    <div className='installation  col m-10 mr-5'>
                        <p className='side_heading'> Installations</p>
                        <div className='row m-0 p-0'>
                        <p className='range_number col-5'>100</p>
                        <p className='percentage_num col-3'>50%</p>
                        <img className='col' src='https://cdn-icons-png.flaticon.com/128/4871/4871351.png'/>
                        </div>

                    </div>
                    <div className='installation   col m-10 mr-5'>
                        <p className='side_heading'> Active Installations</p>
                        <div className='row m-0 p-0'>
                        <p className='range_number col-5'>100</p>
                        <p className='percentage_num col-3'>50%</p>
                        <img className='col' src='https://cdn-icons-png.flaticon.com/128/2211/2211472.png'/>
                        </div>

                    </div>
                    <div className='installation col m-10 mr-5'>
                        <p className='side_heading'>FAs Applied</p>
                        <div className='row m-0 p-0'>
                        <p className='range_number col-8'>100</p>
                        <img className='col' src='https://cdn-icons-png.flaticon.com/128/9166/9166207.png'/>
                        </div>

                    </div>

                    <div className='installation  col m-10 mr-5'>
                        <p className='side_heading'>FAs Repaid</p>
                        <div className='row m-0 p-0'>
                        <p className='range_number col-8'>100</p>
                        <img className='col' src='https://cdn-icons-png.flaticon.com/128/9285/9285852.png'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='end_section row'>
                <div className='repayment_section col'>
                    <div className='repayment'>
                        <img src='https://cdn-icons-png.flaticon.com/128/770/770444.png'/>
                        <p className='heading'>Repayment</p>
                    </div>
                    <div className='tabcomp'>
                        {TabComp()}
                    </div>
                    <div className='data row m-0 p-0'>
                        <div className='ontime col'>
                            <p className='head'>Ontime Metrics</p>
                            <p className='range'>270/300</p>
                            <p className='per'>90%</p>
                        </div>
                        <div className='ontime col'>
                            <p className='head'>Overdue Metrics</p>
                            <p className='range' >350/500</p>
                            <p className='per'>70%</p>
                        </div>
                    </div>
                </div>
                
                
                <div className='fabalance_section col'>
                    <div className='fabalance'>
                        <img src='https://cdn-icons-png.flaticon.com/128/2529/2529396.png'/>
                        <p className='heading'>Float Account Balance</p>
                    </div>
                    <div className='table_struct'>
                        {TableComponent()}
                    </div>

                </div>
            </div>

            
        </div>
    )
}