import React, { Component } from 'react';
import { Input, InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import APIBag from "../services/handleCalls";
import Plotly from 'plotly.js'

export class FetchData extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      countryStatsName: "italy",
      countryNames: [],
      countryNamesOnSearch: [],
      dropDownResult: [],
      dropdownOpen: false,
      cdropdownOpen: false,
      dropdownValue: "Total Active",
      countryStatsRecords: {
        graphDates: [],
        confirmed: [],
        deaths: [],
        recovered: [],
      },
      countryDailyStatsRecords: {
        graphDates: [],
        confirmed: [],
        deaths: [],
        recovered: [],
      },
    };
    this.getCountryStats = this.getCountryStats.bind(this);
    this.handleCountryNameChange = this.handleCountryNameChange.bind(this);
    this.plotTheGraph = this.plotTheGraph.bind(this);
    this.plotTheTable = this.plotTheTable.bind(this);
    this.setDropdownOpen = this.setDropdownOpen.bind(this);
    this.setCDropdownOpen = this.setCDropdownOpen.bind(this);
    this.changeDropDown = this.changeDropDown.bind(this);
    this.getTopVals = this.getTopVals.bind(this);
    this.getCountryDrops = this.getCountryDrops.bind(this);
    this.handleCountryNameDropDownChange = this.handleCountryNameDropDownChange.bind(this);


  }

  async componentDidMount() {
    await this.populateForCountryStats();
    this.plotTheGraph();

    await this.populateCountryNames();
    await this.plotTheTable()

    //replacing with responsive plotly plots :(
    // window.onresize = function () {
    //   Plotly.relayout("r0c0", {
    //     'xaxis.autorange': true,
    //     'yaxis.autorange': true
    //   });
    // }

  }


  plotTheGraph() {

    var trace1 = {
      x: this.state.countryStatsRecords.graphDates,
      y: this.state.countryStatsRecords.confirmed,
      name: "Confirmed",
      type: "scatter",
      mode: "lines",
      marker: { color: "orange" },
    };

    var trace2 = {
      x: this.state.countryStatsRecords.graphDates,
      y: this.state.countryStatsRecords.deaths,
      name: "Deaths",
      type: "scatter",
      mode: "lines",
      marker: { color: "red" },
    };

    var trace3 = {
      x: this.state.countryStatsRecords.graphDates,
      y: this.state.countryStatsRecords.recovered,
      name: "Recovered",
      type: "scatter",
      mode: "lines",
      marker: { color: "green" },
    }

    var data = [trace1, trace2, trace3]

    var layout = {
      margin: {
        t: 0
      },
      autosize: true // set autosize to rescale 
    };

    Plotly.newPlot("r0c0", data, layout,{responsive: true});

    var trace21 = [{
      x: this.state.countryDailyStatsRecords.graphDates,
      y: this.state.countryDailyStatsRecords.confirmed,
      name: "Confirmed",
      type: "bar",
      mode: "lines",
      marker: { color: "orange" },
    }];

    Plotly.newPlot("r0c1", trace21, layout,{responsive: true});

    var trace22 = [{
      x: this.state.countryDailyStatsRecords.graphDates,
      y: this.state.countryDailyStatsRecords.deaths,
      name: "Deaths",
      type: "bar",
      mode: "lines",
      marker: { color: "red" },
    }];

    Plotly.newPlot("r1c0", trace22, layout,{responsive: true});

    var trace23 = [{
      x: this.state.countryDailyStatsRecords.graphDates,
      y: this.state.countryDailyStatsRecords.recovered,
      name: "Recovered",
      type: "bar",
      mode: "lines",
      marker: { color: "green" },
    }];

    Plotly.newPlot("r1c1", trace23, layout,{responsive: true});

  }

  async getCountryStats() {
    await this.populateForCountryStats()
    this.plotTheGraph()
  }

  handleCountryNameChange(e) {
    e.preventDefault()
    console.log(e.target.id)
    this.setState({
      countryStatsName: e.target.id
    }, this.getCountryStats)

  }

  handleCountryNameDropDownChange(event) {
    event.preventDefault()
    console.log(event.target.id)

    if (!event.target.value || event.target.value === " " || event.target.value === "")
      return
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.countryNames.filter(
        item => item.toLowerCase().includes(event.target.value.toLowerCase()
        ));

      this.setState({
        countryStatsName: event.target.value,
        countryNamesOnSearch: itemsToDisplay
      });
    }

  }


  setDropdownOpen(e) {
    e.preventDefault()

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  setCDropdownOpen(e) {
    e.preventDefault()

    this.setState({
      cdropdownOpen: !this.state.cdropdownOpen
    })
  }

  async changeDropDown(e) {
    e.preventDefault()

    this.setState({
      dropdownValue: e.currentTarget.id
    }, this.plotTheTable)

  }

  async plotTheTable() {


    await this.getTopVals();

    var contVal = []
    var activeVal = []
    var confVal = []
    var deadVal = []
    var recVal = []

    var values = [contVal, activeVal, confVal, deadVal, recVal]
    for (var i = 0; i < this.state.dropDownResult.length; i++) {
      contVal.push(this.state.dropDownResult[i].country_Region)
      activeVal.push(this.state.dropDownResult[i].active)
      confVal.push(this.state.dropDownResult[i].confirmed)
      deadVal.push(this.state.dropDownResult[i].deaths)
      recVal.push(this.state.dropDownResult[i].recovered)
    }

    var data = [{
      type: 'table',
      header: {
        values: [["<b>Country</b>"], ["<b>Active</b>"],
        ["<b>Confirmed</b>"], ["<b>Deaths</b>"], ["<b>Recovered</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: '#506784' },
        fill: { color: '#119DFF' },
        font: { family: "Arial", size: 12, color: "white" }
      },
      cells: {
        values: values,
        align: ["left", "center"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#25FEFD', 'white'] },
        font: { family: "Arial", size: 11, color: ["#506784"] }
      }
    }]

    Plotly.newPlot('r2c0', data);
  }

  getCountryDrops() {

    var x = this.state.countryNamesOnSearch.map((country) => (
      <DropdownItem><div onClick={this.handleCountryNameChange} id={country}>{country}</div></DropdownItem>
    ))
    return x;
  }


  render() {

    var countryDropList = this.getCountryDrops();

    return (
      <div>

        <div className="container" id="graphContainer">
          <InputGroup>
            <Input disabled placeholder="Country Name" value={this.state.countryStatsName} onChange={this.handleCountryNameDropDownChange} /> &nbsp;
            {/* <Button size="small" onClick={this.getCountryStats}>Change Country</Button> */}
            <Dropdown isOpen={this.state.cdropdownOpen} toggle={this.setCDropdownOpen} >
              <DropdownToggle caret >
                Change Country
              </DropdownToggle>
              <DropdownMenu style={{ height: '600px', overflowY: 'scroll' }}>
                <DropdownItem header><Input placeholder="Country Name" value={this.state.countryStatsName} onChange={this.handleCountryNameDropDownChange} /></DropdownItem> &nbsp;
                {countryDropList}
              </DropdownMenu>
            </Dropdown>
          </InputGroup>
          <br />
          <div className="row">

            <div className="col-sm-6">
              <div className="card" >
                <div className="card-header" style={{ verticalAlign: "middle" }}>
                  <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>Country Statistics : Confirmed, Deaths, Recovered.</h5>
                </div>
                <div className="card-body">
                  <div id="r0c0"></div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-header" style={{ verticalAlign: "middle" }}>
                  <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>Per day Stats : Daily New Cases.</h5>
                </div>
                <div className="card-body">
                  <div id="r0c1"></div>
                </div>
              </div>
            </div>

          </div>
          <br />
          <div className="row">

            <div className="col-sm-6">
              <div className="card" >
                <div className="card-header" style={{ verticalAlign: "middle" }}>
                  <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>Per day Stats :  Daily Deaths</h5>
                </div>
                <div className="card-body">
                  <div id="r1c0"></div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-header" style={{ verticalAlign: "middle" }}>
                  <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>Per day Stats : Daily Recoveries.</h5>
                </div>
                <div className="card-body">
                  <div id="r1c1"></div>
                </div>
              </div>
            </div>

          </div>
          <br />
          <div className="row">
            <div className="col-sm-6">
              <div className="card" >
                <div className="card-header" style={{ verticalAlign: "middle" }}>
                  <h5 style={{ display: "inline-block", verticalAlign: "middle" }}>Top Ten</h5>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.setDropdownOpen} >
                    <DropdownToggle caret >
                      {this.state.dropdownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem><div onClick={this.changeDropDown} id="Total Active">Total Active</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Total Confirmed">Total Confirmed</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Total Deaths">Total Deaths</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Total Recovered">Total Recovered</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Daily Confirmed">Daily Confirmed</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Daily Deaths">Daily Deaths</div></DropdownItem>
                      <DropdownItem><div onClick={this.changeDropDown} id="Daily Recovered">Daily Recovered</div></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="card-body">
                  <div id="r2c0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async populateCountryNames() {
    const response = await APIBag.fetchCountryNames();
    this.setState({
      countryNames: response.data.countryNames,
      countryNamesOnSearch: response.data.countryNames,
    });

  }

  async getTopVals() {
    var dt = new Date()

    var response;
    if (this.state.dropdownValue === "Total Confirmed") {
      response = await APIBag.fetchTopConfirmedCount(10, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
    else if (this.state.dropdownValue === "Total Deaths") {
      response = await APIBag.fetchTopDeathCount(10, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
    else if (this.state.dropdownValue === "Total Recovered") {
      response = await APIBag.fetchTopRecoveredCount(10, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
    else if (this.state.dropdownValue === "Total Active") {

      response = await APIBag.fetchTopActiveCount(10, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
    else {
      response = await APIBag.fetchTopActiveCount(10, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }


    this.setState({
      dropDownResult: response.data
    })

    console.log(response.data)

  }

  async populateForCountryStats() {
    const response = await APIBag.fetchCountry(this.state.countryStatsName);

    var graphDates = []
    var confirmed = []
    var deaths = []
    var recovered = []

    var dconfirmed = []
    var ddeaths = []
    var drecovered = []

    console.log(response.data)

    for (var i = 0; i < response.data.length; i++) {
      graphDates.push(response.data[i].last_Update)
      confirmed.push(response.data[i].confirmed)
      deaths.push(response.data[i].deaths)
      recovered.push(response.data[i].recovered)
      dconfirmed.push(response.data[i].new_Cases)
      ddeaths.push(response.data[i].new_Deaths)
      drecovered.push(response.data[i].new_Recoveries)
    }

    var countryStatsRecs = {
      graphDates: graphDates,
      confirmed: confirmed,
      deaths: deaths,
      recovered: recovered,
    }

    var dcountryStatsRecs = {
      graphDates: graphDates,
      confirmed: dconfirmed,
      deaths: ddeaths,
      recovered: drecovered,
    }

    this.setState({
      countryStatsRecords: countryStatsRecs,
      countryDailyStatsRecords: dcountryStatsRecs
    });

  }

}
