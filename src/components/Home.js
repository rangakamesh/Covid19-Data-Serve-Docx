import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import Banner from "../Images/architecture.jpg";

export class Home extends Component {
    static displayName = Home.name;

    render() {

        const footerStyle = {
            textAlign: "right",
            paddingTop: "15px",
            paddingRight: "10px",
            verticalAlign: 'middle',
        }

        return (
            <div className="container-md">
                <div className="card">
                    <div className="card-header">
                        <h2>About this project</h2>
                    </div>
                    <div className="card-body">
                        <p className="lead">A minimalistic API service that serves preprocessed COVID19 update data. The data is served as JSON objects. <br />
                       The service is currently hosted on an Azure App Service interacting with an instance of MongoDB Atlas.<br />
                       Source code for this service can be found at the repository <a href="https://github.com/rangakamesh/Covid19-Data-Serve" rel="noopener noreferrer" target="_blank"><small><u>rangakamesh/Covid19 Data Serve</u></small></a>.<br />
                        </p>
                        <div class="container-sm" style={{maxHeight:'1000px', maxWidth:'500px'}}>
                            <img src={Banner} class="img-fluid" alt="Covid Serve Architecture" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-header">
                        <h2>Data source</h2>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li><p className="lead">The data originates from the <a href="https://github.com/CSSEGISandData/COVID-19" rel="noopener noreferrer" target="_blank"><small><u>COVID-19 Data Repository</u></small></a> by the <b><small><u> Center for Systems Science and Engineering at Johns Hopkins University</u></small></b>. </p></li>
                            <li><p className="lead">It is preprocessed and fed into the MongoDB instance by a scheduled Azure Python Function whose source code can be found here.</p></li>
                            <li><p className="lead">Data before the 1st of April-2020 is not fetched and served due to formatting concerns.</p></li>
                            <li><p className="lead">The service is refreshed at 6 AM GMT every day for new updates on source data , falling back around 30 minutes to the new data update on the source.</p></li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="card" style={footerStyle}>
                    <div>
                        <p className="lead"> Please refer to the Documentation tab for API endpoints and their behaviours <button type="button" class="btn btn-primary" onClick={() => this.props.history.push('/docx')} >Documentation <ArrowRight /> </button> </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);