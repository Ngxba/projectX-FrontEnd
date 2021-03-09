import React from 'react';
import socialMediaStyle from './social_medias.style';

const SocialMedias = () =>
{
  const classes = socialMediaStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes['icons-container']}>
          <div className={classes.icon}>
            <a
              href="https://twitter.com/stockx"
              target="_blank"
              rel="noopener noreferrer"
              className={classes['icon--a']}
            >
              <img
                alt="Twitter"
                src="//stockx-assets.imgix.net/svg/icons/twitter-footer.svg?auto=compress,format"
                className={classes['icon--image']}
              />
            </a>
          </div>
          <div className={classes.icon}>
            <a
              href="https://www.facebook.com/stockxdotcom"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Facebook"
                src="//stockx-assets.imgix.net/svg/icons/facebook-footer.svg?auto=compress,format"
                className={classes['icon--image']}
              />
            </a>
          </div>
          <div className={classes.icon}>
            <a
              href="https://instagram.com/stockx/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Instagram"
                src="//stockx-assets.imgix.net/svg/icons/instagram-footer.svg?auto=compress,format"
                className={classes['icon--image']}
              />
            </a>
          </div>
          <div className={classes.icon}>
            <a
              href="https://youtube.com/stockx/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="YouTube"
                src="//stockx-assets.imgix.net/emails/the-outsole/youtube-black.png?auto=compress,format"
                className={`${classes['icon--image']} ${classes['icon--youtube']}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
