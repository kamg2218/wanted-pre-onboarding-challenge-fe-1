import Router from './router'

import styled from 'styled-components'
import Header from './components/Common/Header';

function App() {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  )
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;