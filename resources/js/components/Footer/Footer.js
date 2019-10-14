import React, { Component, Fragment } from 'react'


class Footer extends Component {

    render() {
        return (
            <Fragment>
                <div className="footer-subscribe">
                    <aside id="mc4wp_form_widget-2" className="widget widget_mc4wp_form_widget"><h4 className="footer-subscribe-title">Subscribe Newsletter</h4>
                        <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-6" method="post" data-id="6" data-name="Form" >
                            <div className="mc4wp-form-fields"><p className="mdes">Subscribe my Newsletter for new blog posts, tips  new photos. Let's stay updated!</p>
                                <p className="mname"><input type="text" name="NAME" placeholder="Name..." /></p>
                                <p className="memail"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Email..." required /></p>
                                <p className="msubmit"><input type="submit" /></p>
                                <div style={{ display: "none" }}><input type="text" name="_mc4wp_honeypot" tabIndex="-1" autoComplete="off" />
                                </div>
                                <input type="hidden" name="_mc4wp_timestamp" />
                            </div>
                            <div className="mc4wp-response"></div>
                        </form>
                    </aside>
                </div>

                <footer id="footer-section" className="penci-footer-social-media penci-lazy" itemScope itemType="http://schema.org/WPFooter">
                    <div className="container">
                        <div className="footer-socials-section penci-social-colored">
                            <ul className="footer-socials">
                                <li><a href="https://www.facebook.com/PenciDesign" rel="nofollow" target="_blank"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                                <li><a href="https://twitter.com/PenciDesign" rel="nofollow" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                                <li><a href="#" rel="nofollow" target="_blank"><i className="fa fa-instagram"></i><span>Instagram</span></a></li>
                                <li><a href="#" rel="nofollow" target="_blank"><i className="fa fa-youtube-play"></i><span>Youtube</span></a></li>
                                <li><a href="#"><i className="fa fa-envelope-o"></i><span>Email</span></a></li>
                                <li><a href="#" rel="nofollow" target="_blank"><i className="fa fa-rss"></i><span>RSS</span></a></li>
                            </ul>
                        </div>
                        <div className="footer-logo-copyright footer-not-logo footer-not-gotop">
                            <div id="footer-copyright">
                                <p>@2019 - PenciDesign. All Right Reserved. Designed and Developed by <a href="http://themeforest.net/item/soledad-multiconcept-blogmagazine-wp-theme/12945398?ref=PenciDesign" target="_blank">PenciDesign</a></p>
                            </div>
                        </div>
                        <div className="penci-go-to-top-floating"><i className="fa fa-angle-up"></i></div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;