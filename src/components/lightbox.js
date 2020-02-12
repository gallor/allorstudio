import React, { Fragment, useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;

  &:focus {
    outline:none;
  }
`;

const Button = styled.button`
  font-family: 'Material Icons';
  position: absolute;
  border: none;
  outline: none;
  font-size: 3rem;
  padding: 1.5rem;
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  top: 0;
  right: 0;
  background: none;
`;

const PrevButton = styled(Button)`
  top: 50%;
  left: 0;
  margin-top: -4rem;
`;

const NextButton = styled(Button)`
  top: 50%;
  right: 0;
  margin-top: -4rem;
`;

const Lightbox = (props) => {
  const [state, setState] = useState({
    open: false,
  });
 
  return (
    <Fragment>
      <LightboxContainer>
        {props.images.edges.map((image, index) => ( 
          <PreviewButton
            key={image.node.childImageSharp.fluid.src}
            type="button"
            onClick={() => setState({ open: true, index })}
          >
            <Img fluid={image.node.childImageSharp.fluid} />  
          </PreviewButton>
      ))} 
      </LightboxContainer>
      {state.open && (
        <Dialog aria-label="Headshot">
          <Img fluid={props.images.edges[state.index].node.childImageSharp.fluid} />
          <CloseButton className="material-icons" type="button" onClick={() => setState({ open: false })}>
            cancel
          </CloseButton>
          <PrevButton className="material-icons" type="button" onClick={() => setState(
            { open: true,
              index: state.index === 0 ? props.images.edges.length - 1 : state.index - 1 }
          )}>
            chevron_left
          </PrevButton>
          <NextButton className="material-icons" type="button" onClick={() => setState(
            { open: true,
              index: state.index ===  props.images.edges.length - 1 ? 0 : state.index + 1 }
          )}>
            chevron_right
          </NextButton>
        </Dialog>
      )}
    </Fragment>
  )
}

export default Lightbox;

            //  state.selectedImage.node.childImageSharp.fluid} />