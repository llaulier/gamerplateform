import React from "react";
import "./styles/Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.image}
        title="avatar"
        alt={props.name}
      />
      <div>
        <h4 className=" name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Contact;
