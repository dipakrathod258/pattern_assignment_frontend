import React from 'react'
import styled from 'styled-components';
import logo from '../assets/amazon_logo.webp'

export default function Header(props) {

  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <a href="/"><img src={logo} alt="logo" /></a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 rem;
  .logo {
    img {
      height: 3rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;
