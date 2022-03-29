import PropTypes from 'prop-types';
import noImage from './img/no_image.jpg';

function Listing(props) {
  const { items } = props;
  const list = items.map(({ 
    listing_id, 
    url, 
    MainImage, 
    title = 'No title', 
    currency_code = '', 
    price = 0, 
    quantity = 0,
    error_messages
  }) => {
    if (error_messages) {
      return false;
    }

    let priceString, quantityStyle;

    switch (currency_code) {
      case 'USD':
        priceString = '$' + price;
        break;
      case 'EUR':
        priceString = '\u20AC' + price;
        break;
      default:
        priceString = `${price} ${currency_code}`;
    }
    
    quantityStyle = 'item-quantity ';
    if (quantity <= 10) {
      quantityStyle += 'level-low';
    } else if (quantity <= 20) {
      quantityStyle += 'level-medium';     
    } else {
      quantityStyle += 'level-high';       
    }

    return (
      <div className="item" key={listing_id}>
        <div className="item-image">
          <a href={url}>
            <img src={MainImage ? MainImage.url_570xN : noImage} alt="Sorry" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title.length > 50 ? title.slice(0, 50) + '...' : title}</p>
          <p className="item-price">{priceString}</p>
          <p className={quantityStyle}>{quantity + ' left'}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="item-list">
      {list}
    </div>
  );
}

Listing.defaultProps = {
  items: []
}; 

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Listing;