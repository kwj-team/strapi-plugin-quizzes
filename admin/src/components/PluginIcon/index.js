/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import styled from 'styled-components';
import Puzzle from '@strapi/icons/Lightbulb';
// import Icon from './brain.png';
import Icon from './answer.png';

const StyledImg = styled.img`
    filter: invert(67%) sepia(10%) saturate(644%) hue-rotate(202deg) brightness(84%) contrast(87%);
    
    a:hover & {
        filter: invert(44%) sepia(25%) saturate(438%) hue-rotate(201deg) brightness(87%) contrast(90%);;
    }

    a.active & {
        filter: invert(27%) sepia(71%) saturate(5861%) hue-rotate(240deg) brightness(101%) contrast(103%);
    }
`

const PluginIcon = () => <StyledImg width="16px" height="16px" src={Icon} />;

export default PluginIcon;
