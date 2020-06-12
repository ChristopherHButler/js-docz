import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Accordion = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
};

export default Accordion;



const Container = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
`;

