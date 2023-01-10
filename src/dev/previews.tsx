import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {AuthorizationLogin} from "../pages/AuthPage/Authorization/AuthorizationLogin/AuthorizationLogin";
import {Slider} from "../components/Slider/Slider";
import {AuthPage} from "../pages/AuthPage/AuthPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AuthPage">
                <AuthPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;