import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
/* my-4 vem do stylo do bootstrap.mesma coisa do padding da vertical.falado na aula 24 */
/*bootstrap grid system <div className="col-sm-6 col-lg-4 col-xl-3"> aula 27 */
