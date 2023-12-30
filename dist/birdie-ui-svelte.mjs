import{SvelteComponent as p,append as u,append_styles as h,attr as k,create_slot as _,detach as w,element as z,get_all_dirty_from_scope as y,get_slot_changes as x,init as B,insert as C,listen as D,safe_not_equal as E,set_data as S,space as j,text as A,toggle_class as t,transition_in as F,transition_out as G,update_slot_base as H}from"svelte/internal";import{createEventDispatcher as I}from"svelte";function J(i){h(i,"svelte-2qo8dn",".bi-btn.svelte-2qo8dn,.bi-btn-primary.svelte-2qo8dn::-moz-focus-inner,.bi-btn-secondary.svelte-2qo8dn::-moz-focus-inner,.bi-btn-success.svelte-2qo8dn::-moz-focus-inner,.bi-btn-danger.svelte-2qo8dn::-moz-focus-inner,.bi-btn-warning.svelte-2qo8dn::-moz-focus-inner,.bi-btn-info.svelte-2qo8dn::-moz-focus-inner{border:none}.bi-btn.svelte-2qo8dn,.bi-btn-primary.svelte-2qo8dn,.bi-btn-secondary.svelte-2qo8dn,.bi-btn-success.svelte-2qo8dn,.bi-btn-danger.svelte-2qo8dn,.bi-btn-warning.svelte-2qo8dn,.bi-btn-info.svelte-2qo8dn,.bi-btn-text.svelte-2qo8dn,.bi-btn-link.svelte-2qo8dn{position:relative;display:inline-block;box-sizing:border-box;min-width:64px;padding:8px 12px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;text-decoration:none;font-size:14px;font-weight:500;line-height:16px;outline:none;border:none;cursor:pointer}.bi-btn-text.svelte-2qo8dn,.bi-btn-link.svelte-2qo8dn{padding:2px;background:none}.bi-btn.svelte-2qo8dn:hover,.bi-btn.svelte-2qo8dn:focus{box-shadow:inset 0 0 10px 5px rgba(143, 143, 143, 0.1)}.bi-btn-primary.svelte-2qo8dn:hover,.bi-btn-primary.svelte-2qo8dn:focus,.bi-btn-secondary.svelte-2qo8dn:hover,.bi-btn-secondary.svelte-2qo8dn:focus,.bi-btn-success.svelte-2qo8dn:hover,.bi-btn-success.svelte-2qo8dn:focus,.bi-btn-danger.svelte-2qo8dn:hover,.bi-btn-danger.svelte-2qo8dn:focus,.bi-btn-warning.svelte-2qo8dn:hover,.bi-btn-warning.svelte-2qo8dn:focus,.bi-btn-info.svelte-2qo8dn:hover,.bi-btn-info.svelte-2qo8dn:focus{box-shadow:inset 0 0 10px 5px rgba(80, 80, 80, 0.1)}.bi-btn-link.svelte-2qo8dn:hover,.bi-btn-link.svelte-2qo8dn:focus{color:#0275d8;transition:color 0.2s}.bi-btn.svelte-2qo8dn:disabled,.bi-btn-primary.svelte-2qo8dn:disabled,.bi-btn-secondary.svelte-2qo8dn:disabled,.bi-btn-success.svelte-2qo8dn:disabled,.bi-btn-danger.svelte-2qo8dn:disabled,.bi-btn-warning.svelte-2qo8dn:disabled,.bi-btn-info.svelte-2qo8dn:disabled,.bi-btn-disabled.svelte-2qo8dn{box-shadow:none;cursor:initial;opacity:0.6}.bi-btn.svelte-2qo8dn{color:rgba(0, 0, 0, 0.38);background-color:#f1f1f1}.bi-btn-primary.svelte-2qo8dn{color:#f7f7f7;background-color:#0275d8}.bi-btn-secondary.svelte-2qo8dn{color:#f7f7f7;background-color:#5bc0de}.bi-btn-success.svelte-2qo8dn{color:#f7f7f7;background-color:#5cb85c}.bi-btn-danger.svelte-2qo8dn{color:#f7f7f7;background-color:#d9534f}.bi-btn-warning.svelte-2qo8dn{color:#f7f7f7;background-color:#f0ad4e}.bi-btn-info.svelte-2qo8dn{color:#f7f7f7;background-color:#5bc0de}.bi-btn-text.svelte-2qo8dn{color:#545454}.bi-btn-link.svelte-2qo8dn{color:#0275d8}.bi-btn-small.svelte-2qo8dn{padding:3px 6px;font-size:12px}.bi-btn-large.svelte-2qo8dn{padding:12px 24px;font-size:16px}.bi-btn-full.svelte-2qo8dn{display:block}.bi-btn-round.svelte-2qo8dn{border-radius:4px}.bi-btn-circle.svelte-2qo8dn{width:60px;height:60px;padding:0;border-radius:50%}")}function K(i){let e,d,c,o,r,f,a=i[8].default,s=_(a,i,i[7],null);return{c(){e=z("button"),d=A(i[0]),c=j(),s&&s.c(),k(e,"class","svelte-2qo8dn"),t(e,"bi-btn",i[1]==="default"),t(e,"bi-btn-primary",i[1]==="primary"),t(e,"bi-btn-secondary",i[1]==="secondary"),t(e,"bi-btn-danger",i[1]==="danger"),t(e,"bi-btn-success",i[1]==="success"),t(e,"bi-btn-warning",i[1]==="warning"),t(e,"bi-btn-info",i[1]==="info"),t(e,"bi-btn-text",i[1]==="text"),t(e,"bi-btn-link",i[1]==="link"),t(e,"bi-btn-small",i[2]==="small"),t(e,"bi-btn-large",i[2]==="large"),t(e,"bi-btn-full",i[2]==="full"),t(e,"bi-btn-round",i[3]),t(e,"bi-btn-circle",i[4]),t(e,"bi-btn-disabled",i[5])},m(n,b){C(n,e,b),u(e,d),u(e,c),s&&s.m(e,null),o=!0,r||(f=D(e,"click",i[6]),r=!0)},p(n,[b]){(!o||b&1)&&S(d,n[0]),s&&s.p&&(!o||b&128)&&H(s,a,n,n[7],o?x(a,n[7],b,null):y(n[7]),null),(!o||b&2)&&t(e,"bi-btn",n[1]==="default"),(!o||b&2)&&t(e,"bi-btn-primary",n[1]==="primary"),(!o||b&2)&&t(e,"bi-btn-secondary",n[1]==="secondary"),(!o||b&2)&&t(e,"bi-btn-danger",n[1]==="danger"),(!o||b&2)&&t(e,"bi-btn-success",n[1]==="success"),(!o||b&2)&&t(e,"bi-btn-warning",n[1]==="warning"),(!o||b&2)&&t(e,"bi-btn-info",n[1]==="info"),(!o||b&2)&&t(e,"bi-btn-text",n[1]==="text"),(!o||b&2)&&t(e,"bi-btn-link",n[1]==="link"),(!o||b&4)&&t(e,"bi-btn-small",n[2]==="small"),(!o||b&4)&&t(e,"bi-btn-large",n[2]==="large"),(!o||b&4)&&t(e,"bi-btn-full",n[2]==="full"),(!o||b&8)&&t(e,"bi-btn-round",n[3]),(!o||b&16)&&t(e,"bi-btn-circle",n[4]),(!o||b&32)&&t(e,"bi-btn-disabled",n[5])},i(n){o||(F(s,n),o=!0)},o(n){G(s,n),o=!1},d(n){n&&w(e),s&&s.d(n),r=!1,f()}}}function L(i,e,d){let{$$slots:c={},$$scope:o}=e,{text:r=""}=e,{type:f="default"}=e,{size:a="normal"}=e,{rounded:s=!1}=e,{circle:n=!1}=e,{disabled:b=!1}=e,g=I();function m(l){g("click",l)}return i.$$set=l=>{"text"in l&&d(0,r=l.text),"type"in l&&d(1,f=l.type),"size"in l&&d(2,a=l.size),"rounded"in l&&d(3,s=l.rounded),"circle"in l&&d(4,n=l.circle),"disabled"in l&&d(5,b=l.disabled),"$$scope"in l&&d(7,o=l.$$scope)},[r,f,a,s,n,b,m,o,c]}var v=class extends p{constructor(e){super();B(this,e,L,K,E,{text:0,type:1,size:2,rounded:3,circle:4,disabled:5},J)}},q=v;export{q as BiButton};
