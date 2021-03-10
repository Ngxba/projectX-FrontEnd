import React from 'react';
import { PropTypes } from 'prop-types';
import footerNewsStyle from './footer_news.style';

const FooterNews = (props) =>
{
  const { newsData } = props;
  const classes = footerNewsStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes['news--container']}>
          {
            newsData.map((column) => (
              <div className={classes.column}>
                <ul className={classes.ul}>
                  {/* Column title */}
                  <li
                    key={column.title}
                    data-testid="footer-link-header"
                    className={classes['li--heading']}
                  >
                    <a
                      groupheader="true"
                      className={classes['li--a']}
                      href="/retro-jordans"
                    >
                      {column.title}
                    </a>
                  </li>

                  {/* Render column items */}
                  {
                    column.items.map((item) => (
                      <li className={classes.li}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          data-testid="footer-link"
                          className={classes['li--a']}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}

          {/*    <li */}
          {/*      data-testid="footer-link-header" */}
          {/*      className={classes['li--heading']} */}
          {/*    > */}
          {/*      <a */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/retro-jordans" */}
          {/*      > */}
          {/*        Air */}
          {/*        Jordan */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/air-jordan-13" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Jordan 13 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/air-jordan-1" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Air */}
          {/*        Jordan 1 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/air-jordan-4" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Air */}
          {/*        Jordan 4 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/women" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Womens */}
          {/*        Jordans */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/air-jordan-5" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Air */}
          {/*        Jordan 5 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/retro-jordans/air-jordan-1/mid" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Jordan 1 Mid */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}
          {/*    <li data-testid="footer-link-header" className={classes['li--heading']}> */}
          {/*      <a */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas" */}
          {/*      > */}
          {/*        adidas */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/yeezy/350" */}
          {/*      > */}
          {/*        adidas Yeezy Boost 350 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/yeezy/350/v2" */}
          {/*      > */}
          {/*        adidas Yeezy Boost 350 */}
          {/*        V2 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/yeezy/700/v3" */}
          {/*      > */}
          {/*        adidas Yeezy Boost 700 */}
          {/*        V3 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/yeezy/380" */}
          {/*      > */}
          {/*        adidas Yeezy Boost 380 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/yeezy/qntm" */}
          {/*      > */}
          {/*        adidas Yeezy QNTM */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/adidas/nmd" */}
          {/*      > */}
          {/*        adidas NMD */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}
          {/*    <li data-testid="footer-link-header" className={classes['li--heading']}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/news" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Recent Updates */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/news/the-drop-list-03-01-2021/" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        The Drop */}
          {/*        List */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/2021-pokemon-tcg-shining-fates-elite-trainer-box" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Shining */}
          {/*        Fates Pokémon Box */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/news/shining-fates-pokemon-preview/" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Shining Fates */}
          {/*        Pokémon Preview */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/electronics/xbox/series-x" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Xbox */}
          {/*        Series X */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/electronics/playstation/ps5" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        PS5 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/news/the-buyers-guide-adidas-raf-simons/" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        adidas */}
          {/*        Raf Simons Buyer&apos;s Guide */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}
          {/*    <li data-testid="footer-link-header" className={classes['li--heading']}> */}
          {/*      <a */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/new-releases/sneakers" */}
          {/*      > */}
          {/*        Popular */}
          {/*        Releases */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/air-jordan-1-retro-high-white-university-blue-black" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Air */}
          {/*        Jordan 1 University Blue */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/adidas-yeezy-450-cloud-white" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        adidas Yeezy 450 */}
          {/*        Cloud White */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike-sb-dunk-low-supreme-barkroot-brown" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        SB Dunk Low Supreme Barkroot Brown */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike-sb-dunk-low-supreme-hyper-royal" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike SB Dunk Low */}
          {/*        Supreme Hyper Royal */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike-dunk-low-sp-city-market" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike Dunk Low SP */}
          {/*        City Market */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike-dunk-high-prm-dark-russet" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike Dunk High */}
          {/*        PRM Dark Russet */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}
          {/*    <li data-testid="footer-link-header" className={classes['li--heading']}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike Air Max */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/1" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max 1 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/90" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max 90 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/95" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max 95 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/97" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max 97 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/plus" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max Plus */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/nike/air-max/270" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Nike */}
          {/*        Air Max 270 */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
          {/* <div className={classes.column}> */}
          {/*  <ul className={classes.ul}> */}
          {/*    <li data-testid="footer-link-header" className={classes['li--heading']}> */}
          {/*      <a */}
          {/*        groupheader="true" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme" */}
          {/*      > */}
          {/*        Supreme */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme/t-shirts" */}
          {/*      > */}
          {/*        T-Shirts */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme/accessories" */}
          {/*      > */}
          {/*        Accessories */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        href="https://stockx.com/supreme/the-north-face" */}
          {/*        target="_blank" */}
          {/*        rel="noreferrer" */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*      > */}
          {/*        Supreme */}
          {/*        The North Face */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme/bottoms" */}
          {/*      > */}
          {/*        Bottoms */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme/sweatshirts" */}
          {/*      > */}
          {/*        Hoodies */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={classes.li}> */}
          {/*      <a */}
          {/*        data-testid="footer-link" */}
          {/*        className={classes['li--a']} */}
          {/*        href="/supreme/box-logo" */}
          {/*      > */}
          {/*        Box Logo */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

FooterNews.propTypes = {
  newsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.String,
      href: PropTypes.string,
    })),
  })).isRequired,
};

export default FooterNews;
