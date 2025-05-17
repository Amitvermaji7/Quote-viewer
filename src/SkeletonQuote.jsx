function SkeletonQuote() {
   return (
    <div className="skeleton-overlay">
      <div className="skeleton-box">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
      </div>
    </div>
  );
}

// https://dummyjson.com/quotes/random
export default SkeletonQuote;
