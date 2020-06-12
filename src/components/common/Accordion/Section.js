import React, { Fragment, useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Section = ({
  title,
  children,
  contentOpen,
  backgroundColor,
  backgroundColorHover,
  backgroundColorActive,
  color,
  style = {}
}) => {

  const [isContentPanelOpen, setContentPanelOpen] = useState(contentOpen || false);


  return (
    <Fragment>
      <Heading
        onClick={() => setContentPanelOpen(!isContentPanelOpen)}
        isContentPanelOpen={isContentPanelOpen}
        backgroundColor={backgroundColor}
        backgroundColorHover={backgroundColorHover}
        backgroundColorActive={backgroundColorActive}
        color={color}
        style={style}
      >
        { title }
      </Heading>
      {
        isContentPanelOpen && 
        (
          <ContentContainer isContentPanelOpen={isContentPanelOpen}>
            {children}
          </ContentContainer>
        )
      }
    </Fragment>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,

  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  backgroundColorActive: PropTypes.string,

  color: PropTypes.string,

  style: PropTypes.object,
};

Section.defaultProps = {
  title: '',

  backgroundColor: '#eee',
  backgroundColorHover: '#ccc',
  backgroundColorActive: '#ccc',
  borderBottomColor: '#ccc',

  color: '#444',

  style: {},
};

export default Section;





const Heading = styled.button`
  background-color: ${props => props.isContentPanelOpen ? props.backgroundColorActive : props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${props => props.borderBottomColor};
  outline: none;
  text-align: left;
  font-size: 15px;
  transition: 0.4s;


  &:hover {
    background-color: ${props => props.backgroundColorHover};
  }

  &:active {
    background-color: ${props => props.backgroundColorActive};
  }

`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;
