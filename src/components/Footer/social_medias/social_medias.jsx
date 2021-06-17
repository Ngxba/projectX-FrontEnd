import React from 'react';
import { PropTypes } from 'prop-types';
import socialMediaStyle from './social_medias.style';
import data from './data';

const SocialMedias = (props) =>
{
  const { socialData } = props;
  const classes = socialMediaStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes['icons-container']}>
          <div className={classes.inner}>

            {
            socialData.map((element) => (

              // Add classes['icon--youtube'] to fix Youtube icon
              element.alt === 'YouTube'
                ? (
                  <div
                    key={element.alt}
                    className={classes.icon}
                  >
                    <a
                      href={element.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt={element.alt}
                        src={element.imageURL}
                        className={`${classes['icon--image']} ${classes['icon--youtube']}`}
                      />
                    </a>
                  </div>
                )

              // Render other icons
                : (
                  <div
                    key={element.alt}
                    className={classes.icon}
                  >
                    <a
                      href={element.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt={element.alt}
                        src={element.imageURL}
                        className={classes['icon--image']}
                      />
                    </a>
                  </div>
                )
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

SocialMedias.propTypes = {
  socialData: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    alt: PropTypes.string,
    imageURL: PropTypes.string,
  })),
};

SocialMedias.defaultProps = {
  socialData: data,
};

export default SocialMedias;
