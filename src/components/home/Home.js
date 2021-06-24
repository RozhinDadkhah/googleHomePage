import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Home() {
    return (
        <Container>
            <LogoSection>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png' alt='google logo' />
            </LogoSection>
            <SearchForm>
                <Search>
                    <SearchIcon />
                    <SearchInput type='text' />
                    <MicIcon />
                </Search>
                <ButtonSection>
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </ButtonSection>
            </SearchForm>
        </Container>
    )
}

export default Home


const Container = styled.div`
    margin:0;
    margin-top:10%;
    justify-content: center;
    flex-direction : cloumn;
    
`

const LogoSection = styled.div`
    display:flex;


    img{
        width:272px;
        height:92px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`
const SearchForm = styled.div`
    display:flex;
    padding:20px;
    justify-content:center;
    flex-direction:column;
`

const Search = styled.form`
    display:flex;
    align-items:center;
    padding:0px 14px;
    background:#fff;
    border: 1px solid lightgray;
    box-shadow:none;
    border-radius:24px;
    z-index:3;
    height:44px;
    width:555px;
    margin: 0 auto;
    max-width:504px;
    `

const SearchInput = styled.input`
    flex: 1;
    flex-wrap: wrap;
    height: 40px;
    background-color: transparent;
    border:none;
    border-radius:20px;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 34px;
    font-size: 16px;

`
const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    padding-top: 18px;
    top: 53px;
    z-index: 0;

        button {
            background-color: #E8E8E8;
            border: 1px solid #f8f9fa;
            border-radius: 4px;
            color: #3c4043;
            font-family: Roboto, arial, sans-serif;
            font-size: 14px;
            margin: 11px 4px;
            padding: 0 16px;
            line-height: 27px;
            height: 36px;
            min-width: 54px;
            text-align: center;
            cursor: pointer;
            user-select: none;
        }

`