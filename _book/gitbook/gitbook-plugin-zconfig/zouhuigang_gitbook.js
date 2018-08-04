require(["gitbook", "jQuery"], function(gitbook, $) {

    var root = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
    gitbook.events.bind("start", function(e, config){
        console.info("gitbook-plugin-zconfig page start");
        var cfg = config['zconfig'];
        if(cfg.tongji_types=='baidu' && cfg.tongji_token){
            window._hmt = window._hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?" + cfg.tongji_token;
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            console.info("生成百度统计js成功...");
        }
        gitbookVersion(cfg);
        
    });
    
    function gitbookVersion(cfg){
        if(cfg.gitbook_show='open'){
            $('.gitbook-link').attr("href",cfg.gitbook_url);
            $('.gitbook-link').text(cfg.gitbook_name); 
        }else if(cfg.gitbook_show='close'){
            $('.gitbook-link').hide(); 
        }
       
    }

    gitbook.events.bind("page.change", function(e){
        console.info("gitbook-plugin-ztongji page change");
        var path = window.location.pathname+window.location.search
        _hmt.push(['_trackPageview', path]);
    });

});
