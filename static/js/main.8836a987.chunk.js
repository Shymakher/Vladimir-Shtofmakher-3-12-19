(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(163)},108:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(108),n(20)),l=n(39),u=n(34),s=n(30),d=n(75),p=n(76),m=n(11),f={loading:!1,autocomplete:[]},h={currentWeather:null,loading:!1,error:null},E={fiveDaysOfDaily:[],loading:!1,error:null},v=n(89),y={favorites:[]},g={unit:"C",unitName:"Cels",isMetric:!0,unitStatus:"Metric"},b=Object(s.combineReducers)({autocomplete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"AUTOCOMPLETE_REQUEST":return Object(m.a)({},e,{loading:!0});case"AUTOCOMPLETE_SUCCESS":return Object(m.a)({},e,{loading:!1,autocomplete:a});case"AUTOCOMPLETE_FAILED":return Object(m.a)({},e,{loading:!1});default:return e}},currentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_CURRENT_WEATHER_REQUEST":return Object(m.a)({},e,{loading:!0,error:null});case"GET_CURRENT_WEATHER_SUCCESS":return Object(m.a)({},e,{loading:!1,currentWeather:a});case"GET_GEOLOCATION_SEARCH_FAILED":return Object(m.a)({},e,{loading:!1,error:a});default:return e}},fiveDaysOfDaily:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_FIVE_DAYS_OF_DAILY_REQUEST":return Object(m.a)({},e,{loading:!0,error:null});case"GET_FIVE_DAYS_OF_DAILY_SUCCESS":return Object(m.a)({},e,{loading:!1,fiveDaysOfDaily:a});case"GET_FIVE_DAYS_OF_DAILY_FAILED":return Object(m.a)({},e,{loading:!1,error:a});default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_FAVORITE":return Object(m.a)({},e,{favorites:[].concat(Object(v.a)(e.favorites),[a])});case"REMOVE_FAVORITE":return Object(m.a)({},e,{favorites:e.favorites.filter(function(e){return e.Key!==a})});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"CHANGE_TEMPERATURE_UNIT":return Object(m.a)({},e,{isMetric:!e.isMetric,unit:e.isMetric?"F":"C",unitName:e.isMetric?"Fahren":"Cels",unitStatus:e.isMetric?"Imperial":"Metric"});default:return e}}}),x=[p.a],O=Object(s.createStore)(b,{},Object(d.composeWithDevTools)(s.applyMiddleware.apply(void 0,x))),T=n(24),_=n.n(T),w=n(42),S=n(43),A=n.n(S),k="A5KivHhnXGuyU4upTvhgcqhmLM5C8jGA",C=function(e,t){return function(){var n=Object(w.a)(_.a.mark(function n(a){var r,o,c;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"GET_CURRENT_WEATHER_REQUEST"}),r="".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(e,"?apikey=").concat(k),n.next=5,A.a.get(r);case 5:if(o=n.sent,Array.isArray(o.data)){n.next=8;break}return n.abrupt("return",a({type:"GET_CURRENT_WEATHER_FAILED",payload:o.data}));case 8:c=Object.assign({},o.data[0],Object(m.a)({},t)),a({type:"GET_CURRENT_WEATHER_SUCCESS",payload:c}),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),a({type:"GET_CURRENT_WEATHER_FAILED",payload:n.t0.data});case 16:case"end":return n.stop()}},n,null,[[0,12]])}));return function(e){return n.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(w.a)(_.a.mark(function t(n){var a,r;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"GET_FIVE_DAYS_OF_DAILY_REQUEST"}),a="".concat("https://dataservice.accuweather.com/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(k),t.next=5,A.a.get(a);case 5:if(!(r=t.sent).data||!r.data.hasOwnProperty("code")){t.next=8;break}return t.abrupt("return",n({type:"GET_FIVE_DAYS_OF_DAILY_FAILED",payload:r.data}));case 8:n({type:"GET_FIVE_DAYS_OF_DAILY_SUCCESS",payload:r.data.DailyForecasts}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),n({type:"GET_FIVE_DAYS_OF_DAILY_FAILED",payload:t.t0.data});case 15:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(w.a)(_.a.mark(function t(n){var a,r;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search","?apikey=").concat(k,"&q=").concat(e),t.next=4,A.a.get(a);case 4:if(!(r=t.sent).data||!r.data.hasOwnProperty("code")){t.next=7;break}return t.abrupt("return",n({type:"GET_GEOLOCATION_SEARCH_FAILED",payload:r.data}));case 7:n(C(parseInt(r.data.Key),r.data)),n(F(parseInt(r.data.Key))),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),n({type:"GET_GEOLOCATION_SEARCH_FAILED",payload:t.t0.data});case 15:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},j=n(77),I=n.n(j),R=n(31),N=n(32);function M(){var e=Object(R.a)(["\n  background: ",";\n  color: ",";\n  transition: all 0.25s linear;\n  h1 {\n    color: ","; \n  }\n  a {\n    color: ",";\n  }\n  height: 100vh;\n  \n  .MuiOutlinedInput-notchedOutline {\n    border-color: ",";\n    \n    &:hover {\n      border-color: #fff;\n    }\n  }\n  .MuiAutocomplete-popupIndicator {\n    color: ",";\n  }\n  \n  .MuiSwitch-track {\n  background-color: ","\n  }\n"]);return M=function(){return e},e}var L=Object(N.a)("div")(M(),function(e){return e.theme.background},function(e){return e.theme.color},function(e){return e.theme.color},function(e){return e.theme.color},function(e){return e.theme.color},function(e){return e.theme.color},function(e){return e.theme.color}),U=n(192),W=n(201),G=n(202),V=n(59),K=n(80),Y={background:"#F8F8F9",color:"#161617",boxShadow:"#00000029",anchor:"#65656587"},H={background:"#161617",color:"#FFFFFF",boxShadow:"#ffffff70",anchor:"#b6b6b6d6"},P=function(e){return"dark"===e?H:Y},z=r.a.createContext({dark:!1,toggle:function(){}});function Q(){var e=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 30px;\n  box-shadow: ",";\n\n  ul {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    li {\n    span {\n    cursor: pointer;\n    }\n\n      &:nth-of-type(2){\n        width: 100px;\n      }\n\n      &:not(:last-child) {\n        margin-right: 10px;\n      }\n\n      .is-active {\n        color: ",";\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var q=Object(N.a)("div")(Q(),function(e){return"0 3px 6px ".concat(e.theme.boxShadow,", 0 3px 6px ").concat(e.theme.boxShadow,";")},function(e){return e.theme.anchor}),J=Object(i.b)(function(e){return{settings:e.settings}},{cnahgeTemparatureUnit:function(){return{type:"CHANGE_TEMPERATURE_UNIT"}}})(function(e){var t=e.cnahgeTemparatureUnit,n=e.settings,a=n.unitName,o=n.isMetric,c=function(){t()},i=r.a.useContext(z);return r.a.createElement(q,null,r.a.createElement(l.b,{to:"/"},"Herolo Weather Task"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{onClick:i.toggle},i.dark?"Switch to Light Mode":"Switch to Dark Mode")),r.a.createElement("li",null,r.a.createElement(U.a,null,r.a.createElement(W.a,{control:r.a.createElement(G.a,{checked:!o,onChange:c,color:"default"}),label:a}))),r.a.createElement("li",null,r.a.createElement(l.c,{exact:!0,to:"/Vladimir-Shtofmakher-3-12-19",activeClassName:"is-active"},"Main")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/Vladimir-Shtofmakher-3-12-19/favorites",activeClassName:"is-active"},"Favorites"))))}),B=n(85),$=n.n(B),X=n(200),Z=n(199),ee=Object(i.b)(function(e){return{autocomplete:e.autocomplete.autocomplete}},{getAutocompleteResults:function(e){return function(){var t=Object(w.a)(_.a.mark(function t(n){var a,r;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"AUTOCOMPLETE_REQUEST"}),a="".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?","apikey=").concat(k,"&q=").concat(e,"&language=en-us"),t.next=5,A.a.get(a);case 5:r=t.sent,n({type:"AUTOCOMPLETE_SUCCESS",payload:r.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Error",t.t0),n({type:"AUTOCOMPLETE_FAILED",payload:t.t0});case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},getCurrentWeather:C,getFiveDaysOfDaily:F})(function(e){var t=e.autocomplete,n=e.getAutocompleteResults,a=e.getCurrentWeather,o=e.getFiveDaysOfDaily,c=$.a.debounce(function(e,t){t&&/^[a-zA-Z]+$/.test(t)&&n(t)},2e3);return r.a.createElement("div",{className:"search-bar"},r.a.createElement(X.a,{id:"combo-box-demo",options:t,getOptionLabel:function(e){return e.LocalizedName},onInputChange:c,onChange:function(e,t){if(t){var n=parseInt(t.Key);a(n,t),o(n,t)}},style:{width:300},renderInput:function(e){return r.a.createElement(Z.a,Object.assign({},e,{label:"Enter City",variant:"outlined",fullWidth:!0}))}}))}),te=n(87),ne=n.n(te),ae=n(88),re=n.n(ae),oe=(n(160),function(){return r.a.createElement(re.a,{type:"TailSpin",color:"#9f9f9f",height:50,width:80})}),ce=function(e,t,n){if(t===n)return"".concat(e," ").concat(t);switch(t){case"C":return"".concat((a=e,Math.floor(1.8*a+32))," ").concat(n);case"F":return"".concat(function(e){return Math.floor((e-32)/1.8)}(e)," ").concat(n);default:return"invalid unit"}var a};function ie(){var e=Object(R.a)(["\n  box-shadow: ",";\n  padding: 20px;\n  width: 75%;\n  margin: 0 auto;\n\n  .general-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n\n    ul {\n      li {\n        &:not(:last-child) {\n          margin-bottom: 10px;\n        }\n      }\n    }\n\n    .favorite {\n      cursor: pointer;\n      i {\n        margin-right: 10px;\n      }\n    }\n  }\n\n  .weather-title {\n    display: flex;\n    justify-content: center;\n    font-size: 22px;\n    margin-bottom: 25px;\n  }\n\n  .five-days {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n\n    .day {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      padding: 15px;\n      margin-bottom: 10px;\n      box-shadow: ",";\n      transition: all ease-in-out .2s;\n\n      & > :not(:last-child){\n        margin-bottom: 10px;\n      }\n \n      &:hover {\n        transition: all ease-in-out .3s;\n        box-shadow: ",";\n      }\n    }\n  }\n\n  @media screen and (max-width: 970px) {\n    width: 100%;\n  }\n"]);return ie=function(){return e},e}var le=Object(N.a)("div")(ie(),function(e){return"0 3px 6px ".concat(e.theme.boxShadow,", 0 3px 6px ").concat(e.theme.boxShadow,";")},function(e){return"0 1px 3px ".concat(e.theme.boxShadow,", 0 1px 2px ").concat(e.theme.boxShadow,";")},function(e){return"0 7px 14px ".concat(e.theme.boxShadow,", 0 5px 5px ").concat(e.theme.boxShadow,";")}),ue=Object(i.b)(function(e){return{currentWeather:e.currentWeather,fiveDaysOfDaily:e.fiveDaysOfDaily,favorites:e.favorites,settings:e.settings}},{addToFavorites:function(e){return function(t){t({type:"SET_FAVORITE",payload:Object.assign({},{Key:e.Key,LocalizedName:e.LocalizedName,Temperature:e.Temperature,WeatherText:e.WeatherText})})}},removeFromFavorites:function(e){return{type:"REMOVE_FAVORITE",payload:e}}})(function(e){var t=e.currentWeather,n=e.fiveDaysOfDaily,a=e.favorites,o=e.addToFavorites,c=e.removeFromFavorites,i=e.settings;if((t.loading||n.loading)&&(!t.error||!n.error))return r.a.createElement(oe,null);if((!t.loading||!n.loading)&&(t.error||n.error))return alert(t.error.Message),r.a.createElement("h1",null,t.error.Message);if(!t.currentWeather&&0===n.fiveDaysOfDaily.length)return null;var l=t.currentWeather,u=l.LocalizedName,s=l.Temperature,d=l.WeatherText,p=t.currentWeather,m=s[i.unitStatus],f=a.favorites.find(function(e){return e.Key===t.currentWeather.Key});return r.a.createElement(le,null,r.a.createElement("div",{className:"general-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",{className:"city-name"},u)),r.a.createElement("li",null,r.a.createElement("p",{className:"city-temperature"},m.Value," ",m.Unit))),r.a.createElement("div",{className:"favorite"},r.a.createElement("span",{onClick:function(){f?c(p.Key):o(p)}},function(){var e=[],t=0;return f?e.push(r.a.createElement("i",{className:"fas fa-heart",key:++t}),r.a.createElement("span",{key:++t},"Remove from Favorites")):e.push(r.a.createElement("i",{className:"far fa-heart",key:++t}),r.a.createElement("span",{key:++t},"Add to Favorites")),e}()))),r.a.createElement("div",{className:"weather-title"},d),r.a.createElement("ul",{className:"five-days"},n.fiveDaysOfDaily.map(function(e,t){return r.a.createElement("li",{key:t,className:"day"},r.a.createElement("span",null,r.a.createElement(ne.a,{format:"dddd"},e.Date)),r.a.createElement("span",null,"min: ",ce(e.Temperature.Minimum.Value,e.Temperature.Minimum.Unit,i.unit)),r.a.createElement("span",null,"max: ",ce(e.Temperature.Maximum.Value,e.Temperature.Minimum.Unit,i.unit)))})))}),se=function(){return r.a.createElement("div",{className:"content"},r.a.createElement(ee,null),r.a.createElement(ue,null))};function de(){var e=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n  max-width: 75%;\n  margin: 0 auto;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    transition: all ease-in-out .2s;\n    box-shadow: ",";\n    padding: 20px;\n    cursor: pointer;\n\n    & > :not(:last-child){\n      margin-bottom: 10px;\n    }\n\n    &:hover {\n      transition: all ease-in-out .3s;\n      box-shadow: ",";\n    }\n  }\n"]);return de=function(){return e},e}var pe=Object(N.a)("ul")(de(),function(e){return"0 1px 3px ".concat(e.theme.boxShadow,", 0 1px 2px ").concat(e.theme.boxShadow,";")},function(e){return"0 7px 14px ".concat(e.theme.boxShadow,", 0 5px 5px ").concat(e.theme.boxShadow,";")}),me=Object(i.b)(function(e){var t=e.favorites;return{settings:e.settings,favorites:t}},{getCurrentWeather:C,getFiveDaysOfDaily:F})(Object(u.f)(function(e){var t=e.favorites.favorites,n=e.settings,a=e.getCurrentWeather,o=e.getFiveDaysOfDaily,c=e.history;return r.a.createElement(pe,null,t.map(function(e){var t=e.Temperature[n.unitStatus];return r.a.createElement("li",{onClick:function(){return function(e,t){a(e,{LocalizedName:t.LocalizedName,Key:t.Key}),o(e),c.push("/Vladimir-Shtofmakher-3-12-19")}(parseInt(e.Key),e)},key:e.Key},r.a.createElement("span",null,e.LocalizedName),r.a.createElement("span",null,t.Value," ",t.Unit),r.a.createElement("span",null,e.WeatherText))}))}));n(161),n(162);I.a.setAppElement("#root");var fe={Key:"215854",LocalizedName:"Tel Aviv"};var he=function(){return Object(a.useEffect)(function(){navigator.geolocation&&navigator.permissions&&navigator.permissions.query({name:"geolocation"}).then(function(e){if("granted"===e.state||"prompt"===e.state)navigator.geolocation.getCurrentPosition(function(e){var t="".concat(e.coords.latitude,",").concat(e.coords.longitude);O.dispatch(D(t))});else{var t=parseInt(fe.Key);O.dispatch(C(t,fe)),O.dispatch(F(t))}})},[]),r.a.createElement(i.a,{store:O},r.a.createElement(l.a,null,r.a.createElement(L,null,r.a.createElement(J,null),r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/Vladimir-Shtofmakher-3-12-19",component:se}),r.a.createElement(u.a,{exact:!0,path:"/Vladimir-Shtofmakher-3-12-19/favorites",component:me}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(e){var t=e.children,n=function(){var e=r.a.useState({dark:!1,hasThemeMounted:!1}),t=Object(V.a)(e,2),n=t[0],a=t[1];return r.a.useEffect(function(){var e="true"===localStorage.getItem("dark");a(Object(m.a)({},n,{dark:e,hasThemeMounted:!0}))},[]),[n,a]}(),a=Object(V.a)(n,2),o=a[0],c=a[1];if(!o.hasThemeMounted)return r.a.createElement("div",null);var i=o.dark?P("dark"):P("light");return r.a.createElement(K.a,{theme:i},r.a.createElement(z.Provider,{value:{dark:o.dark,toggle:function(){var e=!o.dark;localStorage.setItem("dark",JSON.stringify(e)),c(Object(m.a)({},o,{dark:e}))}}},t))},null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.8836a987.chunk.js.map