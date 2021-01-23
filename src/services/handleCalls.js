import axios from "axios";
import {EndPoints} from "../EndPoints"

class APIBag
{
 
    async fetchCountryNames()
    {
        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryNames);
        return data
    }

    async fetchCountry(CountryName)
    {
        var Attributes = "CountryName="+CountryName;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountry+Attributes);
        return data
    }
    async fetchCountryOnDate(CountryName,Year,Month,Day)
    {
        var Attributes = "CountryName="+CountryName+"&Year="+Year+"&Month="+Month+"&Day="+Day;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryOnDate+Attributes);
        return data
    }
    async fetchCountryToday(CountryName)
    {
        var Attributes = "CountryName="+CountryName;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryToday+Attributes);
        return data
    }
    async fetchOnDate(CountryName,Year,Month,Day)
    {
        var Attributes = "CountryName="+CountryName+"&Year="+Year+"&Month="+Month+"&Day="+Day;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchOnDate+Attributes);
        return data
    }
    async fetchTopActiveCount(Top,Year,Month,Day)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchTopActiveCount+Attributes);
        return data
    }
    async fetchTopConfirmedCount(Top,Year,Month,Day)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top;
        

        var data = await axios.get(EndPoints.Host+EndPoints.fetchTopConfirmedCount+Attributes);
        return data
    }
    async fetchTopDeathCount(Top,Year,Month,Day)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchTopDeathCount+Attributes);
        return data
    }
    async fetchTopRecoveredCount(Top,Year,Month,Day)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchTopRecoveredCount+Attributes);
        return data
    }





    async fetchSortedActiveCount(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedActiveCount+Attributes);
        return data
    }
    async fetchSortedConfirmedCount(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedConfirmedCount+Attributes);
        return data
    }
    async fetchSortedDeathCount(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedDeathCount+Attributes);
        return data
    }
    async fetchSortedRecoveredCount(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedRecoveredCount+Attributes);
        return data
    }
    async fetchSortedNewCases(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedNewCases+Attributes);
        return data
    }
    async fetchSortedNewDeaths(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedNewDeaths+Attributes);
        return data
    }
    async fetchSortedNewRecoveries(Top,Year,Month,Day,Ascending)
    {
        var Attributes = "Year="+Year+"&Month="+Month+"&Day="+Day+"&Top="+Top+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchSortedNewRecoveries+Attributes);
        return data
    }








    async fetchCountryActive(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryActive+Attributes);
        return data
    }
    async fetchCountryConfirmed(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryConfirmed+Attributes);
        return data
    }
    async fetchCountryDeath(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryDeath+Attributes);
        return data
    }
    async fetchCountryNewCases(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryNewCases+Attributes);
        return data
    }
    async fetchCountryNewDeaths(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryNewDeaths+Attributes);
        return data
    }
    async fetchCountryNewRecoveries(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryNewRecoveries+Attributes);
        return data
    }
    async fetchCountryRecovered(CountryName,Top,Year,Month,Day,Ascending)
    {
        var Attributes = "CountryName="+CountryName+"&Ascending="+Ascending;

        var data = await axios.get(EndPoints.Host+EndPoints.fetchCountryRecovered+Attributes);
        return data
    }
    
}

export default new APIBag();