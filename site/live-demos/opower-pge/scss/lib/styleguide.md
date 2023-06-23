<h1 class="page-heading">X-web styleguide</h1>
<div class="intro">
    <p>This styleguide is the documentation for x-web-default-resources, which is the front-end framework that makes X-Web look like X-Web. It's based on <a href="http://foundation.zurb.com/docs/">Foundation 5</a> with a few layers of custom styling and functionality. One of the key features of this framework it's capabilities for theming, because most of the presentational styles are built with Sass variables. Any variable can be customized in a utility theme, with many of the key variables called out in the /src/scss/base/_default-theme.scss file.</p>
    <p>If you're building a widget, refer to this styleguide for help. Start with the sample widget below: it illustrates many best-practices in widget design as defined by the UX team at Opower: it's responsive, split into two columns, includes clear insights (illustrated by an infographic), and ends with a call to action.
    </p>
</div>
<div class="widget westeros" id="westeros">
    <div class="slab">
        <div class="widget-head">
            <h2 class="widget-heading">The rightful ruler of Westeros</h2>
            <form>
                <label for="display-options">Show by:</label>
                <div class="custom-select">
                    <select class="medium" id="display-options">
                        <option selected>House / Allegiance</option>
                        <option>Candidate</option>
                        <option>Chosen god</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="widget-body">
            <div class="westeros-graph">
                <div class="graph-header">
                    <div class="house lannister">
                        <h4>Lannister</h4>
                    </div>
                    <div class="house stark">
                        <h4>Stark</h4>
                    </div>
                    <div class="house Targaryen">
                        <h4>Targaryen</h4>
                    </div>
                </div>
                <div class="graph">
                    <div class="house lannister">
                        <div class="bar">
                            <div class="amount" data-billAmount="50"></div>
                        </div>
                        <div class="graph-label">
                            2,432 votes
                        </div>
                    </div>
                    <div class="house stark">
                        <div class="bar">
                            <div class="amount" data-billAmount="69"></div>
                        </div>
                        <div class="graph-label">
                            10,401 votes
                        </div>
                    </div>
                    <div class="house targaryen">
                        <div class="bar">
                            <div class="amount" data-billAmount="69"></div>
                        </div>
                        <div class="graph-label">
                            14,847 votes
                        </div>
                    </div>
                </div>
            </div>
            <div class="westeros-insights">
                <div class="insight">
                        <h3 class="insight-heading insight-more">The Lannisters have the largest army</h3>
                        <p>Tywinn's troops number more than <strong>15,000</strong> strong.<br>
                                Most likely reason: <a href="#">Lannisters pay their debts</a>.</p>
                        <p class="view-more"><a href="#" data-reveal-id="modal1">View details</a></p>
                </div>
                <div class="insight">
                        <h3 class="insight-heading insight-less">Khaleesi's forces are accompanied by dragons</h3>
                        <p>The mother of dragons' slave army is <strong>12,000</strong> strong and growing, and dragons can breath fire.</p>
                        <p class="view-more"><a class="viewMore" href="#" data-reveal-id="modal2">View details</a></p>
                </div>
                <aside>
                        <p class="additional-info">It is unknown whether House Lannister has developed effective defense against dragons.</p>
                </aside>
                <div class="view-bill">
                    <a class="button secondary call-to-action" href="#">Declare War</a>
                </div>
            </div>
        </div>
    </div>
</div>