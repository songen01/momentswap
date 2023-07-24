(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{2880:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var n=r(9613),a=r(5120),i=r(1643),s=r.n(i),l=r(1574),o=r(9404),c=r(5631),d=r(8725),u=r(9657);let m=new c.Yd(d.i),f={},h=u.O$.from(0),p=u.O$.from(-1);function x(e,t,r,n){let a={fault:t,operation:r};return void 0!==n&&(a.value=n),m.throwError(e,c.Yd.errors.NUMERIC_FAULT,a)}let v="0";for(;v.length<256;)v+=v;function g(e){if("number"!=typeof e)try{e=u.O$.from(e).toNumber()}catch(e){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+v.substring(0,e):m.throwArgumentError("invalid decimal size","decimals",e)}function b(e,t){null==t&&(t=0);let r=g(t);e=u.O$.from(e);let n=e.lt(h);n&&(e=e.mul(p));let a=e.mod(r).toString();for(;a.length<r.length-1;)a="0"+a;a=a.match(/^([0-9]*[1-9]|0)(0*)/)[1];let i=e.div(r).toString();return e=1===r.length?i:i+"."+a,n&&(e="-"+e),e}function N(e,t){null==t&&(t=0);let r=g(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||m.throwArgumentError("invalid decimal value","value",e);let n="-"===e.substring(0,1);n&&(e=e.substring(1)),"."===e&&m.throwArgumentError("missing value","value",e);let a=e.split(".");a.length>2&&m.throwArgumentError("too many decimal points","value",e);let i=a[0],s=a[1];for(i||(i="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>r.length-1&&x("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<r.length-1;)s+="0";let l=u.O$.from(i),o=u.O$.from(s),c=l.mul(r).add(o);return n&&(c=c.mul(p)),c}class j{constructor(e,t,r,n){e!==f&&m.throwError("cannot use FixedFormat constructor; use FixedFormat.from",c.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=n,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=g(n),Object.freeze(this)}static from(e){if(e instanceof j)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,n=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let a=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||m.throwArgumentError("invalid fixed format","format",e),t="u"!==a[1],r=parseInt(a[2]),n=parseInt(a[3])}}else if(e){let a=(t,r,n)=>null==e[t]?n:(typeof e[t]!==r&&m.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=a("signed","boolean",t),r=a("width","number",r),n=a("decimals","number",n)}return r%8&&m.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&m.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new j(f,t,r,n)}}class w{constructor(e,t,r,n){e!==f&&m.throwError("cannot use FixedNumber constructor; use FixedNumber.from",c.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&m.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=N(this._value,this.format.decimals),r=N(e._value,e.format.decimals);return w.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=N(this._value,this.format.decimals),r=N(e._value,e.format.decimals);return w.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=N(this._value,this.format.decimals),r=N(e._value,e.format.decimals);return w.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=N(this._value,this.format.decimals),r=N(e._value,e.format.decimals);return w.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=w.from(e[0],this.format),r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(y.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=w.from(e[0],this.format),r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(y.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&m.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let r=w.from("1"+v.substring(0,e),this.format),n=E.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&m.throwArgumentError("invalid byte width","width",e);let t=u.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,o.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return w.fromString(this._value,e)}static fromValue(e,t,r){return null!=r||null==t||(0,u.Zm)(t)||(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),w.fromString(b(e,t),j.from(r))}static fromString(e,t){null==t&&(t="fixed");let r=j.from(t),n=N(e,r.decimals);!r.signed&&n.lt(h)&&x("unsigned value cannot be negative","overflow","value",e);let a=null;r.signed?a=n.toTwos(r.width).toHexString():(a=n.toHexString(),a=(0,o.$m)(a,r.width/8));let i=b(n,r.decimals);return new w(f,a,i,r)}static fromBytes(e,t){null==t&&(t="fixed");let r=j.from(t);if((0,o.lE)(e).length>r.width/8)throw Error("overflow");let n=u.O$.from(e);r.signed&&(n=n.fromTwos(r.width));let a=n.toTwos((r.signed?0:1)+r.width).toHexString(),i=b(n,r.decimals);return new w(f,a,i,r)}static from(e,t){if("string"==typeof e)return w.fromString(e,t);if((0,o._t)(e))return w.fromBytes(e,t);try{return w.fromValue(e,0,t)}catch(e){if(e.code!==c.Yd.errors.INVALID_ARGUMENT)throw e}return m.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let y=w.from(1),E=w.from("0.5"),_=new c.Yd("units/5.7.0"),k=["wei","kwei","mwei","gwei","szabo","finney","ether"];function A(e){return function(e,t){if("string"!=typeof e&&_.throwArgumentError("value must be a string","value",e),"string"==typeof t){let e=k.indexOf(t);-1!==e&&(t=3*e)}return N(e,null!=t?t:18)}(e,18)}var F=r(4275),S=r(8582),O=r(8777),D=r.n(O),C=r(2731),L=r.n(C),I=r(6471),R=r(959),T=r(5218),M=r(1380),U=r(3607),Y=r(965),P=r(3479),Z=r(3669),$=r(6330),B=r(8501),z=r(7306),H=r(1527);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function X(){var e,t,r,i,o,c,d=(0,I.useRouter)(),u=d.query.address,m=(0,M.YC)().address,f=u==m,h=(0,M.JG)().getNFTCollectionByOwner,p=(0,R.useState)(void 0),x=p[0],v=p[1],g=(0,R.useState)("Moments"),N=g[0],j=g[1],w=(0,R.useState)((0,H.jsx)(H.Fragment,{})),y=w[0],E=w[1],_=(0,R.useState)(),O=_[0];_[1];var C=(0,R.useState)(void 0),X=C[0],K=C[1],J=(0,R.useState)(""),V=J[0],W=J[1],q=(0,R.useState)(1),Q=q[0],ee=q[1],et=(0,R.useState)(""),er=et[0],en=et[1],ea=(0,R.useState)([]),ei=ea[0],es=ea[1],el=(0,R.useState)([]),eo=el[0],ec=el[1],ed=(0,R.useState)(!1),eu=ed[0],em=ed[1],ef=(0,R.useState)(""),eh=ef[0],ep=ef[1],ex=(0,M.sC)(function(e){return e.success});(0,M.sC)(function(e){return e.resetStatus});var ev=(0,M.sC)(function(e){return e.fail}),eg=(0,Y.ZO)(function(e){return e.records}),eb=(0,Y.GT)(function(e){return e.PK}),eN=(0,$.E)(),ej=eN.remoteProgram,ew=eN.url,ey=(0,M.sG)(),eE=ey.approve,e_=ey.mintSubDomain,ek=ey.updateSubDomain,eA=ey.getAllDomainByCreator,eF=ey.getSubDomainDetailsByDomainID,eS=ey.getApprovedByDomainID,eO=ey.getDomainLeaseTermsByCreator,eD=ey.getDomainLeaseTermsByUser,eC=ey.getOwnerByDomainID,eL=ey.getAvatar,eI=(0,M.pP)(),eR=eI.getListedDomainsByDomainID,eT=eI.listDomain,eM=eI.lendDomain,eU=eI.updateListDomain,eY=eI.cancelListDomain,eP=eI.withdrawProceeds,eZ=(0,Y.Ih)(function(e){return e.TYPE}),e$=(0,R.useRef)();(0,R.useEffect)(function(){e$.current=(0,P.a)(),e$.current.addEventListener("message",function(e){"EXECUTION_TRANSACTION_COMPLETED"==e.data.type?Z.Z.post("https://vm.aleo.org/api/testnet3/transaction/broadcast",e.data.executeTransaction,{headers:{"Content-Type":"application/json"}}).then(function(e){ex(),console.log(e.data)}):"ERROR"==e.data.type&&(alert(e.data.errorMessage),console.log(e.data.errorMessage),ev())})},[]),(0,R.useEffect)(function(){var e,t=null===(e=JSON.parse(window.localStorage.getItem("aleoRecords")))||void 0===e?void 0:e.filter(function(e){return e.result.indexOf("nick_name")>-1}).sort(function(e,t){return t.height-e.height})[0],r=t.result.match(/name: (\d+)(field.private)/)[1].substring(1),n=t.result.match(/nick_name: (\d+)(field.private)/)[1].substring(1),a=t.result.match(/phone_number: (\d+)(field.private)/)[1].substring(1),i=t.result.match(/identification_number: (\d+)(field.private)/)[1].substring(1),s=t.result.match(/nation: (\d+)(field.private)/)[1].substring(1),l=r+n+a+i;l&&v((0,B.aN)([l])[0]),s&&ep((0,B.aN)([s])[0])},[]),(0,R.useEffect)(function(){(0,a.Z)(s().mark(function e(){var t,r,a,i,l,o,c,d,m,f,h,p,x,v,g,N,j,w,y,E,_,A,F,S,O,D,C,L,I,R,T,M;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return es([]),ec([]),r=[],a=[],e.next=6,eA(u);case 6:return i=e.sent,o=(l=(0,n.Z)(i,4))[0],c=l[1],d=l[2],m=l[3],(f=null===(t=JSON.parse(window.localStorage.getItem("aleoRecords")))||void 0===t?void 0:t.filter(function(e){return e.result.indexOf("nick_name")>-1}).sort(function(e,t){return t.height-e.height})[0]).result.match(/name: (\d+)(field.private)/)[1].substring(1),f.result.match(/nick_name: (\d+)(field.private)/)[1].substring(1),f.result.match(/phone_number: (\d+)(field.private)/)[1].substring(1),f.result.match(/identification_number: (\d+)(field.private)/)[1].substring(1),"FIL"===eZ?ep(o):ep(f.filter(function(e){return e.result.indexOf("identification_number")>-1})[0].result),e.next=21,eO(u);case 21:h=e.sent,p=(0,n.Z)(h,3)[2],x=0,v=[0,1,2,3,4];case 25:if(!(x<v.length)){e.next=44;break}if(!c[g=v[x]]){e.next=40;break}return e.next=30,eR(c[g].toString());case 30:N=e.sent,w=(j=(0,n.Z)(N,3))[0],y=j[1],E=j[2],_=m[g]!=u,A=!w.isZero(),r.push({id:c[g].toString(),fullDomain:"".concat(d[g],".").concat(o,".fil"),mainDomain:o,subDomain:d[g],used:_,listed:A,start:_?p[g][0].toNumber():void 0,end:_?p[g][0].toNumber()+p[g][1].toNumber():void 0,expire:A?E.toNumber():void 0,price:function(e,t){if("string"==typeof t){let e=k.indexOf(t);-1!==e&&(t=3*e)}return b(e,null!=t?t:18)}(y||"0",18),user:m[g],creator:u}),e.next=41;break;case 40:r.push(void 0);case 41:x++,e.next=25;break;case 44:return es(r),e.next=47,eD(u);case 47:F=e.sent,O=(S=(0,n.Z)(F,3))[0],D=S[1],C=S[2],e.t0=s().keys(O);case 53:if((e.t1=e.t0()).done){e.next=71;break}return g=e.t1.value,e.next=57,eC(O[g].toString());case 57:return L=e.sent,e.next=60,eA(L);case 60:return I=e.sent,R=(0,n.Z)(I,1)[0],e.next=65,eF(O[g].toString());case 65:T=e.sent,M=(0,n.Z)(T,3)[2],a.push({id:O[g].toString(),fullDomain:"".concat(D[g],".fil"),mainDomain:R,subDomain:M,used:!0,listed:!1,start:C[g][0].toNumber(),end:C[g][0].toNumber()+C[g][1].toNumber(),expire:void 0,price:void 0,user:u,creator:L}),e.next=53;break;case 71:ec(a);case 72:case"end":return e.stop()}},e)}))()},[u,eA,eO,eD,eR]);var eB=function(e){var t=e.target.value;e5(t)&&(t=/\./.test(t)?t.replace(/^0+(.*\.)/,"$1"):t.replace(/^0+/,""),/^\./.test(t)&&(t=t.replace(/^/,"0")),W(t||"0"))},ez=function(e){ee(Number(e.target.value))},eH=function(e){en(e.target.value)},eG=(e=(0,a.Z)(s().mark(function e(){var t,r,n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=s().keys(ei);case 1:if((e.t1=e.t0()).done){e.next=8;break}if(void 0!==ei[r=e.t1.value]){e.next=6;break}return t=r,e.abrupt("break",8);case 6:e.next=1;break;case 8:if(void 0!==t){e.next=11;break}return alert("Only 5 subdomain can be mint at most"),e.abrupt("return");case 11:try{"FIL"===eZ?e_(eh,"space".concat(parseInt(t)+1)):"ALEO"===eZ&&(null===(n=e$.current)||void 0===n||n.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"mintSubDomain",inputs:[eh,"space".concat(parseInt(t)+1)],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew}))}catch(e){ev()}case 12:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),eX=(t=(0,a.Z)(s().mark(function e(){var t,r;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=4;break}return d.reload(),ev(),e.abrupt("return");case 4:return em(!0),e.prev=5,e.next=8,eS(X.id);case 8:if(r=e.sent,!(0,U.bx)(r)){e.next=14;break}return e.next=12,eE(X.id);case 12:return e.next=14,e.sent.wait();case 14:"FIL"===eZ?eT(X.id,A(V).toString(),(0,U.fs)(Q)):"ALEO"===eZ&&(null===(t=e$.current)||void 0===t||t.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"listDomain",inputs:[X.id,A(V).toString(),(0,U.fs)(Q)],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),ev();case 20:em(!1);case 21:case"end":return e.stop()}},e,null,[[5,17]])})),function(){return t.apply(this,arguments)}),eK=(r=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=4;break}return d.reload(),alert("Failed to cancel list"),e.abrupt("return");case 4:em(!0);try{"FIL"===eZ?eY(X.id):"ALEO"===eZ&&(null===(t=e$.current)||void 0===t||t.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"cancelListDomain",inputs:[X.id],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew}))}catch(e){ev()}em(!1);case 7:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),eJ=(i=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=4;break}return d.reload(),alert("Failed to update"),e.abrupt("return");case 4:em(!0);try{"FIL"===eZ?eU(X.id,A(V).toString(),(0,U.fs)(Q)):"ALEO"===eZ&&(null===(t=e$.current)||void 0===t||t.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"updateListDomain",inputs:[X.id,A(V).toString(),(0,U.fs)(Q)],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew}))}catch(e){ev()}em(!1);case 7:case"end":return e.stop()}},e)})),function(){return i.apply(this,arguments)}),eV=(o=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(X){e.next=2;break}return e.abrupt("return");case 2:try{"FIL"===eZ?eM(X.id,A(V).toString()):"ALEO"===eZ&&(null===(t=e$.current)||void 0===t||t.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"lendDomain",inputs:[X.id,A(V).toString()],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew}))}catch(e){ev()}case 3:case"end":return e.stop()}},e)})),function(){return o.apply(this,arguments)}),eW=(c=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e7(er)){e.next=3;break}return alert("The name is between 3 and 10 characters"),e.abrupt("return");case 3:if(X){e.next=5;break}return e.abrupt("return");case 5:em(!0);try{"FIL"===eZ?ek(X.mainDomain,X.subDomain,er):"ALEO"===eZ&&(null===(t=e$.current)||void 0===t||t.postMessage({type:"ALEO_EXECUTE_PROGRAM_ON_CHAIN",remoteProgram:ej,aleoFunction:"updateSubDomain",inputs:[X.mainDomain,X.subDomain,er],privateKey:eb,fee:.1,feeRecord:eg.filter(function(e){return e.microcredits.length>5})[0],url:ew}))}catch(e){ev()}em(!1);case 8:case"end":return e.stop()}},e)})),function(){return c.apply(this,arguments)}),eq=(0,R.useCallback)((0,a.Z)(s().mark(function e(){var t,r,n,a,i,l;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],0!==(a=null===(t=JSON.parse(window.localStorage.getItem("aleoRecords")))||void 0===t?void 0:t.filter(function(e){return e.result.indexOf("metadata_uri1")>-1})).length){e.next=4;break}return e.abrupt("return");case 4:return l=null==(i=null===(r=(0,B.aN)(null==a?void 0:a.map(function(e){for(var t,r=/metadata_uri[1-5]: (\d+)[a-z.]+/g,n=[];null!==(t=r.exec(e.result));){var a=t[1].substring(1);n.push(a)}return n.join("")})))||void 0===r?void 0:r.map(function(e){return e.replace("ipfs://","https://ipfs.io/ipfs/")}))?void 0:i.map(function(e){return Z.Z.get(e)}),e.next=8,Promise.all(l).then(function(e){e.forEach(function(e,t){var r,i=a[t].result.indexOf("time:"),s=a[t].result.indexOf("u64",i),l=a[t].result.slice(i+5,s).trim(),o={id:100*Math.random(),address:e.data.name,timestamp:z.U.format(Number(l)),timestamp_n:l,metadataURL:"https://ipfs.io/ipfs/"+e.data.properties.media.cid,contentText:e.data.description,username:null!==(r=window.localStorage.getItem("aleoAvatarName"))&&void 0!==r?r:"",userImg:"https://i.seadn.io/gcs/files/06a9042df571917b3904517e89baca76.png?auto=format&dpr=1&w=640",media:"https://ipfs.io/ipfs/"+e.data.properties.media.cid,mediaType:e.data.properties.media.type};n.push(o)})});case 8:n.sort(function(e,t){var r,n;return(null!==(r=null==t?void 0:t.timestamp_n)&&void 0!==r?r:0)-(null!==(n=null==e?void 0:e.timestamp_n)&&void 0!==n?n:0)}),E((0,H.jsx)(F.M,{children:null==n?void 0:n.map(function(e){return(0,H.jsx)(S.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:(0,H.jsx)(T.W7,{moment:e},e.id)},e.id)})}));case 11:case"end":return e.stop()}},e)})),[O,x]),eQ=(0,R.useCallback)(function(){E((0,H.jsx)("p",{children:"coming soon..."}))},[]),e0=(0,M.sC)(function(e){return e.status}),e1=(0,M.$I)(),e4=e1.api,e2=e1.contextHolder,e9=e1.openNotificationInfo;(0,R.useEffect)(function(){0===e0&&e4.destroy(),1===e0&&e9("Handling wait a moment",(0,H.jsx)(T.gb,{})),2===e0&&(e4.destroy(),e9("Failed to publish moment."))},[e0]);var e3=(0,R.useCallback)(function(){E((0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("input",{type:"checkbox",id:"sell-modal",className:"modal-toggle"}),(0,H.jsx)("label",{htmlFor:"sell-modal",className:"modal cursor-pointer select-none",children:(0,H.jsxs)("label",{htmlFor:"",className:"modal-box px-14",children:[(0,H.jsx)("label",{htmlFor:"sell-modal",className:"btn btn-primary btn-sm btn-circle absolute right-2 top-2",children:"✕"}),(0,H.jsx)("h3",{className:"font-bold text-lg",children:"List Space Domain"}),(0,H.jsxs)("div",{className:"my-5",children:[(0,H.jsx)("h4",{className:"font-medium mt-8 mb-2",children:"Price"}),(0,H.jsxs)("div",{className:"input-group",children:[(0,H.jsx)("input",{type:"text",value:V,placeholder:"Amount",className:"input input-bordered",onChange:eB}),(0,H.jsx)("span",{children:"FIL"})]}),(0,H.jsx)("h4",{className:"font-medium mt-8 mb-2",children:"Lease Term"}),(0,H.jsxs)("p",{className:"text-right",children:[Q," ",(0,H.jsx)("span",{className:"text-sm",children:1===Q?"YEAR":"YEARS"})]}),(0,H.jsx)("input",{type:"range",min:"1",max:"5",value:Q,onChange:ez,className:"range range-xs range-primary",step:"1"}),(0,H.jsxs)("div",{className:"w-full flex justify-between text-xs px-2 text-primary-focus",children:[(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"})]})]}),(0,H.jsx)("div",{className:"divider"}),(0,H.jsx)("div",{className:"modal-action",children:(0,H.jsx)("label",{htmlFor:"sell-modal",className:"btn btn-primary ".concat(eu?"loading":""),onClick:eX,children:"List"})})]})}),(0,H.jsx)("input",{type:"checkbox",id:"update-listed-modal",className:"modal-toggle"}),(0,H.jsx)("label",{htmlFor:"update-listed-modal",className:"modal cursor-pointer select-none",children:(0,H.jsxs)("label",{htmlFor:"",className:"modal-box px-14",children:[(0,H.jsx)("label",{htmlFor:"update-listed-modal",className:"btn btn-primary btn-sm btn-circle absolute right-2 top-2",children:"✕"}),(0,H.jsx)("h3",{className:"font-bold text-lg",children:"Edit Space Domain"}),(0,H.jsxs)("div",{className:"my-5",children:[(0,H.jsx)("h4",{className:"font-medium mt-8 mb-2",children:"Price"}),(0,H.jsxs)("div",{className:"input-group",children:[(0,H.jsx)("input",{type:"number",value:V,placeholder:"Amount",className:"input input-bordered",onChange:eB}),(0,H.jsx)("span",{children:"FIL"})]}),(0,H.jsx)("h4",{className:"font-medium mt-8 mb-2",children:"Lease Term"}),(0,H.jsxs)("p",{className:"text-right",children:[Q," ",(0,H.jsx)("span",{className:"text-sm",children:1===Q?"YEAR":"YEARS"})]}),(0,H.jsx)("input",{type:"range",min:"1",max:"5",value:Q,onChange:ez,className:"range range-xs range-primary",step:"1"}),(0,H.jsxs)("div",{className:"w-full flex justify-between text-xs px-2 text-primary-focus",children:[(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"}),(0,H.jsx)("span",{children:"|"})]})]}),(0,H.jsx)("div",{className:"divider"}),(0,H.jsxs)("div",{className:"modal-action",children:[(0,H.jsx)("label",{htmlFor:"update-listed-modal",className:"btn btn-secondary ".concat(eu?"loading":""),onClick:eK,children:"Unlist"}),(0,H.jsx)("label",{htmlFor:"update-listed-modal",className:"btn btn-primary ".concat(eu?"loading":""),onClick:eJ,children:"Update"})]})]})}),(0,H.jsx)("input",{type:"checkbox",id:"update-rented-modal",className:"modal-toggle"}),(0,H.jsx)("label",{htmlFor:"update-rented-modal",className:"modal cursor-pointer select-none",children:(0,H.jsxs)("label",{htmlFor:"",className:"modal-box px-14",children:[(0,H.jsx)("label",{htmlFor:"update-rented-modal",className:"btn btn-primary btn-sm btn-circle absolute right-2 top-2",children:"✕"}),(0,H.jsx)("h3",{className:"font-bold text-lg",children:"Update Domain Name"}),(0,H.jsx)("div",{className:"mt-5",children:(0,H.jsxs)("div",{className:"flex items-center gap-2",children:[(0,H.jsx)("input",{type:"text",value:er,placeholder:"3 to 10 strings",className:"input input-bordered",onChange:eH}),(0,H.jsxs)("span",{children:[".",(null==X?void 0:X.mainDomain)||"---",".fil"]})]})}),(0,H.jsx)("div",{className:"divider"}),(0,H.jsx)("div",{className:"modal-action",children:(0,H.jsx)("label",{htmlFor:"update-rented-modal",className:"btn btn-primary",onClick:eW,children:"Save"})})]})}),(0,H.jsxs)("div",{className:"flex",children:[(0,H.jsx)("h3",{className:"text-lg font-semibold m-2",children:"Created"}),f?(0,H.jsxs)("div",{className:"flex m-auto mr-4 gap-2",children:[(0,H.jsx)("div",{onClick:function(){return eP()},className:"cursor-pointer select-none font-mono font-medium text-primary hover:text-white active:bg-primary-focus hover:bg-primary border border-primary active:border-primary-focus px-1 text-center leading-6",children:"WITHDRAW"}),(0,H.jsx)("div",{onClick:eG,className:"cursor-pointer select-none font-mono font-medium text-primary hover:text-white active:bg-primary-focus hover:bg-primary border border-primary active:border-primary-focus px-1 text-center leading-6",children:"MINT"})]}):null]}),(0,H.jsx)("div",{className:"border-t-[1px] border-base-content/25",children:(0,H.jsx)(F.M,{children:null==ei?void 0:ei.map(function(e,t){return(0,H.jsx)(S.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:(0,H.jsxs)("div",{className:"flex h-20 border-b-[1px] border-base-content/25 items-center",children:[(0,H.jsx)("div",{className:"text-center ml-5",children:t+1}),(0,H.jsx)("div",{className:"divider divider-horizontal my-4"}),(0,H.jsxs)("div",{className:"flex-col w-full",children:[(0,H.jsx)("span",{className:"font-medium",children:"".concat((null==e?void 0:e.fullDomain)||"---")}),(0,H.jsxs)("div",{className:"flex-col text-xs",children:[(0,H.jsxs)("div",{className:"flex items-center gap-1",children:[(0,H.jsx)(l.T39,{className:"h-4 w-4"}),null!=e&&e.used?(0,H.jsxs)("p",{children:[(0,H.jsx)("span",{className:"badge badge-accent badge-xs",children:e.start&&D().unix(e.start).format("YYYY-MM-DD")}),(0,H.jsx)("span",{children:"\xa0➞\xa0"}),(0,H.jsx)("span",{className:"badge badge-accent badge-xs",children:e.end&&D().unix(e.end).format("YYYY-MM-DD")})]}):null!=e&&e.listed?(0,H.jsxs)("div",{className:"badge badge-accent badge-xs",children:[(0,U.JX)(e.expire||0)," ",(0,U.JX)(e.expire||0)>1?"Years":"Year"]}):(0,H.jsx)(H.Fragment,{children:"-"})]}),(0,H.jsxs)("div",{className:"flex items-center gap-1 w-0",children:[(0,H.jsx)("div",{className:"h-4 w-4",children:(0,H.jsx)(l.tBG,{className:"h-4 w-4"})}),null!=e&&e.used?(0,H.jsx)(L(),{className:"font-mono hover:underline",href:"/user?address=".concat(e.user),children:e.user}):(0,H.jsx)(H.Fragment,{children:"-"})]})]})]}),(0,H.jsx)("div",{className:"mr-4",children:void 0==e?(0,H.jsx)(H.Fragment,{}):e.listed||e.used?e.listed?(0,H.jsx)(T.UG,{onClick:function(){K(e),W((null==e?void 0:e.price)||"0"),ee((0,U.JX)(e.expire||1)),f||eV()},iconSrc:"https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png",price:e.price||"0.0",htmlFor:f?"update-listed-modal":"",children:f?"Edit":"Buy"}):(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-info",children:(0,H.jsx)("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})}):f?(0,H.jsx)("label",{htmlFor:"sell-modal",onClick:function(){K(e)},className:"border-2 rounded-full hover:text-white hover:border-neutral active:border-neutral-focus hover:bg-neutral active:bg-neutral-focus w-32 h-8 overflow-hidden hvr-shadow text-sm text-center leading-7 font-bold",children:"Sell"}):null})]})},t)})})}),(0,H.jsx)("div",{children:(0,H.jsxs)("div",{className:"mb-5",children:[(0,H.jsx)("h2",{className:"text-lg font-semibold m-2",children:"Rented"}),(0,H.jsx)("div",{className:"border-t-[1px] border-base-content/25",children:0==eo.length?(0,H.jsxs)("div",{className:"flex justify-center gap-2 mt-8",children:[(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,H.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})}),(0,H.jsx)("p",{children:"No records"})]}):(0,H.jsx)(F.M,{children:null==eo?void 0:eo.map(function(e,t){return(0,H.jsx)(S.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:(0,H.jsxs)("div",{className:"flex h-20 border-b-[1px] border-base-content/25 items-center",children:[(0,H.jsx)("div",{className:"text-center ml-5",children:t+1}),(0,H.jsx)("div",{className:"divider divider-horizontal my-4"}),(0,H.jsxs)("div",{className:"flex-col w-full",children:[(0,H.jsx)(L(),{className:"font-medium cursor-pointer hover:underline",href:"/user?address=".concat(e.creator),children:e.fullDomain}),(0,H.jsxs)("div",{className:"flex-col text-xs",children:[(0,H.jsxs)("div",{className:"flex items-center gap-1",children:[(0,H.jsx)(l.T39,{className:"h-4 w-4"}),(0,H.jsxs)("p",{children:[(0,H.jsx)("span",{className:"badge badge-accent badge-xs",children:e.start&&D().unix(e.start).format("YYYY-MM-DD")}),(0,H.jsx)("span",{children:"\xa0➞\xa0"}),(0,H.jsx)("span",{className:"badge badge-accent badge-xs",children:e.end&&D().unix(e.end).format("YYYY-MM-DD")})]})]}),(0,H.jsxs)("div",{className:"flex items-center gap-1 w-0",children:[(0,H.jsx)("div",{className:"h-4 w-4",children:(0,H.jsx)(l.tBG,{className:"h-4 w-4"})}),(0,H.jsx)(L(),{className:"font-mono hover:underline",href:"/user?address=".concat(e.user),children:e.user})]})]})]}),(0,H.jsxs)("div",{className:"flex mr-4 gap-2 items-center",children:[f?(0,H.jsx)("label",{htmlFor:"update-rented-modal",onClick:function(){en(e.subDomain),K(e)},className:"border-2 rounded-full hover:text-white hover:border-neutral active:border-neutral-focus hover:bg-neutral active:bg-neutral-focus w-24 h-8 overflow-hidden hvr-shadow text-sm text-center leading-7 font-bold",children:"Rename"}):null,(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-info",children:(0,H.jsx)("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]})]},t)},t)})})})]})})]}))},[eu,m,Q,er,V,u,ei,eo,eh]);(0,R.useEffect)(function(){(0,a.Z)(s().mark(function e(){var t,r,n,a;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(u);case 2:return t=e.sent,e.next=5,(0,U.BR)(t);case 5:r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}}(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}(e.sent);try{for(r.s();!(n=r.n()).done;)(a=n.value).username=eh,a.userImg=x}catch(e){r.e(e)}finally{r.f()}case 8:case"end":return e.stop()}},e)}))()},[h,u,eh,x]),(0,R.useEffect)(function(){(0,a.Z)(s().mark(function e(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,eL(u);case 2:v(e.sent);case 4:case"end":return e.stop()}},e)}))()},[u,eL]),(0,R.useEffect)(function(){"Moments"===N?eq():"Likes"===N?eQ():"Spaces"===N&&e3()},[N,eQ,eq,e3]);var e5=function(e){var t=Number(e);return t>=0&&t<Number.MAX_SAFE_INTEGER},e7=function(e){return/^[a-zA-Z0-9_-]{3,10}$/.test(e)};return(0,H.jsxs)(H.Fragment,{children:[e2,(0,H.jsx)(T.Ar,{children:(0,H.jsxs)("div",{className:"border-l border-r border-primary xl:min-w-[576px] flex-grow max-w-xl w-[100vw] h-[100%]",children:[(0,H.jsxs)("div",{className:"flex p-2 sticky top-0 z-50 bg-base-200 border-primary gap-2",children:[(0,H.jsx)("div",{onClick:function(){return d.back()},children:(0,H.jsx)(l.Y4O,{className:"rounded-full h-9 w-9 p-2 hover:bg-primary"})}),(0,H.jsx)("h2",{className:"text-lg sm:text-xl font-bold my-auto",children:eh||"Profile"}),(0,H.jsx)("div",{className:"flex items-center justify-center px-0 ml-auto w-9 h-9",children:(0,H.jsx)(T.Tl,{})})]}),(0,H.jsx)("div",{className:"w-full h-[160px] bg-gradient-to-r from-secondary to-neutral mb-16",children:(0,H.jsx)("div",{className:"rounded-full relative top-28 left-8 w-[100px] h-[100px] bg-base-100 flex",children:(0,H.jsx)(T.qE,{image:"https://i.seadn.io/gcs/files/06a9042df571917b3904517e89baca76.png?auto=format&dpr=1&w=640",seed:u,diameter:90,className:"m-auto"})})}),(0,H.jsxs)("label",{htmlFor:"identity-modal",className:"btn btn-primary btn-sm btn-outline gap-2 float-right mr-6 ".concat(f?"":"hidden"),children:[(0,H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:[(0,H.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),(0,H.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Edit Identity"]}),(0,H.jsxs)("div",{className:"px-4 py-2",children:[(0,H.jsxs)("p",{className:"text-2xl font-semibold",children:[eh||"---","FIL"===eZ?".fil":".aleo"]}),(0,H.jsx)("p",{className:"text-sm",children:u})]}),(0,H.jsxs)("div",{className:"mt-5",children:[(0,H.jsx)(T.OK,{tabs:["Moments","Likes","Spaces"],activeTab:N,setActiveTab:j}),y]})]})})]})}},4486:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return r(2880)}])}},function(e){e.O(0,[669,546,218,774,888,179],function(){return e(e.s=4486)}),_N_E=e.O()}]);