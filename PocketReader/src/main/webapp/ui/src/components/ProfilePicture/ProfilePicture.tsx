import React from 'react';
import styled from "styled-components";

export interface ProfilePictureProps {
    //image url
    imageUrl: string;

    //background color (set default as transparent, being = '')
    backgroundColor?: string;
}

const ProfilePicture: React.FunctionComponent<ProfilePictureProps> = ({imageUrl = 'https://firebasestorage.googleapis.com/v0/b/monkeyportal-819d3.appspot.com/o/defaultpictures%2Fdefaultprofilepicture.png?alt=media&token=354077b9-36e5-40f5-a75e-507f9f3e23bf', backgroundColor = ''}) =>
( 
<Container backgroundColor={backgroundColor}>
    <ProfilePictureItself imageUrl={imageUrl} />
</Container>
);
export default ProfilePicture;

// Styled component named Container
const Container = styled.div`
  background: ${(props: {backgroundColor: string}) => props.backgroundColor};
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items:center;
  margin:auto; 
`;

// Styled component named ProfilePicture
const ProfilePictureItself = styled.div`
  background-image: url(${(props: {imageUrl: string}) => props.imageUrl});
  width: 500px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
`;
