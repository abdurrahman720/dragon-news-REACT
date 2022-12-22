import React, { useContext } from "react";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { googleSign } = useContext(AuthContext);

  const handleGoogleSignIn =() => {
    googleSign()
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(err => console.log(err))
    

  }


  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary">
          <FaGoogle></FaGoogle> Sign In with Google
        </Button>
        <br />
        <Button  variant="outline-dark">
          <FaGithub></FaGithub> Sign In with GitHub
        </Button>
      </ButtonGroup>

      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>

          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
         
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
