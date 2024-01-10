import PropTypes from 'prop-types';
import { useState } from 'react';
import notImageIcon from '../img/notfoundImg.png';

const ItemPreview = ({ url }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  return (
    <div className="itemImagePreview flexV">
      {url && (
        <>
          <h3>** Motorcycle Preview **</h3>
          {imageLoaded && (<h4 style={{ textAlign: 'center' }}>😍🥰</h4>)}

          <div className="itemImagePreviewContainer">
            {imageError && (
              <img
                src={notImageIcon}
                alt="Notfound item"
              />
            )}
            <img
              src={url}
              alt="motorcycle item Preview"
              className={imageError ? 'hide' : 'previewImage'}
              onLoad={() => {
                setImageLoaded(true);
                setImageError(false);
              }}
              onError={() => {
                setImageError(true);
                setImageLoaded(false);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

ItemPreview.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ItemPreview;
