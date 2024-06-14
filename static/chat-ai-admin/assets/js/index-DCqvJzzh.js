import{O as f,S as j,al as re,U as Ve,X as P,aQ as ie,a2 as g,aR as G,a7 as N,a8 as le,bd as Be,aJ as Y,be as we,aE as Q,K as Me,N as Te,b0 as Pe,P as He,H as Oe,R as ke,ar as D,aq as E,a3 as Fe,ap as Le,a5 as z}from"../../index.js";import{B as J,e as Ne,_ as Ee}from"./index-DBNqHYGh.js";import{k as B,f as I,s as Z,x as De,o as ue,b as ce,e as U,w as Re,ah as je}from"./vue-chunks-Chs-lyDX.js";import{u as ze}from"./inputProps-DYO7gEw-.js";const de=(e,s)=>{let{attrs:t}=s;const{included:n,vertical:o,style:a,class:r}=t;let{length:i,offset:l,reverse:u}=t;i<0&&(u=!u,i=Math.abs(i),l=100-l);const c=o?{[u?"top":"bottom"]:`${l}%`,[u?"bottom":"top"]:"auto",height:`${i}%`}:{[u?"right":"left"]:`${l}%`,[u?"left":"right"]:"auto",width:`${i}%`},m=f(f({},a),c);return n?B("div",{class:r,style:m},null):null};de.inheritAttrs=!1;const he=de,Ae=(e,s,t,n,o,a)=>{re();const r=Object.keys(s).map(parseFloat).sort((i,l)=>i-l);if(t&&n)for(let i=o;i<=a;i+=n)r.indexOf(i)===-1&&r.push(i);return r},fe=(e,s)=>{let{attrs:t}=s;const{prefixCls:n,vertical:o,reverse:a,marks:r,dots:i,step:l,included:u,lowerBound:c,upperBound:m,max:b,min:C,dotStyle:y,activeDotStyle:w}=t,h=b-C,S=Ae(o,r,i,l,C,b).map(d=>{const $=`${Math.abs(d-C)/h*100}%`,V=!u&&d===m||u&&d<=m&&d>=c;let x=o?f(f({},y),{[a?"top":"bottom"]:$}):f(f({},y),{[a?"right":"left"]:$});V&&(x=f(f({},x),w));const v=j({[`${n}-dot`]:!0,[`${n}-dot-active`]:V,[`${n}-dot-reverse`]:a});return B("span",{class:v,style:x,key:d},null)});return B("div",{class:`${n}-step`},[S])};fe.inheritAttrs=!1;const Ie=fe,pe=(e,s)=>{let{attrs:t,slots:n}=s;const{class:o,vertical:a,reverse:r,marks:i,included:l,upperBound:u,lowerBound:c,max:m,min:b,onClickLabel:C}=t,y=Object.keys(i),w=n.mark,h=m-b,S=y.map(parseFloat).sort((d,$)=>d-$).map(d=>{const $=typeof i[d]=="function"?i[d]():i[d],V=typeof $=="object"&&!Ve($);let x=V?$.label:$;if(!x&&x!==0)return null;w&&(x=w({point:d,label:x}));const v=!l&&d===u||l&&d<=u&&d>=c,p=j({[`${o}-text`]:!0,[`${o}-text-active`]:v}),M={marginBottom:"-50%",[r?"top":"bottom"]:`${(d-b)/h*100}%`},O={transform:`translateX(${r?"50%":"-50%"})`,msTransform:`translateX(${r?"50%":"-50%"})`,[r?"right":"left"]:`${(d-b)/h*100}%`},T=a?M:O,L=V?f(f({},T),$.style):T,H={[ie?"onTouchstartPassive":"onTouchstart"]:k=>C(k,d)};return B("span",P({class:p,style:L,key:d,onMousedown:k=>C(k,d)},H),[x])});return B("div",{class:o},[S])};pe.inheritAttrs=!1;const _e=pe,me=I({compatConfig:{MODE:3},name:"Handle",inheritAttrs:!1,props:{prefixCls:String,vertical:{type:Boolean,default:void 0},offset:Number,disabled:{type:Boolean,default:void 0},min:Number,max:Number,value:Number,tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},ariaLabel:String,ariaLabelledBy:String,ariaValueTextFormatter:Function,onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function}},setup(e,s){let{attrs:t,emit:n,expose:o}=s;const a=Z(!1),r=Z(),i=()=>{document.activeElement===r.value&&(a.value=!0)},l=h=>{a.value=!1,n("blur",h)},u=()=>{a.value=!1},c=()=>{var h;(h=r.value)===null||h===void 0||h.focus()},m=()=>{var h;(h=r.value)===null||h===void 0||h.blur()},b=()=>{a.value=!0,c()},C=h=>{h.preventDefault(),c(),n("mousedown",h)};o({focus:c,blur:m,clickFocus:b,ref:r});let y=null;De(()=>{y=G(document,"mouseup",i)}),ue(()=>{y==null||y.remove()});const w=ce(()=>{const{vertical:h,offset:S,reverse:d}=e;return h?{[d?"top":"bottom"]:`${S}%`,[d?"bottom":"top"]:"auto",transform:d?null:"translateY(+50%)"}:{[d?"right":"left"]:`${S}%`,[d?"left":"right"]:"auto",transform:`translateX(${d?"+":"-"}50%)`}});return()=>{const{prefixCls:h,disabled:S,min:d,max:$,value:V,tabindex:x,ariaLabel:v,ariaLabelledBy:p,ariaValueTextFormatter:M,onMouseenter:O,onMouseleave:T}=e,L=j(t.class,{[`${h}-handle-click-focused`]:a.value}),H={"aria-valuemin":d,"aria-valuemax":$,"aria-valuenow":V,"aria-disabled":!!S},k=[t.style,w.value];let F=x||0;(S||x===null)&&(F=null);let _;M&&(_=M(V));const K=f(f(f(f({},t),{role:"slider",tabindex:F}),H),{class:L,onBlur:l,onKeydown:u,onMousedown:C,onMouseenter:O,onMouseleave:T,ref:r,style:k});return B("div",P(P({},K),{},{"aria-label":v,"aria-labelledby":p,"aria-valuetext":_}),null)}}});function X(e,s){try{return Object.keys(s).some(t=>e.target===s[t].ref)}catch{return!1}}function ge(e,s){let{min:t,max:n}=s;return e<t||e>n}function ee(e){return e.touches.length>1||e.type.toLowerCase()==="touchend"&&e.touches.length>0}function te(e,s){let{marks:t,step:n,min:o,max:a}=s;const r=Object.keys(t).map(parseFloat);if(n!==null){const l=Math.pow(10,ve(n)),u=Math.floor((a*l-o*l)/(n*l)),c=Math.min((e-o)/n,u),m=Math.round(c)*n+o;r.push(m)}const i=r.map(l=>Math.abs(e-l));return r[i.indexOf(Math.min(...i))]}function ve(e){const s=e.toString();let t=0;return s.indexOf(".")>=0&&(t=s.length-s.indexOf(".")-1),t}function ne(e,s){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?s.clientY:s.pageX)/t}function se(e,s){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?s.touches[0].clientY:s.touches[0].pageX)/t}function oe(e,s){const t=s.getBoundingClientRect();return e?t.top+t.height*.5:window.pageXOffset+t.left+t.width*.5}function q(e,s){let{max:t,min:n}=s;return e<=n?n:e>=t?t:e}function be(e,s){const{step:t}=s,n=isFinite(te(e,s))?te(e,s):0;return t===null?n:parseFloat(n.toFixed(ve(t)))}function A(e){e.stopPropagation(),e.preventDefault()}function We(e,s,t){const n={increase:(r,i)=>r+i,decrease:(r,i)=>r-i},o=n[e](Object.keys(t.marks).indexOf(JSON.stringify(s)),1),a=Object.keys(t.marks)[o];return t.step?n[e](s,t.step):Object.keys(t.marks).length&&t.marks[a]?t.marks[a]:s}function ye(e,s,t){const n="increase",o="decrease";let a=n;switch(e.keyCode){case N.UP:a=s&&t?o:n;break;case N.RIGHT:a=!s&&t?o:n;break;case N.DOWN:a=s&&t?n:o;break;case N.LEFT:a=!s&&t?n:o;break;case N.END:return(r,i)=>i.max;case N.HOME:return(r,i)=>i.min;case N.PAGE_UP:return(r,i)=>r+i.step*2;case N.PAGE_DOWN:return(r,i)=>r-i.step*2;default:return}return(r,i)=>We(a,r,i)}var Ge=function(e,s){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};function R(){}function Se(e){const s={id:String,min:Number,max:Number,step:Number,marks:g.object,included:{type:Boolean,default:void 0},prefixCls:String,disabled:{type:Boolean,default:void 0},handle:Function,dots:{type:Boolean,default:void 0},vertical:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},minimumTrackStyle:g.object,maximumTrackStyle:g.object,handleStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),trackStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),railStyle:g.object,dotStyle:g.object,activeDotStyle:g.object,autofocus:{type:Boolean,default:void 0},draggableTrack:{type:Boolean,default:void 0}};return I({compatConfig:{MODE:3},name:"CreateSlider",mixins:[J,e],inheritAttrs:!1,props:le(s,{prefixCls:"rc-slider",min:0,max:100,step:1,marks:{},included:!0,disabled:!1,dots:!1,vertical:!1,reverse:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),emits:["change","blur","focus"],data(){return re(),this.handlesRefs={},{}},mounted(){this.$nextTick(()=>{this.document=this.sliderRef&&this.sliderRef.ownerDocument;const{autofocus:t,disabled:n}=this;t&&!n&&this.focus()})},beforeUnmount(){this.$nextTick(()=>{this.removeDocumentEvents()})},methods:{defaultHandle(t){var{index:n,directives:o,className:a,style:r}=t,i=Ge(t,["index","directives","className","style"]);if(delete i.dragging,i.value===null)return null;const l=f(f({},i),{class:a,style:r,key:n});return B(me,l,null)},onDown(t,n){let o=n;const{draggableTrack:a,vertical:r}=this.$props,{bounds:i}=this.$data,l=a&&this.positionGetValue?this.positionGetValue(o)||[]:[],u=X(t,this.handlesRefs);if(this.dragTrack=a&&i.length>=2&&!u&&!l.map((c,m)=>{const b=m?!0:c>=i[m];return m===l.length-1?c<=i[m]:b}).some(c=>!c),this.dragTrack)this.dragOffset=o,this.startBounds=[...i];else{if(!u)this.dragOffset=0;else{const c=oe(r,t.target);this.dragOffset=o-c,o=c}this.onStart(o)}},onMouseDown(t){if(t.button!==0)return;this.removeDocumentEvents();const n=this.$props.vertical,o=ne(n,t);this.onDown(t,o),this.addDocumentMouseEvents()},onTouchStart(t){if(ee(t))return;const n=this.vertical,o=se(n,t);this.onDown(t,o),this.addDocumentTouchEvents(),A(t)},onFocus(t){const{vertical:n}=this;if(X(t,this.handlesRefs)&&!this.dragTrack){const o=oe(n,t.target);this.dragOffset=0,this.onStart(o),A(t),this.$emit("focus",t)}},onBlur(t){this.dragTrack||this.onEnd(),this.$emit("blur",t)},onMouseUp(){this.handlesRefs[this.prevMovedHandleIndex]&&this.handlesRefs[this.prevMovedHandleIndex].clickFocus()},onMouseMove(t){if(!this.sliderRef){this.onEnd();return}const n=ne(this.vertical,t);this.onMove(t,n-this.dragOffset,this.dragTrack,this.startBounds)},onTouchMove(t){if(ee(t)||!this.sliderRef){this.onEnd();return}const n=se(this.vertical,t);this.onMove(t,n-this.dragOffset,this.dragTrack,this.startBounds)},onKeyDown(t){this.sliderRef&&X(t,this.handlesRefs)&&this.onKeyboard(t)},onClickMarkLabel(t,n){t.stopPropagation(),this.onChange({sValue:n}),this.setState({sValue:n},()=>this.onEnd(!0))},getSliderStart(){const t=this.sliderRef,{vertical:n,reverse:o}=this,a=t.getBoundingClientRect();return n?o?a.bottom:a.top:window.pageXOffset+(o?a.right:a.left)},getSliderLength(){const t=this.sliderRef;if(!t)return 0;const n=t.getBoundingClientRect();return this.vertical?n.height:n.width},addDocumentTouchEvents(){this.onTouchMoveListener=G(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=G(this.document,"touchend",this.onEnd)},addDocumentMouseEvents(){this.onMouseMoveListener=G(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=G(this.document,"mouseup",this.onEnd)},removeDocumentEvents(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()},focus(){var t;this.$props.disabled||(t=this.handlesRefs[0])===null||t===void 0||t.focus()},blur(){this.$props.disabled||Object.keys(this.handlesRefs).forEach(t=>{var n,o;(o=(n=this.handlesRefs[t])===null||n===void 0?void 0:n.blur)===null||o===void 0||o.call(n)})},calcValue(t){const{vertical:n,min:o,max:a}=this,r=Math.abs(Math.max(t,0)/this.getSliderLength());return n?(1-r)*(a-o)+o:r*(a-o)+o},calcValueByPos(t){const o=(this.reverse?-1:1)*(t-this.getSliderStart());return this.trimAlignValue(this.calcValue(o))},calcOffset(t){const{min:n,max:o}=this,a=(t-n)/(o-n);return Math.max(0,a*100)},saveSlider(t){this.sliderRef=t},saveHandle(t,n){this.handlesRefs[t]=n}},render(){const{prefixCls:t,marks:n,dots:o,step:a,included:r,disabled:i,vertical:l,reverse:u,min:c,max:m,maximumTrackStyle:b,railStyle:C,dotStyle:y,activeDotStyle:w,id:h}=this,{class:S,style:d}=this.$attrs,{tracks:$,handles:V}=this.renderSlider(),x=j(t,S,{[`${t}-with-marks`]:Object.keys(n).length,[`${t}-disabled`]:i,[`${t}-vertical`]:l,[`${t}-horizontal`]:!l}),v={vertical:l,marks:n,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:c,reverse:u,class:`${t}-mark`,onClickLabel:i?R:this.onClickMarkLabel},p={[ie?"onTouchstartPassive":"onTouchstart"]:i?R:this.onTouchStart};return B("div",P(P({id:h,ref:this.saveSlider,tabindex:"-1",class:x},p),{},{onMousedown:i?R:this.onMouseDown,onMouseup:i?R:this.onMouseUp,onKeydown:i?R:this.onKeyDown,onFocus:i?R:this.onFocus,onBlur:i?R:this.onBlur,style:d}),[B("div",{class:`${t}-rail`,style:f(f({},b),C)},null),$,B(Ie,{prefixCls:t,vertical:l,reverse:u,marks:n,dots:o,step:a,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:c,dotStyle:y,activeDotStyle:w},null),V,B(_e,v,{mark:this.$slots.mark}),Be(this)])}})}const Ue=I({compatConfig:{MODE:3},name:"Slider",mixins:[J],inheritAttrs:!1,props:{defaultValue:Number,value:Number,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},min:Number,max:Number,ariaLabelForHandle:String,ariaLabelledByForHandle:String,ariaValueTextFormatterForHandle:String,startPoint:Number},emits:["beforeChange","afterChange","change"],data(){const e=this.defaultValue!==void 0?this.defaultValue:this.min,s=this.value!==void 0?this.value:e;return{sValue:this.trimAlignValue(s),dragging:!1}},watch:{value:{handler(e){this.setChangeValue(e)},deep:!0},min(){const{sValue:e}=this;this.setChangeValue(e)},max(){const{sValue:e}=this;this.setChangeValue(e)}},methods:{setChangeValue(e){const s=e!==void 0?e:this.sValue,t=this.trimAlignValue(s,this.$props);t!==this.sValue&&(this.setState({sValue:t}),ge(s,this.$props)&&this.$emit("change",t))},onChange(e){const s=!Y(this,"value"),t=e.sValue>this.max?f(f({},e),{sValue:this.max}):e;s&&this.setState(t);const n=t.sValue;this.$emit("change",n)},onStart(e){this.setState({dragging:!0});const{sValue:s}=this;this.$emit("beforeChange",s);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e,t!==s&&(this.prevMovedHandleIndex=0,this.onChange({sValue:t}))},onEnd(e){const{dragging:s}=this;this.removeDocumentEvents(),(s||e)&&this.$emit("afterChange",this.sValue),this.setState({dragging:!1})},onMove(e,s){A(e);const{sValue:t}=this,n=this.calcValueByPos(s);n!==t&&this.onChange({sValue:n})},onKeyboard(e){const{reverse:s,vertical:t}=this.$props,n=ye(e,t,s);if(n){A(e);const{sValue:o}=this,a=n(o,this.$props),r=this.trimAlignValue(a);if(r===o)return;this.onChange({sValue:r}),this.$emit("afterChange",r),this.onEnd()}},getLowerBound(){const e=this.$props.startPoint||this.$props.min;return this.$data.sValue>e?e:this.$data.sValue},getUpperBound(){return this.$data.sValue<this.$props.startPoint?this.$props.startPoint:this.$data.sValue},trimAlignValue(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e===null)return null;const t=f(f({},this.$props),s),n=q(e,t);return be(n,t)},getTrack(e){let{prefixCls:s,reverse:t,vertical:n,included:o,minimumTrackStyle:a,mergedTrackStyle:r,length:i,offset:l}=e;return B(he,{class:`${s}-track`,vertical:n,included:o,offset:l,reverse:t,length:i,style:f(f({},a),r)},null)},renderSlider(){const{prefixCls:e,vertical:s,included:t,disabled:n,minimumTrackStyle:o,trackStyle:a,handleStyle:r,tabindex:i,ariaLabelForHandle:l,ariaLabelledByForHandle:u,ariaValueTextFormatterForHandle:c,min:m,max:b,startPoint:C,reverse:y,handle:w,defaultHandle:h}=this,S=w||h,{sValue:d,dragging:$}=this,V=this.calcOffset(d),x=S({class:`${e}-handle`,prefixCls:e,vertical:s,offset:V,value:d,dragging:$,disabled:n,min:m,max:b,reverse:y,index:0,tabindex:i,ariaLabel:l,ariaLabelledBy:u,ariaValueTextFormatter:c,style:r[0]||r,ref:M=>this.saveHandle(0,M),onFocus:this.onFocus,onBlur:this.onBlur}),v=C!==void 0?this.calcOffset(C):0,p=a[0]||a;return{tracks:this.getTrack({prefixCls:e,reverse:y,vertical:s,included:t,offset:v,minimumTrackStyle:o,mergedTrackStyle:p,length:V-v}),handles:x}}}}),Ke=Se(Ue),W=e=>{let{value:s,handle:t,bounds:n,props:o}=e;const{allowCross:a,pushable:r}=o,i=Number(r),l=q(s,o);let u=l;return!a&&t!=null&&n!==void 0&&(t>0&&l<=n[t-1]+i&&(u=n[t-1]+i),t<n.length-1&&l>=n[t+1]-i&&(u=n[t+1]-i)),be(u,o)},Xe={defaultValue:g.arrayOf(g.number),value:g.arrayOf(g.number),count:Number,pushable:we(g.oneOfType([g.looseBool,g.number])),allowCross:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},tabindex:g.arrayOf(g.number),prefixCls:String,min:Number,max:Number,autofocus:{type:Boolean,default:void 0},ariaLabelGroupForHandles:Array,ariaLabelledByGroupForHandles:Array,ariaValueTextFormatterGroupForHandles:Array,draggableTrack:{type:Boolean,default:void 0}},Ye=I({compatConfig:{MODE:3},name:"Range",mixins:[J],inheritAttrs:!1,props:le(Xe,{count:1,allowCross:!0,pushable:!1,tabindex:[],draggableTrack:!1,ariaLabelGroupForHandles:[],ariaLabelledByGroupForHandles:[],ariaValueTextFormatterGroupForHandles:[]}),emits:["beforeChange","afterChange","change"],displayName:"Range",data(){const{count:e,min:s,max:t}=this,n=Array(...Array(e+1)).map(()=>s),o=Y(this,"defaultValue")?this.defaultValue:n;let{value:a}=this;a===void 0&&(a=o);const r=a.map((l,u)=>W({value:l,handle:u,props:this.$props}));return{sHandle:null,recent:r[0]===t?0:r.length-1,bounds:r}},watch:{value:{handler(e){const{bounds:s}=this;this.setChangeValue(e||s)},deep:!0},min(){const{value:e}=this;this.setChangeValue(e||this.bounds)},max(){const{value:e}=this;this.setChangeValue(e||this.bounds)}},methods:{setChangeValue(e){const{bounds:s}=this;let t=e.map((n,o)=>W({value:n,handle:o,bounds:s,props:this.$props}));if(s.length===t.length){if(t.every((n,o)=>n===s[o]))return null}else t=e.map((n,o)=>W({value:n,handle:o,props:this.$props}));if(this.setState({bounds:t}),e.some(n=>ge(n,this.$props))){const n=e.map(o=>q(o,this.$props));this.$emit("change",n)}},onChange(e){if(!Y(this,"value"))this.setState(e);else{const o={};["sHandle","recent"].forEach(a=>{e[a]!==void 0&&(o[a]=e[a])}),Object.keys(o).length&&this.setState(o)}const n=f(f({},this.$data),e).bounds;this.$emit("change",n)},positionGetValue(e){const s=this.getValue(),t=this.calcValueByPos(e),n=this.getClosestBound(t),o=this.getBoundNeedMoving(t,n),a=s[o];if(t===a)return null;const r=[...s];return r[o]=t,r},onStart(e){const{bounds:s}=this;this.$emit("beforeChange",s);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e;const n=this.getClosestBound(t);this.prevMovedHandleIndex=this.getBoundNeedMoving(t,n),this.setState({sHandle:this.prevMovedHandleIndex,recent:this.prevMovedHandleIndex});const o=s[this.prevMovedHandleIndex];if(t===o)return;const a=[...s];a[this.prevMovedHandleIndex]=t,this.onChange({bounds:a})},onEnd(e){const{sHandle:s}=this;this.removeDocumentEvents(),s||(this.dragTrack=!1),(s!==null||e)&&this.$emit("afterChange",this.bounds),this.setState({sHandle:null})},onMove(e,s,t,n){A(e);const{$data:o,$props:a}=this,r=a.max||100,i=a.min||0;if(t){let b=a.vertical?-s:s;b=a.reverse?-b:b;const C=r-Math.max(...n),y=i-Math.min(...n),w=Math.min(Math.max(b/(this.getSliderLength()/100),y),C),h=n.map(S=>Math.floor(Math.max(Math.min(S+w,r),i)));o.bounds.map((S,d)=>S===h[d]).some(S=>!S)&&this.onChange({bounds:h});return}const{bounds:l,sHandle:u}=this,c=this.calcValueByPos(s),m=l[u];c!==m&&this.moveTo(c)},onKeyboard(e){const{reverse:s,vertical:t}=this.$props,n=ye(e,t,s);if(n){A(e);const{bounds:o,sHandle:a}=this,r=o[a===null?this.recent:a],i=n(r,this.$props),l=W({value:i,handle:a,bounds:o,props:this.$props});if(l===r)return;this.moveTo(l,!0)}},getClosestBound(e){const{bounds:s}=this;let t=0;for(let n=1;n<s.length-1;n+=1)e>=s[n]&&(t=n);return Math.abs(s[t+1]-e)<Math.abs(s[t]-e)&&(t+=1),t},getBoundNeedMoving(e,s){const{bounds:t,recent:n}=this;let o=s;const a=t[s+1]===t[s];return a&&t[n]===t[s]&&(o=n),a&&e!==t[s+1]&&(o=e<t[s+1]?s:s+1),o},getLowerBound(){return this.bounds[0]},getUpperBound(){const{bounds:e}=this;return e[e.length-1]},getPoints(){const{marks:e,step:s,min:t,max:n}=this,o=this.internalPointsCache;if(!o||o.marks!==e||o.step!==s){const a=f({},e);if(s!==null)for(let i=t;i<=n;i+=s)a[i]=i;const r=Object.keys(a).map(parseFloat);r.sort((i,l)=>i-l),this.internalPointsCache={marks:e,step:s,points:r}}return this.internalPointsCache.points},moveTo(e,s){const t=[...this.bounds],{sHandle:n,recent:o}=this,a=n===null?o:n;t[a]=e;let r=a;this.$props.pushable!==!1?this.pushSurroundingHandles(t,r):this.$props.allowCross&&(t.sort((i,l)=>i-l),r=t.indexOf(e)),this.onChange({recent:r,sHandle:r,bounds:t}),s&&(this.$emit("afterChange",t),this.setState({},()=>{this.handlesRefs[r].focus()}),this.onEnd())},pushSurroundingHandles(e,s){const t=e[s],{pushable:n}=this,o=Number(n);let a=0;if(e[s+1]-t<o&&(a=1),t-e[s-1]<o&&(a=-1),a===0)return;const r=s+a,i=a*(e[r]-t);this.pushHandle(e,r,a,o-i)||(e[s]=e[r]-a*o)},pushHandle(e,s,t,n){const o=e[s];let a=e[s];for(;t*(a-o)<n;){if(!this.pushHandleOnePoint(e,s,t))return e[s]=o,!1;a=e[s]}return!0},pushHandleOnePoint(e,s,t){const n=this.getPoints(),a=n.indexOf(e[s])+t;if(a>=n.length||a<0)return!1;const r=s+t,i=n[a],{pushable:l}=this,u=Number(l),c=t*(e[r]-i);return this.pushHandle(e,r,t,u-c)?(e[s]=i,!0):!1},trimAlignValue(e){const{sHandle:s,bounds:t}=this;return W({value:e,handle:s,bounds:t,props:this.$props})},ensureValueNotConflict(e,s,t){let{allowCross:n,pushable:o}=t;const a=this.$data||{},{bounds:r}=a;if(e=e===void 0?a.sHandle:e,o=Number(o),!n&&e!=null&&r!==void 0){if(e>0&&s<=r[e-1]+o)return r[e-1]+o;if(e<r.length-1&&s>=r[e+1]-o)return r[e+1]-o}return s},getTrack(e){let{bounds:s,prefixCls:t,reverse:n,vertical:o,included:a,offsets:r,trackStyle:i}=e;return s.slice(0,-1).map((l,u)=>{const c=u+1,m=j({[`${t}-track`]:!0,[`${t}-track-${c}`]:!0});return B(he,{class:m,vertical:o,reverse:n,included:a,offset:r[c-1],length:r[c]-r[c-1],style:i[u],key:c},null)})},renderSlider(){const{sHandle:e,bounds:s,prefixCls:t,vertical:n,included:o,disabled:a,min:r,max:i,reverse:l,handle:u,defaultHandle:c,trackStyle:m,handleStyle:b,tabindex:C,ariaLabelGroupForHandles:y,ariaLabelledByGroupForHandles:w,ariaValueTextFormatterGroupForHandles:h}=this,S=u||c,d=s.map(x=>this.calcOffset(x)),$=`${t}-handle`,V=s.map((x,v)=>{let p=C[v]||0;(a||C[v]===null)&&(p=null);const M=e===v;return S({class:j({[$]:!0,[`${$}-${v+1}`]:!0,[`${$}-dragging`]:M}),prefixCls:t,vertical:n,dragging:M,offset:d[v],value:x,index:v,tabindex:p,min:r,max:i,reverse:l,disabled:a,style:b[v],ref:O=>this.saveHandle(v,O),onFocus:this.onFocus,onBlur:this.onBlur,ariaLabel:y[v],ariaLabelledBy:w[v],ariaValueTextFormatter:h[v]})});return{tracks:this.getTrack({bounds:s,prefixCls:t,reverse:l,vertical:n,included:o,offsets:d,trackStyle:m}),handles:V}}}}),Je=Se(Ye),qe=I({compatConfig:{MODE:3},name:"SliderTooltip",inheritAttrs:!1,props:Ne(),setup(e,s){let{attrs:t,slots:n}=s;const o=U(null),a=U(null);function r(){Q.cancel(a.value),a.value=null}function i(){a.value=Q(()=>{var u;(u=o.value)===null||u===void 0||u.forcePopupAlign(),a.value=null})}const l=()=>{r(),e.open&&i()};return Re([()=>e.open,()=>e.title],()=>{l()},{flush:"post",immediate:!0}),je(()=>{l()}),ue(()=>{r()}),()=>B(Ee,P(P({ref:o},e),t),n)}}),Qe=e=>{const{componentCls:s,controlSize:t,dotSize:n,marginFull:o,marginPart:a,colorFillContentHover:r}=e;return{[s]:f(f({},He(e)),{position:"relative",height:t,margin:`${a}px ${o}px`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${o}px ${a}px`},[`${s}-rail`]:{position:"absolute",backgroundColor:e.colorFillTertiary,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${s}-track`]:{position:"absolute",backgroundColor:e.colorPrimaryBorder,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},"&:hover":{[`${s}-rail`]:{backgroundColor:e.colorFillSecondary},[`${s}-track`]:{backgroundColor:e.colorPrimaryBorderHover},[`${s}-dot`]:{borderColor:r},[`${s}-handle::after`]:{boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`},[`${s}-dot-active`]:{borderColor:e.colorPrimary}},[`${s}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none",[`${s}-dragging`]:{zIndex:1},"&::before":{content:'""',position:"absolute",insetInlineStart:-e.handleLineWidth,insetBlockStart:-e.handleLineWidth,width:e.handleSize+e.handleLineWidth*2,height:e.handleSize+e.handleLineWidth*2,backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),insetBlockStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),width:e.handleSizeHover+e.handleLineWidthHover*2,height:e.handleSizeHover+e.handleLineWidthHover*2},"&::after":{boxShadow:`0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:(e.handleSize-e.handleSizeHover)/2,insetBlockStart:(e.handleSize-e.handleSizeHover)/2}}},[`${s}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${s}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${s}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${s}-dot`]:{position:"absolute",width:n,height:n,backgroundColor:e.colorBgElevated,border:`${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,"&-active":{borderColor:e.colorPrimaryBorder}},[`&${s}-disabled`]:{cursor:"not-allowed",[`${s}-rail`]:{backgroundColor:`${e.colorFillSecondary} !important`},[`${s}-track`]:{backgroundColor:`${e.colorTextDisabled} !important`},[`
          ${s}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed"},[`${s}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${e.handleLineWidth}px ${new Pe(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,insetInlineStart:0,insetBlockStart:0},[`
          ${s}-mark-text,
          ${s}-dot
        `]:{cursor:"not-allowed !important"}}})}},xe=(e,s)=>{const{componentCls:t,railSize:n,handleSize:o,dotSize:a}=e,r=s?"paddingBlock":"paddingInline",i=s?"width":"height",l=s?"height":"width",u=s?"insetBlockStart":"insetInlineStart",c=s?"top":"insetInlineStart";return{[r]:n,[l]:n*3,[`${t}-rail`]:{[i]:"100%",[l]:n},[`${t}-track`]:{[l]:n},[`${t}-handle`]:{[u]:(n*3-o)/2},[`${t}-mark`]:{insetInlineStart:0,top:0,[c]:o,[i]:"100%"},[`${t}-step`]:{insetInlineStart:0,top:0,[c]:n,[i]:"100%",[l]:n},[`${t}-dot`]:{position:"absolute",[u]:(n-a)/2}}},Ze=e=>{const{componentCls:s,marginPartWithMark:t}=e;return{[`${s}-horizontal`]:f(f({},xe(e,!0)),{[`&${s}-with-marks`]:{marginBottom:t}})}},et=e=>{const{componentCls:s}=e;return{[`${s}-vertical`]:f(f({},xe(e,!1)),{height:"100%"})}},tt=Me("Slider",e=>{const s=Te(e,{marginPart:(e.controlHeight-e.controlSize)/2,marginFull:e.controlSize/2,marginPartWithMark:e.controlHeightLG-e.controlSize});return[Qe(s),Ze(s),et(s)]},e=>{const t=e.controlHeightLG/4,n=e.controlHeightSM/2,o=e.lineWidth+1,a=e.lineWidth+1*3;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:n,dotSize:8,handleLineWidth:o,handleLineWidthHover:a}});var ae=function(e,s){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};const nt=e=>typeof e=="number"?e.toString():"",st=()=>({id:String,prefixCls:String,tooltipPrefixCls:String,range:D([Boolean,Object]),reverse:E(),min:Number,max:Number,step:D([Object,Number]),marks:Fe(),dots:E(),value:D([Array,Number]),defaultValue:D([Array,Number]),included:E(),disabled:E(),vertical:E(),tipFormatter:D([Function,Object],()=>nt),tooltipOpen:E(),tooltipVisible:E(),tooltipPlacement:Le(),getTooltipPopupContainer:z(),autofocus:E(),handleStyle:D([Array,Object]),trackStyle:D([Array,Object]),onChange:z(),onAfterChange:z(),onFocus:z(),onBlur:z(),"onUpdate:value":z()}),ot=I({compatConfig:{MODE:3},name:"ASlider",inheritAttrs:!1,props:st(),slots:Object,setup(e,s){let{attrs:t,slots:n,emit:o,expose:a}=s;const{prefixCls:r,rootPrefixCls:i,direction:l,getPopupContainer:u,configProvider:c}=ke("slider",e),[m,b]=tt(r),C=ze(),y=U(),w=U({}),h=(p,M)=>{w.value[p]=M},S=ce(()=>e.tooltipPlacement?e.tooltipPlacement:e.vertical?l.value==="rtl"?"left":"right":"top"),d=()=>{var p;(p=y.value)===null||p===void 0||p.focus()},$=()=>{var p;(p=y.value)===null||p===void 0||p.blur()},V=p=>{o("update:value",p),o("change",p),C.onFieldChange()},x=p=>{o("blur",p)};a({focus:d,blur:$});const v=p=>{var{tooltipPrefixCls:M}=p,O=p.info,{value:T,dragging:L,index:H}=O,k=ae(O,["value","dragging","index"]);const{tipFormatter:F,tooltipOpen:_=e.tooltipVisible,getTooltipPopupContainer:K}=e,$e=F?w.value[H]||L:!1,Ce=_||_===void 0&&$e;return B(qe,{prefixCls:M,title:F?F(T):"",open:Ce,placement:S.value,transitionName:`${i.value}-zoom-down`,key:H,overlayClassName:`${r.value}-tooltip`,getPopupContainer:K||(u==null?void 0:u.value)},{default:()=>[B(me,P(P({},k),{},{value:T,onMouseenter:()=>h(H,!0),onMouseleave:()=>h(H,!1)}),null)]})};return()=>{const{tooltipPrefixCls:p,range:M,id:O=C.id.value}=e,T=ae(e,["tooltipPrefixCls","range","id"]),L=c.getPrefixCls("tooltip",p),H=j(t.class,{[`${r.value}-rtl`]:l.value==="rtl"},b.value);l.value==="rtl"&&!T.vertical&&(T.reverse=!T.reverse);let k;return typeof M=="object"&&(k=M.draggableTrack),m(M?B(Je,P(P(P({},t),T),{},{step:T.step,draggableTrack:k,class:H,ref:y,handle:F=>v({tooltipPrefixCls:L,prefixCls:r.value,info:F}),prefixCls:r.value,onChange:V,onBlur:x}),{mark:n.mark}):B(Ke,P(P(P({},t),T),{},{id:O,step:T.step,class:H,ref:y,handle:F=>v({tooltipPrefixCls:L,prefixCls:r.value,info:F}),prefixCls:r.value,onChange:V,onBlur:x}),{mark:n.mark}))}}}),ut=Oe(ot);export{ut as _};
