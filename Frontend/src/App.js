import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import PublicRoute from "./Components/ReactMiddleware/PublicRoute";
import Login from "./Components/Login&Register/Login";
import PassengerHomepage from "./Components/HomePages/HomePage.Passenger";
import PrivateRoute from "./Components/ReactMiddleware/PrivateRoute";
import Navbar from "./Components/SubComponents/Navbar";
import 'antd/dist/antd.css';
import AdminHomepage from "./Components/HomePages/HomePage.Admin";
import InspectorHomepage from "./Components/HomePages/HomePage.Inspector";
import FinancePerDate from "./Components/TransportManager/PerDay.Finances";
import FinancePerRoute from "./Components/TransportManager/PerRoute.Finances";
import FinancePerBus from "./Components/TransportManager/PerBus.Finances";
import StatisticsFinances from "./Components/TransportManager/Statistics.Finances";
import PassengerRoute from "./Components/TransportManager/Passenger_Route.Passenger";
import StatisticsPassengerTrips from "./Components/TransportManager/StatisticsTrip.Passenger";
import Register from "./Components/Login&Register/Register";
import AddCredit from "./Components/Passenger/AddCredit";
import PayFine from "./Components/Passenger/PayFine";
import AddFineInspector from "./Components/Inspector/addfine"
import AddFineInspectorPage from "./Components/Inspector/addFinePage"
import PassengerBus from "./Components/TransportManager/Passenger_Bus.Passenger";
import FinesList from "./Components/Passenger/FinesList";
import TripHistory from "./Components/Passenger/TripHistory";
import StatisticsOvercrowded from "./Components/TransportManager/Statistics.Overcrowded"
import CreditHistory from "./Components/Passenger/CreditHistory";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Container maxWidth={false} style={{ marginTop: 90, paddingLeft: 0, paddingRight: 0 }}>
            <Switch>

              {/*All the Public Routes of System*/}
              <PublicRoute restricted={true} component={Login} path="/" exact />
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PublicRoute restricted={true} component={Register} path="/register" exact />

              {/*Admin(Public Transport Manager) Only Routes*/}
              <PrivateRoute component={AdminHomepage} AccessBy={"admin"} path="/adminHome" exact />
              {<PrivateRoute component={FinancePerDate} AccessBy={"admin"} path="/financeHome" exact />}
              {<PrivateRoute component={FinancePerRoute} AccessBy={"admin"} path="/financeRoute" exact />}
              {<PrivateRoute component={FinancePerBus} AccessBy={"admin"} path="/financeBus" exact />}
              {<PrivateRoute component={StatisticsFinances} AccessBy={"admin"} path="/financeStat" exact />}
              {<PrivateRoute component={PassengerRoute} AccessBy={"admin"} path="/passengertrips" exact />}
              {<PrivateRoute component={PassengerBus} AccessBy={"admin"} path="/passenger-bus" exact />}
              {<PrivateRoute component={StatisticsPassengerTrips} AccessBy={"admin"} path="/passengerStat" exact />}
              {<PrivateRoute component={StatisticsOvercrowded} AccessBy={"admin"} path="/overcrowded" exact />}

              {/*Ticket Inspector Only Routes*/}
              <PrivateRoute component={InspectorHomepage} AccessBy={"inspector"} path="/inspectorHome" exact />
              <PrivateRoute component={AddFineInspector} AccessBy={"inspector"} path="/addFine" exact />
              <PrivateRoute component={AddFineInspectorPage} AccessBy={"inspector"} path="/addFinePage/:id" exact />

              {/*Passenger Only Routes*/}
              <PrivateRoute component={PassengerHomepage} AccessBy={"passenger"} path="/passengerHome" exact />
              <PrivateRoute component={AddCredit} AccessBy={"passenger"} path="/addCredit" exact />
              <PrivateRoute component={PayFine} AccessBy={"passenger"} path="/payFine/:id" exact />
              <PrivateRoute component={FinesList} AccessBy={"passenger"} path="/fineList" exact />
              <PrivateRoute component={TripHistory} AccessBy={"passenger"} path="/viewHistory" exact />
              <PrivateRoute component={CreditHistory} AccessBy={"passenger"} path="/creditHistory" exact />

            </Switch>
          </Container>
          {/*<Footer />*/}
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
