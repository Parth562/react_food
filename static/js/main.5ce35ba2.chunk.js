(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",loading:"AvailableMeals_loading__3nkz1",httpError:"AvailableMeals_httpError__2bjtP"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/meals.c1ae4618.jpg",l=n(0),u=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=n(10),j=n.n(d),m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),b=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(m),o=s.items,d=s.items.reduce((function(e,t){return e+t.amount}),0),b="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==o.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(l.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(l.jsx)("span",{className:j.a.icon,children:Object(l.jsx)(u,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:j.a.badge,children:d})]})},O=n(17),h=n.n(O),x=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("header",{className:h.a.header,children:[Object(l.jsx)("h1",{children:"ReactFoods"}),Object(l.jsx)(b,{onClick:e.onShowCart})]}),Object(l.jsx)("div",{className:h.a["main-image"],children:Object(l.jsx)("img",{src:o,alt:"meals-image"})})]})},p=n(19),f=n.n(p),_=function(){return Object(l.jsxs)("section",{className:f.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),y=n(3),N=n(12),g=n(13),A=n.n(g),k=n(20),w=n.n(k),I=function(e){return Object(l.jsx)("div",{className:"".concat(w.a.card," ").concat(e.className),children:e.children})},S=n(14),M=n.n(S),F=n(21),H=n.n(F),E=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:H.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(y.a)({ref:t},e.input))]})})),R=n(22),P=n.n(R),D=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(l.jsxs)("form",{className:P.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(l.jsx)(E,{ref:s,label:"Amount",input:{type:"number",id:"amount_"+e.key,min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{type:"submit",children:"+ Add"}),!c&&Object(l.jsx)("p",{style:{color:"red"},children:"Please enter a valid amount(1-5)"})]})},B=function(e){var t="\u20b9 ".concat(e.price.toFixed(2)),n=Object(i.useContext)(m);return Object(l.jsxs)("li",{className:M.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:e.name})}),Object(l.jsx)("div",{className:M.a.description,children:e.description}),Object(l.jsx)("div",{className:M.a.price,children:t})]}),Object(l.jsx)("div",{children:Object(l.jsx)(D,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,price:e.price,amount:t})}})})]})},T=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){(function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-food-f6369-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong...");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push(Object(y.a)({id:r},n[r]));c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),b(e.message)}))}),[]),o)return Object(l.jsx)("section",{className:A.a.loading,children:Object(l.jsx)("h2",{children:"Loading..."})});if(m)return Object(l.jsx)("section",{className:A.a.httpError,children:Object(l.jsx)("h2",{children:m})});var O=n.map((function(e){return Object(l.jsx)(B,{name:e.name,price:e.price,description:e.description,id:e.id},e.id)}));return Object(l.jsx)("section",{className:A.a.meals,children:Object(l.jsx)(I,{children:Object(l.jsx)("ul",{children:O})})})},z=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(_,{}),Object(l.jsx)(T,{})]})},L=n(15),Y=n.n(L),J=function(e){return Object(l.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},U=function(e){return Object(l.jsx)("div",{className:Y.a.modal,children:Object(l.jsx)("div",{className:Y.a.content,children:e.children})})},V=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(l.jsx)(J,{onClose:e.onClose}),document.getElementById("overlays")),a.a.createPortal(Object(l.jsx)(U,{children:e.children}),document.getElementById("overlays"))]})},Z=n(5),q=n.n(Z),Q=n(7),X=n.n(Q),G=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:X.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:X.a.summary,children:[Object(l.jsx)("span",{className:X.a.price,children:t}),Object(l.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:X.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(4),W=n.n(K),$=function(e){return""===e.trim()},ee=function(e){var t=Object(i.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(W.a.control," ").concat(c.name?"":W.a.invalid),m="".concat(W.a.control," ").concat(c.street?"":W.a.invalid),b="".concat(W.a.control," ").concat(c.postalCode?"":W.a.invalid),O="".concat(W.a.control," ").concat(c.city?"":W.a.invalid);return Object(l.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=u.current.value,i=d.current.value,l=!$(n),j=!$(c),m=6===r.trim().length,b=!$(i);a({name:l,street:j,postalCode:m,city:b}),l&&j&&m&&b&&e.onConfirm({name:n,street:c,postalCode:r,city:i})},children:[Object(l.jsxs)("div",{className:j,children:[Object(l.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(l.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(l.jsx)("p",{children:"Please enter a valid name"})]}),Object(l.jsxs)("div",{className:m,children:[Object(l.jsx)("label",{htmlFor:"street",children:"Street"}),Object(l.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(l.jsx)("p",{children:"please enter a valid street"})]}),Object(l.jsxs)("div",{className:b,children:[Object(l.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(l.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(l.jsx)("p",{children:"please enter a valid postal code"})]}),Object(l.jsxs)("div",{className:O,children:[Object(l.jsx)("label",{htmlFor:"city",children:"City"}),Object(l.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(l.jsx)("p",{children:"Please enter a valid city name"})]}),Object(l.jsxs)("div",{className:W.a.actions,children:[Object(l.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(l.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},te=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),u=Object(r.a)(o,2),d=u[0],j=u[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],p=Object(i.useContext)(m),f="\u20b9".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,v=function(e){p.removeItem(e)},g=function(e){p.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},A=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://food-delivery-8b74c-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:j(!1),x(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(l.jsx)("ul",{className:q.a["cart-items"],children:p.items.map((function(e){return Object(l.jsx)(G,{name:e.name,price:e.price,amount:e.amount,onRemove:v.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),w=Object(l.jsxs)("div",{className:q.a.actions,children:[Object(l.jsx)("button",{className:q.a["button--alt"],onClick:e.onHideCart,children:"Close"}),_&&Object(l.jsx)("button",{className:q.a.button,onClick:function(){a(!0)},children:"Order"})]}),I=Object(l.jsxs)(s.a.Fragment,{children:[k,Object(l.jsxs)("div",{className:q.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:f})]}),c&&Object(l.jsx)(ee,{onConfirm:A,onCancel:e.onHideCart}),!c&&w]}),S=Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("p",{children:"Your order is on your way...!!"}),Object(l.jsx)("div",{className:q.a.actions,children:Object(l.jsx)("button",{className:q.a.button,onClick:e.onHideCart,children:"Close"})})]});return Object(l.jsxs)(V,{onClose:e.onHideCart,children:[!d&&!h&&I,d&&!h&&Object(l.jsx)("p",{children:"Sending your order...!!"}),h&&S]})},ne=n(18),ce={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.amount*t.item.price,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(y.a)(Object(y.a)({},r),{},{amount:r.amount+t.item.amount});e.items[a]=i,n=Object(ne.a)(e.items)}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],l=e.totalAmount-o.price;return 1===o.amount?{items:e.items.filter((function(e){return e.id!=o.id})),totalAmount:l}:(e.items[s]=Object(y.a)(Object(y.a)({},o),{},{amount:o.amount-1}),{items:Object(ne.a)(e.items),totalAmount:l})}return t.type,ce},re=function(e){var t=Object(i.useReducer)(ae,ce),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(l.jsx)(m.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(re,{children:[n&&Object(l.jsx)(te,{onHideCart:function(){c(!1)}}),Object(l.jsx)(x,{onShowCart:function(){c(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(z,{})})]})};a.a.render(Object(l.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.5ce35ba2.chunk.js.map
