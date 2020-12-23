import React from "react";

// Enzyme allows to render juts one component stand-alone, independent of the entire react app.
// Enzyme allows to create an instance of a single component, so we can run isolated tests later
// Shallow is the most popular helper method or the best way of rendering react components in many circumstances
// Shallow renders the component with all its content, but the content isn't deeply rendered
import {configure, shallow} from 'enzyme';
// It allows to connect Enzyme to React v16.x
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// Connecting Enzyme to React v16.x
configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    // Rendering a <NavigationItems /> component
    const wrapper = shallow(<NavigationItems/>);

    it('should render one <ul /> element', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('should render two <NavigationItem /> components if no authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});