function gui_style_do_system_fixes(e){var t=e||document;if(ksystem.isLinux){var n=new top.css_patcher(t),r="Ubuntu, sans, sans-serif";n.inject("html",{"font-family":r}),n.inject("input",{"font-family":r}),n.inject("input[type='button']",{"font-family":r}),n.inject("button",{"font-family":r})}else if(ksystem.isMac){var i=ksystem.getZoomFactor();if(i<.95||i>1.05){var n=new top.css_patcher(t);n.inject("button",{"-webkit-appearance":"square-button"}),n.inject("input[type='button']",{"-webkit-appearance":"square-button"})}}}function gui_style_fix_mac_button_zooming(){function n(e){var n=new top.css_patcher(e);n.inject("button",{"-webkit-appearance":t}),n.inject("input[type='button']",{"-webkit-appearance":t})}var e=ksystem.getZoomFactor(),t=e<.95||e>1.05?"square-button":"button";try{n(top.document);var r,i,s;i=document.getElementsByTagName("iframe");for(r=0;r<i.length;++r)s=i[r],s&&s.contentDocument&&n(s.contentDocument)}catch(o){}}