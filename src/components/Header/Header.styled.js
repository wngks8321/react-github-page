import React from 'react';
import styled from "styled-components";

const divSearch = styled.div`
    background: red,
    position: 'relative',
`;

const divSearchIcon = styled.div`
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
`;

export default {
    divSearch,
    divSearchIcon
};