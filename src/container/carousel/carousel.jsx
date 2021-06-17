import React from 'react';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import carouselData from './data';
import carouselStyle from './carousel.style';

const CustomCarousel = (props) =>
{
  const { data } = props;
  const classes = carouselStyle();

  return (
    <div className={classes.root}>
      <div
        className={classes['slick-list']}
        dir="ltr"
      >
        {/* TODO Fixing indicator icon button (using fontSize = '12px') */}
        <Carousel
          animation="slide"
          navButtonsAlwaysInvisible
          indicatorIconButtonProps={
            {
              style: {
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                marginTop: '0',
                marginBottom: '0',
                marginLeft: '0.25rem',
                marginRight: '0.25rem',
                background: '#000000',
              },
            }
          }
        >
          {
            data.map((item) => (
              <div
                key={item.alt}
                className={classes['slick-track']}
              >
                <div
                  data-index={0}
                  className={classes['slick-slide']}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div
                    data-index="0"
                    className={classes['slick-slide']}
                    tabIndex="-1"
                    aria-hidden="false"
                  >
                    <div aria-label={item.alt}>
                      <div
                        data-testid="site-banner"
                        className={classes['banner-container']}
                        style={
                             {
                               background: item.backgroundColor,
                             }
                           }
                      >
                        <div className={classes['banner-inner-container']}>

                          <div className={`${classes.tile} ${classes['tile-left']}`} />

                          <div className={classes['image-container']}>
                            <div data-inview="true" className={classes['banner-image']}>
                              <img
                                src={item.imageLink}
                                alt={item.alt}
                              />
                            </div>
                          </div>

                          <div className={`${classes.tile} ${classes['tile-right']}`} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};

CustomCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    imageLink: PropTypes.string,
    productLink: PropTypes.string,
    backgroundColor: PropTypes.string,
  })),
};

CustomCarousel.defaultProps = {
  data: carouselData,
};

export default CustomCarousel;
