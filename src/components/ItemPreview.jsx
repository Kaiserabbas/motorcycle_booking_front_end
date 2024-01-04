import PropTypes from 'prop-types';

const ItemPreview = ({ url }) => (
  <div className="itemImagePreview flexV">
    {url && (
      <>
        <h3>** Motorcycle Preview **</h3>
        <div className="itemImagePreviewContainer">
          <img
            src={url}
            alt="Could not Load the Motorcycle"
          />
        </div>
      </>
    )}
  </div>
);

ItemPreview.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ItemPreview;
