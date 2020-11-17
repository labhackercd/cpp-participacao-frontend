import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../index.js';
import { Route, MemoryRouter } from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import {shallow} from "enzyme/build";



test("It renders Dashboard Page", async () => {
    
    
    const  wrapper = mount(<Router><Dashboard/></Router>);

});