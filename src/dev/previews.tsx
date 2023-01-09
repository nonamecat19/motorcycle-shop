import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {AuthorizationLogin} from "../pages/AuthPage/Authorization/AuthorizationLogin/AuthorizationLogin";
import {Slider} from "../components/Slider/Slider";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
        </Previews>
    );
};

export default ComponentPreviews;