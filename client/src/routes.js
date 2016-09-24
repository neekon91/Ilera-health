// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, IndexRoute } from 'react-router';

//Shared Components
import App from './components/app.js';
import Signin from './components/auth/signin-component.js';
import Signup from './components/auth/signup-component.js';
import AllUsers from './components/shared/allUsers.jsx';
import Profile from './components/shared/profile.jsx';
import Messages from './components/shared/messages.jsx'

// Physician Components
import PhysicianApp from './components/physician-app/physician-app.jsx';
import PhysicianDashboard from './components/physician-app/physician-dashboard.jsx';
import Notes from './components/physician-app/notes.jsx';
import Calendar from './components/physician-app/calendar.jsx';

// Patient Components
import PatientApp from './components/patient-app/patient-app.jsx';
import BackgroundForm from './containers/forms/demographic-form.js';
import EmergencyContactForm from './containers/forms/emergency-contact-form.js';
import InsuranceForm from './containers/forms/insurance-policy-form.js';
import PatientDashboard from './components/patient-app/patient-dashboard.jsx';
import HealthLog from './components/patient-app/health-log.jsx';
import Medications from './components/patient-app/medications.jsx';

export default (
    <Router path='/' component= { App } >
        <IndexRoute component={ Signup }/>
        <Route path='signup' component={ Signup } />
        <Route path='signin' component={ Signin } />
        
        <Route path='provider' component={ PhysicianApp } >
            <Route path="dashboard" component={ PhysicianDashboard } />
            <Route path="patients" component={ AllUsers } >
              <Route path=':first:last' component={ Profile } />
            </Route>
            <Route path="notes" component={ Notes } />
            <Route path="messages" component={ Messages } />
            <Route path="profile" component={ Profile } />
            <Route path="calendar" component ={ Calendar }/>  
        </Route>  
        <Route path='patient' component={ PatientApp } >
            <Route path="form" > 
                <IndexRoute component={ BackgroundForm } />
                <Route path='background' component={ BackgroundForm } />
                <Route path='emergencyContact' component={ EmergencyContactForm } />
                <Route path='insurance' component={ InsuranceForm } />
            </Route>
            <Route path="dashboard" component={ PatientDashboard } />
            <Route path="healthlog" component={ HealthLog } />
            <Route path="physicians" component={ AllUsers } >
              <Route path=':first:last' component={ Profile } />
            </Route>
            <Route path="messages" component={ Messages } />
            <Route path="profile" component={ Profile } />
            <Route path="medications" component ={ Medications } />                 
        </Route>
    </Router>
);
