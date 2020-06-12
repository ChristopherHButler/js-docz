import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Panel = ({
  children,
  backgroundColor,
  color,
  style = {},
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      style={style}
    >
      { children }
    </Container>
  );
};

Panel.propTypes = {
  children: PropTypes.node,

  backgroundColor: PropTypes.string,
  color: PropTypes.string,

  style: PropTypes.object,
};

Panel.defaultProps = {

  backgroundColor: 'white',
  color: '#333',

  style: {},
};

export default Panel;




const Container = styled.div`
  padding: 0 18px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  max-height: 100%;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;
