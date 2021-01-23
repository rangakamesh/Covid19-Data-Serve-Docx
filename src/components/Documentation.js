import React, { Component } from 'react';
import { AppSettings } from '../AppSettings';
import { EndPointRequirements } from './EndPointSettings';
import { Search } from 'react-bootstrap-icons';

export class Documentation extends Component {
    static displayName = Documentation.name;

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            selectedDoc: "fetchCountry",
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.cookList = this.cookList.bind(this);
        this.listFilter = this.listFilter.bind(this);
        this.getContent = this.getContent.bind(this);
        this.changeSelectedItem = this.changeSelectedItem.bind(this);
    }

    componentDidMount() {
        console.log(EndPointRequirements[this.state.selectedDoc])
    }


    scriptLoaded() {
        window.A.sort();
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    cookList() {
        var endpointList = AppSettings.EndpointsAvailable;


        const listStyle = {
            padding: "10px",
            minHeight: "800px",
            maxHeight: "800px",
            marginBottom: "10px",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch",
        }

        var listItems = endpointList.map((endpoint) =>
            <li className="list-group-item list-group-item-action" id={endpoint} onClick={this.changeSelectedItem}>{endpoint}</li>
        );

        return (

            <div>
                <ul className="list-group" style={listStyle} id="endpointList">
                    <li className="list-group-item active" aria-current="true" id="SearchBar">
                        <div className="row">
                            <div className="col col-lg-2">
                                <Search style={{ fontSize: "25px", padding: "1px" }} />
                            </div>
                            <div className="col col-lg-10">
                                <input type="text" class="form-control" id="listFilter" onKeyUp={this.listFilter} placeholder="search endpoints.." />
                            </div>
                        </div>
                    </li>
                    {listItems}
                </ul>
            </div>

        )
    }

    changeSelectedItem(e) {
        console.log(e.target.id)
        this.setState({
            selectedDoc: e.target.id,
        });
    }

    listFilter() {
        var input, filter, ul, li, i, txtValue;
        input = document.getElementById('listFilter');
        filter = input.value.toUpperCase();
        ul = document.getElementById("endpointList");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            //a = li[i].getElementsByTagName("a")[0];
            txtValue = li[i].id;
            if (txtValue === "SearchBar") { continue; }
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }

        }
    }

    getContent() {
        var returnValue = []

        if (EndPointRequirements[this.state.selectedDoc].countryname) {
            returnValue.push(
                <tr>
                    <td >CountryName</td>
                    <td >{EndPointRequirements.isReq.countryname}</td>
                    <td >{EndPointRequirements.defaults.countryname}</td>
                    <td >{EndPointRequirements.validValues.countryname}</td>
                </tr>
            )
        }

        if (EndPointRequirements[this.state.selectedDoc].date) {
            returnValue.push(
                <tr>
                    <td >Year</td>
                    <td >{EndPointRequirements.isReq.date.year}</td>
                    <td >{EndPointRequirements.defaults.date}</td>
                    <td >{EndPointRequirements.validValues.date.year}</td>
                </tr>
            )

            returnValue.push(
                <tr>
                    <td>Month</td>
                    <td>{EndPointRequirements.isReq.date.month}</td>
                    <td>{EndPointRequirements.defaults.date}</td>
                    <td>{EndPointRequirements.validValues.date.month}</td>
                </tr>
            )

            returnValue.push(
                <tr>
                    <td>Day</td>
                    <td>{EndPointRequirements.isReq.date.day}</td>
                    <td>{EndPointRequirements.defaults.date}</td>
                    <td>{EndPointRequirements.validValues.date.day}</td>
                </tr>
            )
        }

        if (EndPointRequirements[this.state.selectedDoc].ascending) {
            returnValue.push(
                <tr>
                    <td>Ascending</td>
                    <td>{EndPointRequirements.isReq.ascending}</td>
                    <td>{EndPointRequirements.defaults.ascending}</td>
                    <td>{EndPointRequirements.validValues.ascending}</td>
                </tr>
            )
        }

        if (EndPointRequirements[this.state.selectedDoc].top) {
            returnValue.push(
                <tr>
                    <td>Top</td>
                    <td>{EndPointRequirements.isReq.top}</td>
                    <td>{EndPointRequirements.defaults.top}</td>
                    <td>{EndPointRequirements.validValues.top}</td>
                </tr>
            )
        }

        return returnValue


    }


    render() {

        console.log(AppSettings.EndpointsAvailable);

        const footerStyle = {
            padding: "15px",
        }

        var listElem = this.cookList();

        var requirementRows = this.getContent();

        return (
            <div>
                <div className="card">
                    <div class="card-header">
                        <h3>Reachability</h3>
                    </div>
                    <div className="card-body">
                        <p class="lead">The APIs can be reached at [HostSite]/api/[endpoint]?[attributes] <br />
                        For example : <small><em> https://covidserve.azurewebsites.net/api/fetchCountryOnDate?CountryName=canada&Year=2020&Month=12&Day=1 .</em></small> <br />
                        </p>
                    </div>
                </div>
                <br />
                <div className="card" style={footerStyle}>
                    <div className="row gx-5">
                        
                            <div className="col col-lg-4">
                                {listElem}
                            </div>
                        

                        <div className="col col-lg-8">

                            <div className="card" style={footerStyle}>
                                <div class="card-header">
                                    <h4>{this.state.selectedDoc}</h4>
                                </div>

                                <div className="card-body">
                                    <h6><u>What it does ?</u></h6>
                                    <p>{EndPointRequirements[this.state.selectedDoc].description}</p>

                                    <h6><u>Inputs required</u></h6>
                                    <table class="table table-sm table-bordered">
                                        <thead>
                                            <tr class="table-success">
                                                <th scope="col">Input name</th>
                                                <th scope="col">Is it required ?</th>
                                                <th scope="col">Defaults to if not specified</th>
                                                <th scope="col">Valid values</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {requirementRows}
                                        </tbody>
                                    </table>
                                    <h6><u>Example</u></h6>
                                    <p><a href={EndPointRequirements[this.state.selectedDoc].example} rel="noopener noreferrer" target="_blank">{EndPointRequirements[this.state.selectedDoc].example}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}
