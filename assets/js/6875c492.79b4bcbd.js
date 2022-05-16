"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8610],{3146:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),m=a(6742),i=a(4927),c=a(1217),o="blogPostTitle_GeHD",g="blogPostDate_fNvV",u=a(6700);var d=function(e){var t,a,d=(t=(0,u.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),p=e.children,h=e.frontMatter,E=e.metadata,v=e.truncated,b=e.isBlogPostPage,f=void 0!==b&&b,N=E.date,_=E.formattedDate,k=E.permalink,Z=E.tags,T=E.readingTime,w=h.author,P=h.title,M=h.image,y=h.keywords,L=h.author_url||h.authorURL,I=h.author_title||h.authorTitle,x=h.author_image_url||h.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:y,image:M}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",l.createElement("header",null,l.createElement(a,{className:(0,r.Z)("margin-bottom--sm",o)},f?P:l.createElement(m.Z,{to:k},P)),l.createElement("div",{className:"margin-vert--md"},l.createElement("time",{dateTime:N,className:g},_,T&&l.createElement(l.Fragment,null," \xb7 ",d(T)))),l.createElement("div",{className:"avatar margin-vert--md"},x&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:L},l.createElement("img",{src:x,alt:w})),l.createElement("div",{className:"avatar__intro"},w&&l.createElement(l.Fragment,null,l.createElement("h4",{className:"avatar__name"},l.createElement(m.Z,{href:L},w)),l.createElement("small",{className:"avatar__subtitle"},I)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:i.Z},p)),(Z.length>0||v)&&l.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&l.createElement("div",{className:"col"},l.createElement("strong",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return l.createElement(m.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&l.createElement("div",{className:"col text--right"},l.createElement(m.Z,{to:E.permalink,"aria-label":"Read more about "+P},l.createElement("strong",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(7294),r=a(6010),n=a(6742),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function u(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},l.createElement("h3",{className:m},t.title),l.createElement("ul",{className:i},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))}))))}},9404:function(e,t,a){a.r(t);var l=a(7294),r=a(9118),n=a(3146),s=a(6742),m=a(5601),i=a(4973),c=a(6700);function o(e){var t,a=e.tagName,r=e.count,n=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.createElement(i.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,g=e.sidebar,u=t.allTagsPath,d=t.name,p=t.count;return l.createElement(r.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement(m.Z,{sidebar:g})),l.createElement("main",{className:"col col--7"},l.createElement("h1",null,l.createElement(o,{count:p,tagName:d})),l.createElement(s.Z,{href:u},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))))))}}}]);