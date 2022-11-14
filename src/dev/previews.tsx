import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {App} from "../components/App/App";
import {OrderList} from "../components/OrderList/OrderList";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/OrderList">
                <OrderList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;