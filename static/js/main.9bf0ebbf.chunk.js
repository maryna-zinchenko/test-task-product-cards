(this["webpackJsonptest-task-product-cards"]=this["webpackJsonptest-task-product-cards"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),s=a.n(c),n=a(3),r=a.n(n),d=(a(13),a(4)),o=a(5),l=a(7),m=a(6),u=(a(14),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={quantity:1,radio:"100",cost:e.props.oneItem,oneItem:+e.props.oneItem},e.minusOne=function(){e.state.quantity>1&&e.setState((function(t){return{quantity:t.quantity-1,cost:+e.state.cost>+e.state.oneItem?t.cost-t.oneItem:t.oneItem}}))},e.addOne=function(){e.setState((function(e){return{quantity:e.quantity+1,cost:+e.cost+e.oneItem}}))},e.changeRadio=function(t){e.setState({radio:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,c=e.imgUrl,s=e.id,n=this.state,r=n.quantity,d=n.cost;return Object(i.jsxs)("article",{className:"card",children:[Object(i.jsx)("div",{className:"card__new",children:"New"}),Object(i.jsx)("a",{href:"compare",className:"card__compare",children:Object(i.jsx)("img",{className:"card__compare-img",src:"./images/3.png",alt:"compare-logo"})}),Object(i.jsx)("div",{className:"card__image-wrapper",children:Object(i.jsx)("img",{src:c,alt:"product",className:"card__image"})}),Object(i.jsx)("h3",{className:"card__title",children:t}),Object(i.jsx)("p",{className:"card__description",children:a}),Object(i.jsxs)("div",{className:"card__select ",children:["\u0426\u0432\u0435\u0442",Object(i.jsxs)("ul",{className:"card__select-list",children:[Object(i.jsx)("li",{className:"card__select-item",children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"}),Object(i.jsx)("li",{className:"card__select-item",children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"}),Object(i.jsx)("li",{className:"card__select-item",children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"})]})]}),Object(i.jsxs)("div",{className:"card__cost",children:[d," \u0433\u0440\u043d"]}),Object(i.jsxs)("div",{className:"card__inputs",children:[Object(i.jsxs)("div",{className:"card__radio",onChange:this.changeRadio,children:[Object(i.jsx)("input",{id:s+1,type:"radio",name:s,value:"100",checked:"100"===this.state.radio}),Object(i.jsx)("label",{htmlFor:s+1,children:"100 \u043c\u043b"})]}),Object(i.jsxs)("div",{className:"card__radio",onChange:this.changeRadio,children:[Object(i.jsx)("input",{id:s+2,type:"radio",name:s,value:"200",checked:"200"===this.state.radio}),Object(i.jsx)("label",{htmlFor:s+2,children:"200 \u043c\u043b"})]}),Object(i.jsxs)("div",{className:"card__radio",onChange:this.changeRadio,children:[Object(i.jsx)("input",{id:s+3,type:"radio",name:s,value:"300",checked:"300"===this.state.radio}),Object(i.jsx)("label",{htmlFor:s+3,children:"300 \u043c\u043b"})]})]}),Object(i.jsxs)("div",{className:"card__counter",children:[Object(i.jsx)("button",{className:"card__minus",type:"button",onClick:this.minusOne,children:"-"}),Object(i.jsx)("div",{className:"card__quantity",children:r}),Object(i.jsx)("button",{type:"button",onClick:this.addOne,className:"card__add",children:"+"})]}),Object(i.jsx)("button",{className:"card__btn",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})}}]),a}(s.a.Component));a(15);var j=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imgUrl:"./images/image1.png",oneItem:"200",id:"1"}),Object(i.jsx)(u,{title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imgUrl:"./images/image2.png",oneItem:"250",id:"2"}),Object(i.jsx)(u,{title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imgUrl:"./images/image3.png",oneItem:"300",id:"3"})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),s(e),n(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.9bf0ebbf.chunk.js.map