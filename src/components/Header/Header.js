import React from 'react';
import './Header.css';
import { Button, Typography, Link, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { divSearch, divSearchIcon } from './Header.styled';

export default function Header() {
    return (
        <header>
            <Typography>
                <Link href="/" color="primary">Home</Link>
            </Typography>
            <divSearch>
                <divSearchIcon>
                    <SearchIcon />
                </divSearchIcon>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </divSearch>
        </header>
    )
}