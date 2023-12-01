

                if (!window.beaePageJS) {
                    window.beaePageJS = [];
                }
                let jsHandle_8e4zos0nrp = () => {
                    
                        if (document.querySelector('.beae-tvdkvgqb:not([data-beae-bind])')) {
                            (function() {let e=this.$el,t=this.settings_text.type,a=e.querySelector(".beae-mce__text.text-content"),n=this.settings_text.limit?parseInt(this.settings_text.limit):0,s=this.settings_text.view_more_text,o=this.settings_text.content,r="",l=this.settings_text.view_less_text,c=this.settings_text.height;a&&o&&t=="short"&&(r=o.split(" ").filter((m,_)=>_<=n-1).join(" "),r+="...",a.innerHTML=r),setTimeout(()=>{d()},100);function d(){let m=e.querySelector(".beae-element-base-text-view-more");!s||!m||m.addEventListener("click",function(){l&&l.length>0?t=="short"?a.innerHTML.split(" ").length>n?(a.innerHTML=r,m.innerHTML=s):(a.innerHTML=o,m.innerHTML=l):a.style.maxHeight&&a.style.maxHeight!=c?(a.style.maxHeight=c,m.innerHTML=s):(a.style.maxHeight="unset",m.innerHTML=l):(a.innerHTML=o,m.remove())})}}).call({
                                $el: document.querySelector('.beae-tvdkvgqb:not([data-beae-bind])'),
                                settings_text: {"type":"full","content":"<div>Welcome to BuyBigJoe.com (Comfort Research, the “Company”), where we and our affiliates provide information, goods and services to you subject to the following conditions. If you visit, download information or shop at buybigjoe.com (hereinafter referred to as “Site”), you accept these conditions. Please read them carefully.</div>"},
                                id: 'beae-tvdkvgqb',
                                isLive: true
                            });
                            document.querySelector('.beae-tvdkvgqb:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                        if (document.querySelector('.beae-quev9vqi:not([data-beae-bind])')) {
                            (function() {if(!this.isLive)return;let i=window.innerWidth,_=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=i&&(i=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>_(),500)};_()}).call({
                                $el: document.querySelector('.beae-quev9vqi:not([data-beae-bind])'),
                                
                                id: 'beae-quev9vqi',
                                isLive: true
                            });
                            document.querySelector('.beae-quev9vqi:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                        if (document.querySelector('.beae-ns45dhd6:not([data-beae-bind])')) {
                            (function() {if(!this.isLive)return;let i=window.innerWidth,_=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=i&&(i=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>_(),500)};_()}).call({
                                $el: document.querySelector('.beae-ns45dhd6:not([data-beae-bind])'),
                                
                                id: 'beae-ns45dhd6',
                                isLive: true
                            });
                            document.querySelector('.beae-ns45dhd6:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                window.addEventListener("load", () => {let brd = document.createElement("div"),id = Math.random().toString(36).substr(2, 5);brd.setAttribute(`data-${id}`, "");brd.setAttribute("style","position:fixed;bottom: 10px;left:14px;z-index:99999999999999;display:flex;align-items:center;gap:10px");brd.innerHTML = `<a href="https://apps.shopify.com/beae/?utm_source=customersite&utm_medium=page&utm_campaign=traffic" target="_blank" style="box-shadow:rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;background:#fafafa;border-radius: 6px;padding: 3px 8px;text-decoration: none;font-family: system-ui, arial;font-size: 12px;color: #292929;font-weight: 500;display: flex;align-items: center;letter-spacing: 0;white-space: nowrap;">Made in <img src="https://app.beae.com/dist/images/beae.svg" height="14" style="border-radius: 0px;margin-left:3px;height:14px !important" /></a> `;document.body.appendChild(brd);});
                }
                if (window.beaejQuery) {
                    jsHandle_8e4zos0nrp()
                } else {
                    window.beaePageJS.push(jsHandle_8e4zos0nrp)
                }
            
            if(window.location.search.indexOf("beae-token=") < 0)
            {
                document.querySelector("#beae-builder").innerHTML = "<h3>This template for preview purposes only</h3>";
                document.querySelector("body").style.opacity= "0.7";
            }
        