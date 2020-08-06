import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from "./pages/Landing";
import TeacherList from "./components/TeacherList";
import TeacherForm from "./components/TeacherFomr";

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/"  exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;