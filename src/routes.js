import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import SlaForm from './containers/SlaForm';
import SlaTeamForm from './containers/SlaTeamForm';
import SlaTeamSupportForm from './containers/SlaTeamSupportForm';
import SlaPeriodForm from './containers/SlaPeriodForm';
import SlaTable from './containers/SlaTable';
import TeamSla from './containers/TeamSla';
import TeamSlaEditTeam from './containers/TeamSlaEditTeam';
import TeamSlaAddMember from './containers/TeamSlaAddMember';
import TeamSlaMemberList from './containers/TeamSlaMemberList';
import TeamSlaUserList from './containers/TeamSlaUserList';
import LeaveTable from './containers/Leave/LeaveTable';
import HistoryLeaveTable from './containers/Leave/HistoryLeaveTable';
import ProfileChangePassword from './containers/ProfileAndSetting/ProfileChangePassword';
import ProfileSetPasswordRemedy from './containers/ProfileAndSetting/ProfileSetPasswordRemedy';
import ProfilePicture from './containers/ProfileAndSetting/ProfilePicture';
import ProfileSignature from './containers/ProfileAndSetting/ProfileSignature';
import BarChartV from './containers/charts/BarChartV';
import ApproveTaskNoneSr from './containers/TaskNoneSR/ApproveTaskNoneSr';
import RoleMain from './containers/AdminWebComponent/RoleMain';
import UserMain from './containers/UserWebComponent/UserMain';
import NotificationsMain from './containers/NotificationsWebComponent/NotificationsMain';
import AssetMain from './containers/AssetWebComponent/AssetMain';
import ContractMain from './containers/ContractWebComponent/ContractMain';
import ContactMain from './containers/ContactWebComponent/ContactMain';
import HolidayMain from './containers/HolidayWebComponent/HolidayMain';
import MonthMain from './containers/MonthWebComponent/MonthMain';
import TaxiMain from './containers/TaxiWebComponent/TaxiMain';
import TypeItemProductMain from './containers/TypeItemProductWebComponent/TypeItemProductMain';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={TablePage}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="approvetasknonesr" component={ApproveTaskNoneSr}/>
      <Route path="slaform" component={SlaForm}/>
      <Route path="slateamform" component={SlaTeamForm}/>
      <Route path="slateamsupportform" component={SlaTeamSupportForm}/>
      <Route path="slaperiodform" component={SlaPeriodForm}/>
      <Route path="slatable" component={SlaTable}/>
      <Route path="teamsla" component={TeamSla}/>
      <Route path="teamslaeditteam" component={TeamSlaEditTeam}/>
      <Route path="teamslaaddmember" component={TeamSlaAddMember}/>
      <Route path="teamslamemberlist" component={TeamSlaMemberList}/>
      <Route path="teamslauserlist" component={TeamSlaUserList}/>
      <Route path="leavetable" component={LeaveTable}/>
      <Route path="historyleavetable" component={HistoryLeaveTable}/>
      <Route path="profilechangepassword" component={ProfileChangePassword}/>
      <Route path="profilesetpasswordremedy" component={ProfileSetPasswordRemedy}/>
      <Route path="profilepicture" component={ProfilePicture}/>
      <Route path="profilesignature" component={ProfileSignature}/>
      <Route path="rolemain" component={RoleMain}/>
      <Route path="BarChartV" component={BarChartV}/>
      <Route path="usermain" component={UserMain}/>
      <Route path="notificationsmain" component={NotificationsMain}/>
      <Route path="assetmain" component={AssetMain}/>
      <Route path="contractmain" component={ContractMain}/>
      <Route path="contactmain" component={ContactMain}/>
      <Route path="holidaymain" component={HolidayMain}/>
      <Route path="monthmain" component={MonthMain}/>
      <Route path="taximain" component={TaxiMain}/>
      <Route path="typeitemproductmain" component={TypeItemProductMain}/>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
