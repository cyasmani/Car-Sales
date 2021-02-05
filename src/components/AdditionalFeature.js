import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../myStore/actions"

const AdditionalFeature = props => {

  console.log(props)
  

  return (
    <li>
      <button className="button" onClick={() => {
        props.addFeature(props.feature);
        
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//export default AdditionalFeature;
export default connect(null, {addFeature})(AdditionalFeature)
