import React from 'react';

export default function ProductListing({ product }) {
  let image = product.images.edges[0].node;
  return (
    <li className="product-card">
      <div className="product-card-frame">
        <img src={image.src} alt={image.altText} />
      </div>
      <div className="product-card-text">
        <p className="product-card-description">
          {product.description.substring(0, 180)}
          {product.description.length > 180 && <span>...</span>}
        </p>
      </div>
      <a href={`../product/${product.handle}`}>
        <button>{product.title}</button>
      </a>
    </li>
  );
}
