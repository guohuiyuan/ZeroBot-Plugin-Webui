var k=Object.defineProperty;var C=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(e,s,n)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,y=(e,s)=>{for(var n in s||(s={}))B.call(s,n)&&v(e,n,s[n]);if(C)for(var n of C(s))S.call(s,n)&&v(e,n,s[n]);return e};var w=(e,s,n)=>(v(e,typeof s!="symbol"?s+"":s,n),n);var b=(e,s,n)=>new Promise((r,c)=>{var p=t=>{try{a(n.next(t))}catch(i){c(i)}},f=t=>{try{a(n.throw(t))}catch(i){c(i)}},a=t=>t.done?r(t.value):Promise.resolve(t.value).then(p,f);a((n=n.apply(e,s)).next())});import{a as useDesign,f as useUserStore,a9 as getBotList,aa as sendMsg,ab as wsUrl,ac as Api,ad as getGroupList,ae as getFriendList,w as withInstall}from"./index.42731010.js";import{A as defineComponent,r as ref,j as computed,B as openBlock,D as createElementBlock,w as createVNode,a5 as withCtx,aa as Fragment,ao as renderList,a1 as createBlock,K as normalizeClass,u as unref,bn as Avatar,ap as Popover,v as message,m as lib,P as reactive,a_ as Divider,bo as FormItem,bp as Select,an as Input,aS as Button,a4 as mergeProps,aY as Form,ad as createTextVNode,ai as onUnmounted,H as createBaseVNode,aw as SearchOutlined,X as normalizeStyle,J as toDisplayString,bq as Tag,br as Image,bs as Table,bt as commonjsGlobal,bu as getDefaultExportFromCjs,al as watchEffect,bv as SelectOptGroup,bw as SelectOption}from"./vendor.0a46d435.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */var BotSwitch_vue_vue_type_style_index_0_lang="";const _sfc_main$4=defineComponent({setup(e){const{prefixCls:s}=useDesign("botSwitch"),n=ref({id:1,pic:"http://q4.qlogo.cn/g?b=qq&nk="+1+"&s=640"}),r=useUserStore(),c=ref([]),p=computed(()=>r.getQQ),f=()=>b(this,null,function*(){c.value=[];let t=yield getBotList();!p.value&&t.length>0&&r.setQQ(t[0]);for(let i of t)c.value.push({id:i,pic:"http://q4.qlogo.cn/g?b=qq&nk="+i+"&s=640"});n.value={id:p.value,pic:"http://q4.qlogo.cn/g?b=qq&nk="+p.value+"&s=640"}}),a=t=>{r.setQQ(t.id),message.info("\u5207\u6362\u5230QQ: "+t.id),n.value=t,console.log(n)};return f(),(t,i)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Popover),{title:"\u70B9\u51FB\u4E0B\u5217\u5934\u50CF, \u5207\u6362QQ\u53F7",trigger:"click"},{content:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(c.value,u=>(openBlock(),createBlock(unref(Avatar),{key:u.id,src:u.pic,onClick:o=>a(u),class:normalizeClass(`${unref(s)}__avatar`)},null,8,["src","onClick","class"]))),128))]),default:withCtx(()=>[createVNode(unref(Avatar),{src:n.value.pic},null,8,["src"])]),_:1})]))}});var elements={};Object.defineProperty(elements,"__esModule",{value:!0});var segment=elements.segment=void 0;segment=elements.segment={text(e){return{type:"text",text:e}},face(e){return{type:"face",id:e}},sface(e,s){return{type:"sface",id:e,text:s}},bface(e,s){return{type:"bface",file:e,text:s}},rps(e){return{type:"rps",id:e}},dice(e){return{type:"dice",id:e}},at(e,s,n){return typeof e=="number"||e==="all"?{type:"at",qq:e,text:s,dummy:n}:{type:"at",qq:0,id:String(e),text:s,dummy:n}},image(e,s,n,r){return{type:"image",file:e,cache:s,timeout:n,headers:r}},flash(e,s,n,r){return{type:"flash",file:e,cache:s,timeout:n,headers:r}},record(e){return{type:"record",file:e}},video(e){return{type:"video",file:e}},json(e){return{type:"json",data:e}},xml(e,s){return{type:"xml",data:e,id:s}},mirai(e){return{type:"mirai",data:e}},share(e,s,n,r){return{type:"share",url:e,title:s,image:n,content:r}},location(e,s,n,r){return{type:"location",lat:e,lng:s,address:n,id:r}},poke(e){return{type:"poke",id:e}},fromCqcode(e){const s=[],n=e.matchAll(/\[CQ:[^\]]+\]/g);let r=0;for(let c of n){const p=e.slice(r,c.index).replace(/&#91;|&#93;|&amp;/g,unescapeCQ);p&&s.push({type:"text",text:p});const f=c[0];let a=f.replace("[CQ:","type=");a=a.substr(0,a.length-1),s.push(qs(a)),r=c.index+f.length}if(r<e.length){const c=e.slice(r).replace(/&#91;|&#93;|&amp;/g,unescapeCQ);c&&s.push({type:"text",text:c})}return s}};function unescapeCQ(e){return e==="&#91;"?"[":e==="&#93;"?"]":e==="&amp;"?"&":""}function unescapeCQInside(e){return e==="&#44;"?",":e==="&#91;"?"[":e==="&#93;"?"]":e==="&amp;"?"&":""}function qs(e,s=",",n="="){const r={},c=e.split(s);for(let p of c){const f=p.indexOf(n);f!==-1&&(r[p.substring(0,f)]=p.substr(f+1).replace(/&#44;|&#91;|&#93;|&amp;/g,unescapeCQInside))}for(let p in r)try{p!=="text"&&(r[p]=JSON.parse(r[p]))}catch(f){}return r}function genCqcode(e){let s="";for(const n of e){if(n.type==="text"){s+=n.text;continue}const r=y({},n);delete r.type;const c=lib.stringify(r,{delimiter:",",indices:!1,encoder:p=>{const f=p.toString();return f.replace(/&|,|\[|\]/g,escapeCQInside),f}});s+="[CQ:"+n.type+(c?",":"")+c+"]"}return s}function escapeCQInside(e){return e==="&"?"&amp;":e===","?"&#44;":e==="["?"&#91;":e==="]"?"&#93;":""}var MessageSendBox_vue_vue_type_style_index_0_lang="";const _hoisted_1$2=createTextVNode("\u53D1\u9001\u6D88\u606F"),_hoisted_2$1=createTextVNode("\u53D1\u9001"),_hoisted_3$1=createTextVNode("\u91CD\u7F6E"),_sfc_main$3=defineComponent({setup(e){const{prefixCls:s}=useDesign("messageSendBox"),n=reactive({gidList:[],msg:"",cqInput:"",cqOptions:[]}),r=computed(()=>({labelCol:{span:4},wrapperCol:{span:14}})),c=()=>{n.cqOptions=[],n.cqOptions.push({value:genCqcode([segment.face(0)]),label:"face QQ\u8868\u60C5(id=0~324)",key:"face"}),n.cqOptions.push({value:genCqcode([segment.rps(1)]),label:"rps \u731C\u62F3\u9B54\u6CD5\u8868\u60C5(id=1~3)",key:"rps"}),n.cqOptions.push({value:genCqcode([segment.at("all","\u53C2\u65701")]),label:"at @\u67D0\u4EBA",key:"at"}),n.cqOptions.push({value:genCqcode([segment.image("http://q4.qlogo.cn/g?b=qq&nk=1&s=640",!1)]),label:"image \u56FE\u7247",key:"image"}),n.cqOptions.push({value:genCqcode([segment.record("https://mm.cqu.cc/share/zhifubaodaozhang/mp3/1.mp3")]),label:"record \u8BED\u97F3",key:"record"}),n.cqOptions.push({value:genCqcode([segment.video("http://q4.qlogo.cn/g?b=qq&nk=1&s=640")]),label:"video \u77ED\u89C6\u9891",key:"video"}),n.cqOptions.push({value:genCqcode([segment.poke(123456)]),label:"poke \u6233\u4E00\u6233",key:"poke"}),n.cqOptions.push({value:genCqcode([segment.share("http://q4.qlogo.cn/g?b=qq&nk=1&s=640","\u6807\u9898")]),label:"share \u94FE\u63A5\u5206\u4EAB",key:"share"}),n.cqOptions.push({value:"[CQ:cardimage,file=https://i.pixiv.re/img-master/img/2020/03/25/00/00/08/80334602_p0_master1200.jpg]",label:"cardimage \u88C5\u903C\u5927\u56FE",key:"cardimage"}),n.cqOptions.push({value:"[CQ:tts,text=\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u6D88\u606F]",label:"tts \u6587\u672C\u8F6C\u8BED\u97F3",key:"tts"}),n.cqOptions.push({value:"[CQ:reply,id=123456]",label:"reply \u56DE\u590D",key:"reply"}),n.cqOptions.push({value:"[CQ:music,type=163,id=28949129]",label:"music \u97F3\u4E50\u5206\u4EAB",key:"music"}),n.cqOptions.push({value:"[CQ:forward,id=123456]",label:"forward \u5408\u5E76\u8F6C\u53D1",key:"forward"})},p=()=>{n.msg+=n.cqInput},f=o=>{n.gidList=o},a=useUserStore(),t=computed(()=>a.getQQ),i=()=>b(this,null,function*(){yield sendMsg({selfId:t.value,gidList:n.gidList,message:n.msg})}),u=()=>{n.msg=""};return c(),(o,l)=>(openBlock(),createElementBlock("div",{class:normalizeClass(`${unref(s)}__sendbox`)},[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1$2]),_:1}),createVNode(unref(Form),mergeProps({layout:"horizontal"},unref(r),{model:unref(n)}),{default:withCtx(()=>[createVNode(unref(MessageSendSelect),{onChangeGroupIdList:f}),createVNode(unref(FormItem),{label:"\u793A\u4F8BCQ\u7801"},{default:withCtx(()=>[createVNode(unref(Select),{value:unref(n).cqInput,"onUpdate:value":l[0]||(l[0]=d=>unref(n).cqInput=d),"show-search":"",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u793A\u4F8BCQ\u7801",style:{width:"200px"},options:unref(n).cqOptions,onChange:p},null,8,["value","options"])]),_:1}),createVNode(unref(FormItem),{label:"\u6D88\u606F"},{default:withCtx(()=>[createVNode(unref(Input).TextArea,{value:unref(n).msg,"onUpdate:value":l[1]||(l[1]=d=>unref(n).msg=d),placeholder:"\u8BF7\u8F93\u5165\u6D88\u606F",style:{width:"400px"},rows:4},null,8,["value"])]),_:1}),createVNode(unref(FormItem),{"wrapper-col":{span:14,offset:4}},{default:withCtx(()=>[createVNode(unref(Button),{type:"primary",onClick:i,class:normalizeClass(`${unref(s)}__action`)},{default:withCtx(()=>[_hoisted_2$1]),_:1},8,["class"]),createVNode(unref(Button),{type:"primary",onClick:u,class:normalizeClass(`${unref(s)}__action`)},{default:withCtx(()=>[_hoisted_3$1]),_:1},8,["class"])]),_:1})]),_:1},16,["model"])],2))}});class Websocket1{constructor(s){w(this,"socket");this.socket=new WebSocket(s)}onMessage(s){this.socket.onmessage=s}onOpen(s){this.socket.onopen=s}onError(s){this.socket.onerror=s}onClose(s){this.socket.onclose=s}send(s){this.socket.send(JSON.stringify(s))}}const _hoisted_1$1=createTextVNode("\u6D88\u606F"),_hoisted_2={style:{padding:"8px"}},_hoisted_3=createTextVNode(" Search "),_hoisted_4=createTextVNode(" Reset "),_hoisted_5={key:0},_hoisted_6=createTextVNode("\u7FA4\u804A"),_hoisted_7={key:1},_hoisted_8=createTextVNode("\u79C1\u804A"),_hoisted_9={key:0},_hoisted_10={key:1},_hoisted_11={key:2},_hoisted_12={key:3},_sfc_main$2=defineComponent({setup(__props){const searchInput=ref(),columns=[{title:"\u65F6\u95F4",dataIndex:"time",key:"time"},{title:"\u6D88\u606Fid",dataIndex:"message_id",key:"message_id",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon"},onFilter:(e,s)=>s.message_id.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u7FA4\u540D",dataIndex:"group_name",key:"group_name",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"group_name"},onFilter:(e,s)=>s.group_name.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6635\u79F0",dataIndex:"nickname",key:"nickname",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"nickname"},onFilter:(e,s)=>s.nickname.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6D88\u606F\u7C7B\u578B",dataIndex:"message_type",key:"message_type",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"message_type"},onFilter:(e,s)=>s.message_type.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{searchInput.value.focus()},100)}},{title:"\u6D88\u606F\u5185\u5BB9",dataIndex:"raw_message",key:"raw_message",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"raw_message"},onFilter:(e,s)=>s.raw_message.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{searchInput.value.focus()},100)}}],msgTableData=ref([]),state=reactive({searchText:"",searchedColumn:""}),handleSearch=(e,s,n)=>{s(),state.searchText=e[0],state.searchedColumn=n},handleReset=e=>{e(),state.searchText=""},ws=new Websocket1(wsUrl+Api.data);return ws.onOpen(e=>{console.log(e),console.log("msg ws\u8FDE\u63A5\u5DF2\u6253\u5F00")}),ws.onMessage(event=>{let myDate=new Date;console.log(event.data);let result=eval("("+event.data+")");result.time=myDate.toLocaleString(),result.key=String(result.message_id),msgTableData.value.unshift(result),msgTableData.value.length>1e3&&msgTableData.value.pop()}),ws.onClose(()=>{console.log("ws\u8FDE\u63A5\u5DF2\u5173\u95ED")}),ws.onError(e=>{console.log("ws\u51FA\u73B0\u9519\u8BEF"+e)}),onUnmounted(()=>{ws.socket.close()}),(e,s)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1$1]),_:1}),createVNode(unref(Table),{columns,"data-source":msgTableData.value},{filterDropdown:withCtx(({setSelectedKeys:n,selectedKeys:r,confirm:c,clearFilters:p,column:f})=>[createBaseVNode("div",_hoisted_2,[createVNode(unref(Input),{ref:(a,t)=>{t.searchInput=a,searchInput.value=a},placeholder:`\u641C\u7D22 ${f.title}`,value:r[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:a=>n(a.target.value?[a.target.value]:[]),onPressEnter:a=>handleSearch(r,c,f.dataIndex)},null,8,["placeholder","value","onChange","onPressEnter"]),createVNode(unref(Button),{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:a=>handleSearch(r,c,f.dataIndex)},{icon:withCtx(()=>[createVNode(unref(SearchOutlined))]),default:withCtx(()=>[_hoisted_3]),_:2},1032,["onClick"]),createVNode(unref(Button),{size:"small",style:{width:"90px"},onClick:a=>handleReset(p)},{default:withCtx(()=>[_hoisted_4]),_:2},1032,["onClick"])])]),filterIcon:withCtx(n=>[createVNode(unref(SearchOutlined),{style:normalizeStyle({color:n?"#108ee9":void 0})},null,8,["style"])]),nickname:withCtx(({record:n})=>[createBaseVNode("span",null,toDisplayString(n.nickname+" ("+n.user_id+")"),1)]),group_name:withCtx(({record:n})=>[createBaseVNode("span",null,toDisplayString(n.group_name+" ("+n.group_id+")"),1)]),message_type:withCtx(({text:n})=>[n==="group"?(openBlock(),createElementBlock("span",_hoisted_5,[createVNode(unref(Tag),{color:"green"},{default:withCtx(()=>[_hoisted_6]),_:1})])):(openBlock(),createElementBlock("span",_hoisted_7,[createVNode(unref(Tag),{color:"red"},{default:withCtx(()=>[_hoisted_8]),_:1})]))]),raw_message:withCtx(({text:n})=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(segment).fromCqcode(n),(r,c)=>(openBlock(),createElementBlock("li",{key:c},[r.type==="text"?(openBlock(),createElementBlock("div",_hoisted_9,toDisplayString(r.text),1)):r.type==="image"?(openBlock(),createElementBlock("div",_hoisted_10,[createVNode(unref(Image),{width:200,src:r.url},null,8,["src"])])):r.type==="face"?(openBlock(),createElementBlock("div",_hoisted_11,[createVNode(unref(Image),{width:50,src:"https://blog.imashimaro.com/emoji/qq/"+r.id+"@2x.gif"},null,8,["src"])])):(openBlock(),createElementBlock("div",_hoisted_12,toDisplayString(r),1))]))),128))]),_:1},8,["data-source"])]))}});var ansi_up={};(function(e){(function(s,n){if(typeof e.nodeName!="string")n(e);else{var r={};n(r),s.AnsiUp=r.default}})(commonjsGlobal,function(s){var n=this&&this.__makeTemplateObject||function(a,t){return Object.defineProperty?Object.defineProperty(a,"raw",{value:t}):a.raw=t,a},r;(function(a){a[a.EOS=0]="EOS",a[a.Text=1]="Text",a[a.Incomplete=2]="Incomplete",a[a.ESC=3]="ESC",a[a.Unknown=4]="Unknown",a[a.SGR=5]="SGR",a[a.OSCURL=6]="OSCURL"})(r||(r={}));var c=function(){function a(){this.VERSION="5.1.0",this.setup_palettes(),this._use_classes=!1,this.bold=!1,this.italic=!1,this.underline=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(a.prototype,"use_classes",{get:function(){return this._use_classes},set:function(t){this._use_classes=t},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(t){this._url_whitelist=t},enumerable:!1,configurable:!0}),a.prototype.setup_palettes=function(){var t=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach(function(m){m.forEach(function(x){t.palette_256.push(x)})});for(var i=[0,95,135,175,215,255],u=0;u<6;++u)for(var o=0;o<6;++o)for(var l=0;l<6;++l){var d={rgb:[i[u],i[o],i[l]],class_name:"truecolor"};this.palette_256.push(d)}for(var h=8,g=0;g<24;++g,h+=10){var _={rgb:[h,h,h],class_name:"truecolor"};this.palette_256.push(_)}},a.prototype.escape_txt_for_html=function(t){return t.replace(/[&<>"']/gm,function(i){if(i==="&")return"&amp;";if(i==="<")return"&lt;";if(i===">")return"&gt;";if(i==='"')return"&quot;";if(i==="'")return"&#x27;"})},a.prototype.append_buffer=function(t){var i=this._buffer+t;this._buffer=i},a.prototype.get_next_packet=function(){var t={kind:r.EOS,text:"",url:""},i=this._buffer.length;if(i==0)return t;var u=this._buffer.indexOf("");if(u==-1)return t.kind=r.Text,t.text=this._buffer,this._buffer="",t;if(u>0)return t.kind=r.Text,t.text=this._buffer.slice(0,u),this._buffer=this._buffer.slice(u),t;if(u==0){if(i==1)return t.kind=r.Incomplete,t;var o=this._buffer.charAt(1);if(o!="["&&o!="]")return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;if(o=="["){this._csi_regex||(this._csi_regex=p(n([`
                        ^                           # beginning of line
                                                    #
                                                    # First attempt
                        (?:                         # legal sequence
                          [                      # CSI
                          ([<-?]?)              # private-mode char
                          ([d;]*)                    # any digits or semicolons
                          ([ -/]?               # an intermediate modifier
                          [@-~])                # the command
                        )
                        |                           # alternate (second attempt)
                        (?:                         # illegal sequence
                          [                      # CSI
                          [ -~]*                # anything legal
                          ([\0-:])              # anything illegal
                        )
                    `],[`
                        ^                           # beginning of line
                                                    #
                                                    # First attempt
                        (?:                         # legal sequence
                          \\x1b\\[                      # CSI
                          ([\\x3c-\\x3f]?)              # private-mode char
                          ([\\d;]*)                    # any digits or semicolons
                          ([\\x20-\\x2f]?               # an intermediate modifier
                          [\\x40-\\x7e])                # the command
                        )
                        |                           # alternate (second attempt)
                        (?:                         # illegal sequence
                          \\x1b\\[                      # CSI
                          [\\x20-\\x7e]*                # anything legal
                          ([\\x00-\\x1f:])              # anything illegal
                        )
                    `])));var l=this._buffer.match(this._csi_regex);if(l===null)return t.kind=r.Incomplete,t;if(l[4])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;l[1]!=""||l[3]!="m"?t.kind=r.Unknown:t.kind=r.SGR,t.text=l[2];var d=l[0].length;return this._buffer=this._buffer.slice(d),t}if(o=="]"){if(i<4)return t.kind=r.Incomplete,t;if(this._buffer.charAt(2)!="8"||this._buffer.charAt(3)!=";")return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;this._osc_st||(this._osc_st=f(n([`
                        (?:                         # legal sequence
                          (\\)                    # ESC                           |                           # alternate
                          (\x07)                      # BEL (what xterm did)
                        )
                        |                           # alternate (second attempt)
                        (                           # illegal sequence
                          [\0-]                 # anything illegal
                          |                           # alternate
                          [\b-]                 # anything illegal
                          |                           # alternate
                          [-]                 # anything illegal
                        )
                    `],[`
                        (?:                         # legal sequence
                          (\\x1b\\\\)                    # ESC \\
                          |                           # alternate
                          (\\x07)                      # BEL (what xterm did)
                        )
                        |                           # alternate (second attempt)
                        (                           # illegal sequence
                          [\\x00-\\x06]                 # anything illegal
                          |                           # alternate
                          [\\x08-\\x1a]                 # anything illegal
                          |                           # alternate
                          [\\x1c-\\x1f]                 # anything illegal
                        )
                    `]))),this._osc_st.lastIndex=0;{var h=this._osc_st.exec(this._buffer);if(h===null)return t.kind=r.Incomplete,t;if(h[3])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t}{var g=this._osc_st.exec(this._buffer);if(g===null)return t.kind=r.Incomplete,t;if(g[3])return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t}this._osc_regex||(this._osc_regex=p(n([`
                        ^                           # beginning of line
                                                    #
                        ]8;                    # OSC Hyperlink
                        [ -:<-~]*       # params (excluding ;)
                        ;                           # end of params
                        ([!-~]{0,512})        # URL capture
                        (?:                         # ST
                          (?:\\)                  # ESC                           |                           # alternate
                          (?:\x07)                    # BEL (what xterm did)
                        )
                        ([ -~]+)              # TEXT capture
                        ]8;;                   # OSC Hyperlink End
                        (?:                         # ST
                          (?:\\)                  # ESC                           |                           # alternate
                          (?:\x07)                    # BEL (what xterm did)
                        )
                    `],[`
                        ^                           # beginning of line
                                                    #
                        \\x1b\\]8;                    # OSC Hyperlink
                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)
                        ;                           # end of params
                        ([\\x21-\\x7e]{0,512})        # URL capture
                        (?:                         # ST
                          (?:\\x1b\\\\)                  # ESC \\
                          |                           # alternate
                          (?:\\x07)                    # BEL (what xterm did)
                        )
                        ([\\x20-\\x7e]+)              # TEXT capture
                        \\x1b\\]8;;                   # OSC Hyperlink End
                        (?:                         # ST
                          (?:\\x1b\\\\)                  # ESC \\
                          |                           # alternate
                          (?:\\x07)                    # BEL (what xterm did)
                        )
                    `])));var l=this._buffer.match(this._osc_regex);if(l===null)return t.kind=r.ESC,t.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),t;t.kind=r.OSCURL,t.url=l[1],t.text=l[2];var d=l[0].length;return this._buffer=this._buffer.slice(d),t}}},a.prototype.ansi_to_html=function(t){this.append_buffer(t);for(var i=[];;){var u=this.get_next_packet();if(u.kind==r.EOS||u.kind==r.Incomplete)break;u.kind==r.ESC||u.kind==r.Unknown||(u.kind==r.Text?i.push(this.transform_to_html(this.with_state(u))):u.kind==r.SGR?this.process_ansi(u):u.kind==r.OSCURL&&i.push(this.process_hyperlink(u)))}return i.join("")},a.prototype.with_state=function(t){return{bold:this.bold,italic:this.italic,underline:this.underline,fg:this.fg,bg:this.bg,text:t.text}},a.prototype.process_ansi=function(t){for(var i=t.text.split(";");i.length>0;){var u=i.shift(),o=parseInt(u,10);if(isNaN(o)||o===0)this.fg=this.bg=null,this.bold=!1,this.italic=!1,this.underline=!1;else if(o===1)this.bold=!0;else if(o===3)this.italic=!0;else if(o===4)this.underline=!0;else if(o===22)this.bold=!1;else if(o===23)this.italic=!1;else if(o===24)this.underline=!1;else if(o===39)this.fg=null;else if(o===49)this.bg=null;else if(o>=30&&o<38)this.fg=this.ansi_colors[0][o-30];else if(o>=40&&o<48)this.bg=this.ansi_colors[0][o-40];else if(o>=90&&o<98)this.fg=this.ansi_colors[1][o-90];else if(o>=100&&o<108)this.bg=this.ansi_colors[1][o-100];else if((o===38||o===48)&&i.length>0){var l=o===38,d=i.shift();if(d==="5"&&i.length>0){var h=parseInt(i.shift(),10);h>=0&&h<=255&&(l?this.fg=this.palette_256[h]:this.bg=this.palette_256[h])}if(d==="2"&&i.length>2){var g=parseInt(i.shift(),10),_=parseInt(i.shift(),10),m=parseInt(i.shift(),10);if(g>=0&&g<=255&&_>=0&&_<=255&&m>=0&&m<=255){var x={rgb:[g,_,m],class_name:"truecolor"};l?this.fg=x:this.bg=x}}}}},a.prototype.transform_to_html=function(t){var i=t.text;if(i.length===0||(i=this.escape_txt_for_html(i),!t.bold&&!t.italic&&!t.underline&&t.fg===null&&t.bg===null))return i;var u=[],o=[],l=t.fg,d=t.bg;t.bold&&u.push("font-weight:bold"),t.italic&&u.push("font-style:italic"),t.underline&&u.push("text-decoration:underline"),this._use_classes?(l&&(l.class_name!=="truecolor"?o.push(l.class_name+"-fg"):u.push("color:rgb("+l.rgb.join(",")+")")),d&&(d.class_name!=="truecolor"?o.push(d.class_name+"-bg"):u.push("background-color:rgb("+d.rgb.join(",")+")"))):(l&&u.push("color:rgb("+l.rgb.join(",")+")"),d&&u.push("background-color:rgb("+d.rgb+")"));var h="",g="";return o.length&&(h=' class="'+o.join(" ")+'"'),u.length&&(g=' style="'+u.join(";")+'"'),"<span"+g+h+">"+i+"</span>"},a.prototype.process_hyperlink=function(t){var i=t.url.split(":");if(i.length<1||!this._url_whitelist[i[0]])return"";var u='<a href="'+this.escape_txt_for_html(t.url)+'">'+this.escape_txt_for_html(t.text)+"</a>";return u},a}();function p(a){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var u=a.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,l=u.replace(o,"");return new RegExp(l)}function f(a){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var u=a.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,l=u.replace(o,"");return new RegExp(l,"g")}Object.defineProperty(s,"__esModule",{value:!0}),s.default=c})})(ansi_up);var AnsiUp=getDefaultExportFromCjs(ansi_up);function removeHtmlTab(e){return e.replace(/<[^<>]+?>/g,"")}function escape2Html(e){const s={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return e.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(n,r){return s[r]})}var LogWebsocket_vue_vue_type_style_index_0_lang="";const _hoisted_1=createTextVNode("\u65E5\u5FD7"),_sfc_main$1=defineComponent({setup(e){const{prefixCls:s}=useDesign("logWebsocket"),n=ref([]),r=[{title:"\u5185\u5BB9",dataIndex:"msg",key:"msg",slots:{customRender:"msg"}}],c=new Websocket1(wsUrl+Api.getLog),p=new AnsiUp;return c.onOpen(f=>{console.log(f),console.log("log ws\u8FDE\u63A5\u5DF2\u6253\u5F00")}),c.onMessage(f=>{let a=p.ansi_to_html(f.data);n.value.unshift({msg:escape2Html(removeHtmlTab(a))}),n.value.length>1e3&&n.value.pop()}),c.onClose(()=>{console.log("ws\u8FDE\u63A5\u5DF2\u5173\u95ED")}),c.onError(f=>{console.log("ws\u51FA\u73B0\u9519\u8BEF"+f)}),onUnmounted(()=>{c.socket.close()}),(f,a)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(Divider),null,{default:withCtx(()=>[_hoisted_1]),_:1}),createVNode(unref(Table),{columns:r,"data-source":n.value,class:normalizeClass(`${unref(s)}__table`)},{msg:withCtx(({text:t})=>[createBaseVNode("span",{class:normalizeClass(`${unref(s)}__msg`)},toDisplayString(t),3)]),_:1},8,["data-source","class"])]))}}),_sfc_main=defineComponent({emits:["changeGroupIdList"],setup(e,{emit:s}){const n=ref([0]),r=useUserStore(),c=computed(()=>r.getQQ),p=ref([]),f=ref([]),a=()=>b(this,null,function*(){p.value=yield getGroupList({selfId:c.value}),p.value.unshift({group_id:0,group_name:"\u5168\u90E8\u7FA4\u804A",group_create_time:0,group_level:0,max_member_count:0,member_count:0})}),t=()=>b(this,null,function*(){f.value=yield getFriendList({selfId:c.value})}),i=()=>{s("changeGroupIdList",n.value)};return watchEffect(()=>{a(),t()}),(u,o)=>(openBlock(),createElementBlock("div",null,[createVNode(unref(FormItem),{label:"\u7FA4\u804A & \u597D\u53CB"},{default:withCtx(()=>[createVNode(unref(Select),{value:n.value,"onUpdate:value":o[0]||(o[0]=l=>n.value=l),mode:"multiple",style:{width:"40%"},placeholder:"\u8BF7\u9009\u62E9\u7FA4\u804A & \u597D\u53CB",onChange:i},{default:withCtx(()=>[createVNode(unref(SelectOptGroup),{label:"\u7FA4\u804A"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(p.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:l.group_id,key:l.group_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.group_name+" ("+l.group_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1}),createVNode(unref(SelectOptGroup),{label:"\u597D\u53CB"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(f.value,l=>(openBlock(),createBlock(unref(SelectOption),{value:-l.user_id,key:l.user_id},{default:withCtx(()=>[createTextVNode(toDisplayString(l.nickname+" ("+l.user_id+")"),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1})]))}}),BotSwitch=withInstall(_sfc_main$4),MessageSendBox=withInstall(_sfc_main$3),MessageWebsocket=withInstall(_sfc_main$2),LogWebsocket=withInstall(_sfc_main$1),MessageSendSelect=withInstall(_sfc_main);export{BotSwitch as B,LogWebsocket as L,MessageSendBox as M,MessageWebsocket as a};
