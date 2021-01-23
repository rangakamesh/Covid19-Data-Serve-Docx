﻿import {EndPoints} from "../EndPoints"

export var EndPointRequirements = {

    "defaults":{
        "countryname" : "Fails, if required and not provided.",
        "date" : "Fails, if required and not provided.",
        "ascending" : "'false', results are returned in descending order.",
        "top": 10,
    },
    "validValues":{
        "countryname" : "Any country name. Gibberish returns none.",
        "date":{
            "year" : "Year : [2020-CurrentYear] anything greater returns none.",
            "month" : "Month : 1 to 12.",
            "day" : "Day : 1 to 31."
        },
        "ascending" : "true - returns result in ascending order. false - returns result in descending order.",
        "top": "integer value from 1 - 35356, although there are just around 195 countries.",
    },
    "isReq":{
        "countryname" : "Yes",
        "date":{
            "year" : "Yes",
            "month" : "Yes",
            "day" : "Yes"
        },
        "ascending" : "No",
        "top": "No",
    },
    "fetchCountry" : {
        "countryname" : true,
        "date" : false,
        "ascending" : false,
        "top": false,
        "description" : "Returns the Covid Record for the country requested. It returns covid record for all the days from 1st of April 2020 to current day.",
        "example" : EndPoints.Host+EndPoints.fetchCountry+"countryname=spain",
    },
    
    "fetchCountryNames" : {
        "countryname" : false,
        "date" : false,
        "ascending" : false,
        "top": false,
        "description" : "Returns a list of all the countries available in the database.",
        "example" : EndPoints.Host+EndPoints.fetchCountryNames+"fetchCountryNames",
    },
    "fetchCountryOnDate" : {
        "countryname" : true,
        "date" : true,
        "ascending" : false,
        "top": false,
        "description" : "Returns the Covid Record for the country requested on the specified date.",
        "example" : EndPoints.Host+EndPoints.fetchCountryOnDate+"countryname=spain&year=2020&month=12&day=1",
    },
    "fetchCountryToday" : {
        "countryname" : true,
        "date" : false,
        "ascending" : false,
        "top": false,
        "description" : "Returns the Covid Record for the country requested of the current date.",
        "example" : EndPoints.Host+EndPoints.fetchCountryToday+"countryname=spain",
    },
    "fetchOnDate" : {
        "countryname" : true,
        "date" : true,
        "ascending" : false,
        "top": false,
        "description" : "Returns the Covid Record of all the countries requested on the requested date.",
        "example" : EndPoints.Host+EndPoints.fetchOnDate+"countryname=spain&year=2020&month=12&day=1",
    },
    "fetchTopActiveCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of top countryName, date, Active cases till date. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopActiveCount+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopConfirmedCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of top countryName, date, Confirmed cases till date. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopConfirmedCount+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopDeathCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of top countryName, date, Death cases till date. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopDeathCount+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopRecoveredCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of countryName, date, Recovered cases till date sorted by the recovered cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopRecoveredCount+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopNewCases" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of top countryName, date, New cases on specified date, sorted by new cases on that day. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopNewCases+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopNewDeaths" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of top countryName, date, New Deaths on specified date, sorted by new deaths on that day. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopNewDeaths+"year=2020&month=12&day=1&top=5",
    },
    "fetchTopNewRecoveries" : {
        "countryname" : false,
        "date" : true,
        "ascending" : false,
        "top": true,
        "description" : "Returns an array of countryName, date, New Recoveries  on specified date, ofcourse sorted by new recoveries on that day. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchTopNewRecoveries+"year=2020&month=12&day=1&top=5",
    },
    "fetchSortedActiveCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, active cases till date of all the countries on the date requested. Output is sorted by the active cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedActiveCount+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedConfirmedCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, confirmed cases till date of all the countries on the date requested. Output is sorted by the confirmed cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedConfirmedCount+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedDeathCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, death cases till date of all the countries on the date requested. Output is sorted by the death cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedDeathCount+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedRecoveredCount" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, recovered cases till date of all the countries on the date requested. Output is sorted by the recovered cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedRecoveredCount+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedNewCases" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, new cases till date of all the countries on the date requested. Output is sorted by the new cases field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedNewCases+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedNewDeaths" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, new deaths  till date of all the countries on the date requested. Output is sorted by the new deaths field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedNewDeaths+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchSortedNewRecoveries" : {
        "countryname" : false,
        "date" : true,
        "ascending" : true,
        "top": true,
        "description" : "Returns an array of countryName, date, new recoveries till date of all the countries on the date requested. Output is sorted by the new recoveries field. Returns the top numbers requested.",
        "example" : EndPoints.Host+EndPoints.fetchSortedNewRecoveries+"year=2020&month=12&day=1&ascending=false&top=5",
    },
    "fetchCountryActive" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, active cases] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryActive+"countryname=spain&ascending=false",
    },
    "fetchCountryConfirmed" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, confirmed cases] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryConfirmed+"countryname=spain&ascending=false",
    },
    "fetchCountryDeath" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, deaths] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryDeath+"countryname=spain&ascending=false",
    },
    "fetchCountryNewCases" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, new cases] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryNewCases+"countryname=spain&ascending=false",
    },
    "fetchCountryNewDeaths" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, new deaths] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryNewDeaths+"countryname=spain&ascending=false",
    },
    "fetchCountryNewRecoveries" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, new recoveries] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryNewRecoveries+"countryname=spain&ascending=false",
    },
    "fetchCountryRecovered" : {
        "countryname" : true,
        "date" : false,
        "ascending" : true,
        "top": false,
        "description" : "Returns an array of [date, recovered cases] on all dates availabe for the country requested. Output is sorted by the date field.",
        "example" : EndPoints.Host+EndPoints.fetchCountryRecovered+"countryname=spain&ascending=false",
    },
    
    
}