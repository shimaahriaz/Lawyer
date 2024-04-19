import style from './footer.module.css';

const Footer = () => {

  return (
    <>
      <div className={`${style.footer} py-3`}>
        <p className={`${style['section-footer']} text-white text-center mb-0`}>
       kjas .. AGRI BUSINESS 2023 CREATED BY MAZRAATY. Marketing & Advertising Agency.
        </p>
      </div>
    </>
  );
};

export default Footer;
