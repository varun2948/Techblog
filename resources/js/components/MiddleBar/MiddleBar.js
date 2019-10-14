import React, { Component } from 'react';
import axios from 'axios'
import RightSideBar from '../RightSideBar/RightSideBar';
import Footer from '../Footer/Footer';
class MiddleBar extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('/api/posts').then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }
    render() {
        const { posts } = this.state;
        //  posts.map(post_all =>
        //     post_all.map((post, i) =>{console.log(post,"single post"); return }));

        // console.log(posts);
        return (
            <div className="wrapper-boxed header-style-header-1" style={{ paddingLeft: "330px" }}>
                <header id="header" className="header-header-1" itemScope="itemScope" itemType="http://schema.org/WPHeader">
                    <div className="inner-header">
                        <div className="container">

                            <div id="logo">
                                <h1>
                                    <a href="index.html"><img src="images/logo.png" alt="Soledad Software Tips Blog" /></a>
                                </h1>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="featured-area featured-style-13"><div className="penci-owl-carousel penci-owl-featured-area" data-style="style-13" data-auto="true" data-autotime="4000" data-speed="600" data-loop="true">
                 {posts.map(post => (

                        <div className="item">
                        <div className="wrapper-item wrapper-item-classess">
                        {post.map((pos,i)=>{
                         return(
                        <div className={i == 0 ? 'penci-item-mag penci-item-1' : 'penci-item-mag penci-item-0'}>
                            <a className="penci-image-holder owl-lazy" data-src={pos.image} href="microsoft-powerpoint-tips-for-working-with-shapes/index.html" title="Microsoft PowerPoint: Tips for Working with Shapes"></a>
                            <div className="penci-slide-overlay penci-slider6-overlay">
                                <a className="overlay-link" href="microsoft-powerpoint-tips-for-working-with-shapes/index.html"></a>
                                <div className="penci-mag-featured-content">
                                    <div className="feat-text">
                                        <div className="cat featured-cat"><a className="penci-cat-name" href="category/featured/index.html" rel="category tag">Featured</a><a className="penci-cat-name" href="category/tips-tricks/pc/index.html" rel="category tag">PC</a></div>
                                        <h3><a title="Microsoft PowerPoint: Tips for Working with Shapes" href="microsoft-powerpoint-tips-for-working-with-shapes/index.html">{post.title}</a></h3>
                                        <div className="feat-meta">
                                            <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T07:12:05+00:00">January 25, 2019</time></span>
                                            <span className="feat-comments"><a href="microsoft-powerpoint-tips-for-working-with-shapes/index.html#respond ">0 comment</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        );
                     })}
                     </div>
                     </div>
                    ))};
                    {/* <div className="penci-item-mag penci-item-2">
                        <a className="penci-image-holder owl-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/6-480x650.jpg" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html" title="How To Type One-handed Easily on iPhone XS Max"></a>
                        <div className="penci-slide-overlay penci-slider6-overlay">
                            <a className="overlay-link" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html"></a>
                            <div className="penci-mag-featured-content">
                                <div className="feat-text">
                                    <h3><a title="How To Type One-handed Easily on iPhone XS Max" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html">{post.title}</a></h3>
                                    <div className="feat-meta">
                                        <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T07:12:01+00:00">January 25, 2019</time></span>
                                        <span className="feat-comments"><a href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html#respond ">0 comment</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="penci-item-mag penci-item-0">
                        <a className="penci-image-holder owl-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/7-480x650.jpg" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html" title="Top 10 New Features of Digital Wellness on Android Devices"></a>
                        <div className="penci-slide-overlay penci-slider6-overlay">
                            <a className="overlay-link" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html"></a>
                            <div className="penci-mag-featured-content">
                                <div className="feat-text">
                                    <h3><a title="Top 10 New Features of Digital Wellness on Android Devices" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html">Top 10 New Features of Digital Wellness on Android Devices</a></h3>
                                    <div className="feat-meta">
                                        <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T04:50:26+00:00">January 25, 2019</time></span>
                                        <span className="feat-comments"><a href="top-10-new-features-of-digital-wellness-on-android-devices/index.html#respond ">0 comment</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}



                    {/* <div className="item">
                        <div className="wrapper-item wrapper-item-classess">
                        <div className="penci-item-mag penci-item-1">
                            <a className="penci-image-holder owl-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/5-1170x663.jpg" href="microsoft-powerpoint-tips-for-working-with-shapes/index.html" title="Microsoft PowerPoint: Tips for Working with Shapes"></a>
                            <div className="penci-slide-overlay penci-slider6-overlay">
                                <a className="overlay-link" href="microsoft-powerpoint-tips-for-working-with-shapes/index.html"></a>
                                <div className="penci-mag-featured-content">
                                    <div className="feat-text">
                                        <div className="cat featured-cat"><a className="penci-cat-name" href="category/featured/index.html" rel="category tag">Featured</a><a className="penci-cat-name" href="category/tips-tricks/pc/index.html" rel="category tag">PC</a></div>
                                        <h3><a title="Microsoft PowerPoint: Tips for Working with Shapes" href="microsoft-powerpoint-tips-for-working-with-shapes/index.html">Microsoft PowerPoint: Tips for Working with Shapes</a></h3>
                                        <div className="feat-meta">
                                            <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T07:12:05+00:00">January 25, 2019</time></span>
                                            <span className="feat-comments"><a href="microsoft-powerpoint-tips-for-working-with-shapes/index.html#respond ">0 comment</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="penci-item-mag penci-item-2">
                            <a className="penci-image-holder owl-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/6-480x650.jpg" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html" title="How To Type One-handed Easily on iPhone XS Max"></a>
                            <div className="penci-slide-overlay penci-slider6-overlay">
                                <a className="overlay-link" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html"></a>
                                <div className="penci-mag-featured-content">
                                    <div className="feat-text">
                                        <h3><a title="How To Type One-handed Easily on iPhone XS Max" href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html">How To Type One-handed Easily on iPhone XS Max</a></h3>
                                        <div className="feat-meta">
                                            <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T07:12:01+00:00">January 25, 2019</time></span>
                                            <span className="feat-comments"><a href="how-to-type-one-handed-easily-on-iphone-xs-max/index.html#respond ">0 comment</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="penci-item-mag penci-item-0">
                            <a className="penci-image-holder owl-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/7-480x650.jpg" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html" title="Top 10 New Features of Digital Wellness on Android Devices"></a>
                            <div className="penci-slide-overlay penci-slider6-overlay">
                                <a className="overlay-link" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html"></a>
                                <div className="penci-mag-featured-content">
                                    <div className="feat-text">
                                        <h3><a title="Top 10 New Features of Digital Wellness on Android Devices" href="top-10-new-features-of-digital-wellness-on-android-devices/index.html">Top 10 New Features of Digital Wellness on Android Devices</a></h3>
                                        <div className="feat-meta">
                                            <span className="feat-time"><time className="entry-date published" dateTime="2019-01-25T04:50:26+00:00">January 25, 2019</time></span>
                                            <span className="feat-comments"><a href="top-10-new-features-of-digital-wellness-on-android-devices/index.html#respond ">0 comment</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    </div> */}
                </div></div>


                <div className="container penci_sidebar right-sidebar">
                    <div id="main" className="penci-layout-list penci-main-sticky-sidebar">
                        <div className="theiaStickySidebar">




                            <div className="penci-border-arrow penci-homepage-title penci-home-latest-posts style-7 pcalign-left">
                                <h3 className="inner-arrow">Latest Posts</h3>
                            </div>

                            <div className="penci-wrapper-posts-content">

                                <ul className="penci-wrapper-data penci-grid">
                                    <li className="list-post">
                                        <article id="post-56" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/8-585x390.jpg" href="how-to-use-the-most-of-instagram-new-photography-features/index.html" title="How To Use The Most Of Instagram New Photography Features">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/ios/index.html" rel="category tag">iOS</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-use-the-most-of-instagram-new-photography-features/index.html">How To Use The Most Of Instagram New Photography Features</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:29+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:29+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-use-the-most-of-instagram-new-photography-features/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-55" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/9-585x390.jpg" href="how-to-master-microsoft-office-365-office-2019-new-features/index.html" title="How To Master Microsoft Office 365 &#038; Office 2019 New Features">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/pc/index.html" rel="category tag">PC</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-master-microsoft-office-365-office-2019-new-features/index.html">How To Master Microsoft Office 365 &#038; Office 2019 New Features</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:26+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:26+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-master-microsoft-office-365-office-2019-new-features/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-54" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/10-585x390.jpg" href="how-to-make-sure-your-photos-back-up-to-google-photos-automatically/index.html" title="How To Make Sure Your Photos Back Up To Google Photos Automatically">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/android/index.html" rel="category tag">Android</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-make-sure-your-photos-back-up-to-google-photos-automatically/index.html">How To Make Sure Your Photos Back Up To Google Photos Automatically</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:22+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:22+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-make-sure-your-photos-back-up-to-google-photos-automatically/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-53" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/11-585x390.jpg" href="15-easy-google-chrome-tips-keyboard-shortcuts-you-should-know/index.html" title="15+ Easy Google Chrome Tips &#038; Keyboard Shortcuts You Should Know">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/pc/index.html" rel="category tag">PC</a></span>

                                                    <h2 className="entry-title grid-title"><a href="15-easy-google-chrome-tips-keyboard-shortcuts-you-should-know/index.html">15+ Easy Google Chrome Tips &#038; Keyboard Shortcuts You Should Know</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:19+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:19+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="15-easy-google-chrome-tips-keyboard-shortcuts-you-should-know/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-52" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/12-585x390.jpg" href="how-to-shoot-perfect-portraits-with-iphone-xs-ios-12/index.html" title="How To Shoot Perfect Portraits With iPhone XS &#038; iOS 12">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/ios/index.html" rel="category tag">iOS</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-shoot-perfect-portraits-with-iphone-xs-ios-12/index.html">How To Shoot Perfect Portraits With iPhone XS &#038; iOS 12</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:15+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:15+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-shoot-perfect-portraits-with-iphone-xs-ios-12/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-51" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/13-585x390.jpg" href="how-to-try-different-home-screen-with-this-useful-app/index.html" title="How To Try Different Home Screen With This Useful App">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/android/index.html" rel="category tag">Android</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-try-different-home-screen-with-this-useful-app/index.html">How To Try Different Home Screen With This Useful App</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:12+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:12+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-try-different-home-screen-with-this-useful-app/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-50" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/14-585x390.jpg" href="chrome-tips-to-change-fonts-for-better-reading-with-3-easy-tips/index.html" title="Chrome Tips to Change Fonts for Better Reading With 3 Easy Tips">
                                                </a>

                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/pc/index.html" rel="category tag">PC</a></span>

                                                    <h2 className="entry-title grid-title"><a href="chrome-tips-to-change-fonts-for-better-reading-with-3-easy-tips/index.html">Chrome Tips to Change Fonts for Better Reading With 3 Easy Tips</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:04+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:04+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="chrome-tips-to-change-fonts-for-better-reading-with-3-easy-tips/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-49" className="item hentry">
                                            <div className="thumbnail">

                                                <a className="penci-image-holder penci-lazy" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/16-585x390.jpg" href="how-to-use-drag-and-drop-feature-with-ios-12-on-ipad-pro/index.html" title="How To Use Drag and Drop Feature With iOS 12 on iPad Pro">
                                                </a>

                                                <a href="how-to-use-drag-and-drop-feature-with-ios-12-on-ipad-pro/index.html" className="icon-post-format"><i className="fa fa-link"></i></a>
                                            </div>

                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/ios/index.html" rel="category tag">iOS</a></span>

                                                    <h2 className="entry-title grid-title"><a href="how-to-use-drag-and-drop-feature-with-ios-12-on-ipad-pro/index.html">How To Use Drag and Drop Feature With iOS 12 on iPad Pro</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:13:00+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:13:00+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="how-to-use-drag-and-drop-feature-with-ios-12-on-ipad-pro/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li><li className="list-post">
                                        <article id="post-48" className="item hentry">
                                            <div className="thumbnail">
                                                <div className="penci-owl-carousel penci-owl-carousel-slider penci-nav-visible" data-auto="true">


                                                    <figure className="penci-image-holder penci-lazy" alt="Learn How To Use Google Assistant With This Simple &#038; Detailed Guide" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/15-585x390.jpg">
                                                    </figure>



                                                    <figure className="penci-image-holder penci-lazy" alt="Learn How To Use Google Assistant With This Simple &#038; Detailed Guide" data-src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2015/11/41-585x390.jpg">
                                                    </figure>

                                                </div>
                                            </div>


                                            <div className="content-list-right content-list-center">
                                                <div className="header-list-style">
                                                    <span className="cat"><a className="penci-cat-name" href="category/tips-tricks/android/index.html" rel="category tag">Android</a></span>

                                                    <h2 className="entry-title grid-title"><a href="learn-how-to-use-google-assistant-with-this-simple-detailed-guide/index.html">Learn How To Use Google Assistant With This Simple &#038; Detailed Guide</a></h2>
                                                    <div className="penci-hide-tagupdated">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <time className="entry-date published" dateTime="2019-01-25T07:12:53+00:00">January 25, 2019</time>	</div>
                                                    <div className="grid-post-box-meta">
                                                        <span className="author-italic author vcard">by <a className="url fn n" href="author/admin/index.html">Penci</a></span>
                                                        <span><time className="entry-date published" dateTime="2019-01-25T07:12:53+00:00">January 25, 2019</time></span>
                                                    </div>
                                                </div>

                                                <div className="item-content entry-content">
                                                    <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes&hellip;</p>
                                                </div>

                                                <div className="penci-readmore-btn penci-btn-make-button">
                                                    <a className="penci-btn-readmore" href="learn-how-to-use-google-assistant-with-this-simple-detailed-guide/index.html">Read more<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>

                                        </article>
                                    </li>
                                </ul>
                                <div className="penci-pagination align-left"><ul className='page-numbers'>
                                    <li><span aria-current='page' className='page-numbers current'>1</span></li>
                                    <li><a className='page-numbers' href='page/2/index.html'>2</a></li>
                                    <li><a className='page-numbers' href='page/3/index.html'>3</a></li>
                                    <li><a className="next page-numbers" href="page/2/index.html"><i className="fa fa-angle-right"></i></a></li>
                                </ul>
                                </div>
                            </div>




                        </div>
                    </div>


                    <RightSideBar />
                </div>

                <div className="clear-footer"></div>




                <Footer />
            </div>

        )
    }
}
export default MiddleBar;
