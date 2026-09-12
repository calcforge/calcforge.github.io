/* CalcForge Google Analytics 4 */
(function(){
  const MEASUREMENT_ID = 'G-V95GCWF3LD';
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { send_page_view: false });

  function trackPage(data){
    const articleName = data && data.articleName ? data.articleName : document.title;
    const articleSlug = data && data.articleSlug ? data.articleSlug : undefined;
    const category = data && data.category ? data.category : undefined;
    const params = {
      page_title: articleName,
      page_location: window.location.href,
      content_group: data && data.contentGroup ? data.contentGroup : (articleSlug ? 'Calculator Articles' : 'Site Pages')
    };
    if(articleSlug) params.article_slug = articleSlug;
    if(category) params.article_category = category;
    gtag('event', 'page_view', params);
    if(articleSlug){
      gtag('event', 'article_view', {
        article_name: articleName,
        article_slug: articleSlug,
        article_category: category || ''
      });
    }
  }

  window.CalcForgeAnalytics = { trackPage };

  /* Calculator.js sets the final dynamic article title before tracking. */
  if(!document.getElementById('calculatorPage')){
    window.setTimeout(function(){ trackPage({}); }, 100);
  }
})();
