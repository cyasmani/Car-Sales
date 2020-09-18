import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  
  return (
    <div className="content">
      <h4>Extra Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(
            item => (
            <AdditionalFeature  addFeature={props.addFeature}key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Wow Nice Whip!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
