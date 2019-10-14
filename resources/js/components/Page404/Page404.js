import React, { Component } from 'react';

class Page404 extends Component {
    render() {
        return (
            <div class="wrapper-boxed header-style-header-1">
                <header id="header" class="header-header-1 has-bottom-line" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
                    <div class="inner-header">
                        <div class="container">

                            <div id="logo">
                                <h2>
                                    <a href="http://soledad.pencidesign.com/soledad-software-tips-blog/"><img src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/uploads/sites/102/2019/01/logo.png" alt="Soledad Software Tips Blog" /></a>
                                </h2>
                            </div>



                        </div>
                    </div>

                </header>


                <div class="container page-404">
                    <div class="error-404">
                        <div class="error-image">
                            <img src="http://max.soledad.pencidesign.com/soledad-software-tips-blog/wp-content/themes/soledad/images/404.png" alt="404" />
                        </div>
                        <p class="sub-heading-text-404">OOPS! Page you&#039;re looking for doesn&#039;t exist. Please use search for help</p>
                        <form role="search" method="get" id="searchform" action="http://soledad.pencidesign.com/soledad-software-tips-blog/">
                            <div>
                                <input type="text" class="search-input" placeholder="Type and hit enter..." name="s" id="s" />
                            </div>
                        </form>				<p class="go-back-home"><a href="http://soledad.pencidesign.com/soledad-software-tips-blog/">Back to Home Page</a></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Page404;